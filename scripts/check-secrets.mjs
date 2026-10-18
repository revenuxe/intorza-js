import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
if (fs.existsSync(".env")) process.loadEnvFile();
const trackedEnvFiles = execFileSync("git", ["ls-files", "-z", "--", ".env", ".env.*"], {
  encoding: "utf8",
  stdio: ["ignore", "pipe", "pipe"],
})
  .split("\0")
  .filter((name) => name && name !== ".env.example");
const findings = [];
function walk(dir, fn) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, fn);
    else fn(p);
  }
}
walk(".next/static", (p) => {
  if (!p.endsWith(".js")) return;
  const text = fs.readFileSync(p, "utf8");
  for (const [name, value] of Object.entries(process.env)) {
    if (
      /SUPABASE|SECRET|TOKEN|PASSWORD|PRIVATE_KEY|DATABASE_URL|API_KEY|ACCESS_KEY|CREDENTIAL/.test(
        name,
      ) &&
      value.length >= 20 &&
      text.includes(value)
    )
      findings.push({ file: p, variable: name });
  }
});
const secrets = [];
for (const root of ["src", "public", "supabase/migrations"])
  walk(root, (p) => {
    if (!/\.(ts|tsx|js|mjs|sql|json|txt|md)$/.test(p)) return;
    const text = fs.readFileSync(p, "utf8");
    if (/sb_secret_[A-Za-z0-9_-]+|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(text))
      secrets.push({ file: p, kind: "private credential pattern" });
    for (const m of text.matchAll(/eyJ[A-Za-z0-9_-]+\.([A-Za-z0-9_-]+)\.[A-Za-z0-9_-]+/g)) {
      try {
        const payload = JSON.parse(Buffer.from(m[1], "base64url"));
        if (payload.role === "service_role") secrets.push({ file: p, kind: "service-role JWT" });
      } catch {}
    }
  });
console.log(
  JSON.stringify(
    { trackedEnvFiles, clientEnvironmentLeaks: findings, sourceCredentialFindings: secrets },
    null,
    2,
  ),
);
if (trackedEnvFiles.length || findings.length || secrets.length) process.exitCode = 1;
