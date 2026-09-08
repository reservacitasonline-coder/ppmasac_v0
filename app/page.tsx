import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";
import { Testimonial } from "@/components/sections/Testimonial";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="main">
        <Statement />
        <Stats />
        <About />
        <Services />
        <Process />
        <Faq />
        <Testimonial />
      </main>
    </>
  );
}
