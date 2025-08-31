
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesHeroWrapper from "./components/CategoriesHeroWrapper";
import Footer from ".//components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      <Navbar />

     
      <section className="mb-8">
        <Hero />
      </section>

      
      <section className="px-4">
        <CategoriesHeroWrapper />
      </section>

      <section className="px-4">
        <Footer />
      </section>

    </main>
  );
}
