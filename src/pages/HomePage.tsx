import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Playground } from "@/components/portfolio/Playground";
import { Services } from "@/components/portfolio/Services";
import { Stack } from "@/components/portfolio/Stack";
import { Work } from "@/components/portfolio/Work";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Stack />
        <Services />
        <Playground />
        <About />
        <Contact />
      </main>
    </div>
  );
}
