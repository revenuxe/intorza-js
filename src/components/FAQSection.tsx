import { homepageFaqs } from "@/lib/seo";
export default function FAQSection({
  faqs = homepageFaqs,
  title = "Frequently asked questions",
}: {
  faqs?: Array<{ q: string; a: string }>;
  title?: string;
}) {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom max-w-4xl">
        <h2 className="font-display text-3xl font-bold mb-8">{title}</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="border-2 border-foreground bg-background p-5">
              <summary className="font-semibold cursor-pointer">{faq.q}</summary>
              <p className="mt-3 text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
