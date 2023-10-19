'use client';

import SectionWrapper from "@hoc/SectionWrapper";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-center flex-col bg-heroImg">
      Hello
    </section>
  )
};

export default SectionWrapper(Hero, '');