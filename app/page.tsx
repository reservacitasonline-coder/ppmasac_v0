import { About } from "@/components/sections/About";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="main">
        <Statement />
        <Stats />
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>
    </>
  );
}
