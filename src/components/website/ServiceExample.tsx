import type { ServiceExample as Example } from "@/data/service-examples";

export default function ServiceExample({ example }: { example: Example }) {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="font-display text-3xl font-bold md:text-4xl">{example.heading}</h2>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">{example.brief}</p>
        <div className="mt-7 overflow-x-auto border border-border bg-card">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="border-b border-border px-5 py-3 text-left text-xs text-muted-foreground">
              Illustrative example for understanding the scope; not a client project or an agreed deliverable.
            </caption>
            <thead className="bg-muted"><tr>{example.columns.map(column => <th key={column} scope="col" className="p-4 font-semibold">{column}</th>)}</tr></thead>
            <tbody>{example.rows.map(([label, value, note]) => (
              <tr key={label} className="border-t border-border align-top">
                <th scope="row" className="p-4 font-semibold">{label}</th>
                <td className="p-4 leading-relaxed">{value}</td>
                <td className="p-4 leading-relaxed text-muted-foreground">{note}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed">{example.takeaway}</p>
        <h3 className="mt-7 font-display text-xl font-semibold">Review this example against your brief</h3>
        <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {example.review.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
