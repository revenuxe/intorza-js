import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { validateContact } from "./contact-validation.ts";

const valid = {
  name: "Interior Studio",
  email: "studio@example.com",
  subject: "Quotation support",
  message: "Please help us set up our first quotation.",
};
describe("contact submission boundaries", () => {
  it("accepts a complete contact message", () => assert.equal(validateContact(valid), null));
  it("rejects malformed and injected email addresses", () => {
    for (const email of [
      "",
      "missing-at.example.com",
      "person@",
      "person@example.com\r\nBcc:other@example.com",
    ])
      assert.ok(validateContact({ ...valid, email }));
  });
  it("rejects missing and oversized fields", () => {
    for (const field of ["name", "subject", "message"] as const)
      assert.ok(validateContact({ ...valid, [field]: "" }));
    for (const [field, length] of [
      ["name", 121],
      ["email", 255],
      ["subject", 201],
      ["message", 5001],
    ] as const)
      assert.ok(validateContact({ ...valid, [field]: "x".repeat(length) }));
  });
});
