import SectionHeader from "./SectionHeader";
import SectionBodyWrapper from "./SectionBodyWrapper";

export default function Home() {
  return (
    <section className="mt-4">
      <SectionHeader title="ABOUT" />
      <SectionBodyWrapper>
        <div className="text-sm py-3 px-2">
          <p>
            I'm a React developer from Chicago, IL. I currently work as a motion graphics designer, but I'm looking to
            pivot into web development.
          </p>
          <p className="mt-4">Some of the technologies I've been using:</p>
          <p>HTML, CSS, Javascript, React, NextJS, Typescript, Tailwind</p>
        </div>
      </SectionBodyWrapper>
    </section>
  );
}
