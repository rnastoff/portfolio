export default function Home() {
  return (
    <section className="mt-4">
      <div className="border border-[#3a3a3a] bg-[#191919] bg-opacity-50">
        <h3 className="text-[#eeeeee] text-xl font-bold py-1 px-2">ABOUT</h3>
      </div>
      <div className="text-[#aaaaaa] text-base border-l-[1px] border-r-[1px] border-b-[1px]  border-[#3a3a3a] bg-[#191919] bg-opacity-25 py-2 px-2">
        <p>
          I'm a React developer from Chicago, IL. I currently work as a motion graphics designer, but I'm looking to
          pivot into web development.
        </p>
        <p className="mt-4">Some of the technologies I've been using:</p>
        <p>HTML, CSS, Javascript, React, NextJS, Typescript, Tailwind, Prisma.</p>
      </div>
    </section>
  );
}
