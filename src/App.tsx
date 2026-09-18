import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import SelectedProjects from "./components/sections/SelectedProjects";
import Featured from "./components/sections/Featured";
import Approach from "./components/sections/Approach";
import Studio from "./components/sections/Studio";
import Contact from "./components/sections/Contact";

/**
 * Página completa: Header + Hero + Selected Projects + Featured +
 * Approach + Studio + Contact + Footer.
 */
export default function App() {
  return (
    <>
      <Header />
      <main id="top" className="bg-paper text-ink">
        <Hero />
        <SelectedProjects />
        <Featured />
        <Approach />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
