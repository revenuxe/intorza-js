import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 md:pt-36">
        {children}
      </main>
      <Footer />
    </>
  );
}
