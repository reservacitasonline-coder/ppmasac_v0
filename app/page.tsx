import type { Metadata } from "next";

import { About } from "@/components/sections/About";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Services } from "@/components/sections/Services";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";
import { aboutSchema, homePageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd graph={[homePageSchema(), aboutSchema()]} />
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
