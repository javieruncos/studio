import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

/**
 * TEMPORAL — Header + Hero only.
 * Sections and footer land in later phases.
 */
export default function App() {
  return (
    <>
      <Header />
      <main id="top" className="bg-paper text-ink">
        <Hero />
      </main>
    </>
  );
}
