export default function Home() {
  return (
    <div className="absolute h-screen top-0  ">
      <div className="relative top-1/2 -translate-y-[90%]">
        <h1 className="text-[#eeeeee] text-7xl font-black">ROB NASTOFF</h1>
        <div className="border border-[#3a3a3a] bg-[#191919] bg-opacity-50 py-[2px] px-[4px]">
          <p className="text-[#eeeeee] text-xl font-bold">REACT DEVELOPER</p>
        </div>
        <p className="text-[#aaaaaa] text-base mt-2">
          I'm a web Developer from Chicago, Illlinois. I work with React and NextJS.
        </p>
      </div>
    </div>
  );
}

/*

// Margin top
flex flex-col content-center justify-center h-screen 
relative top-1/2 translate-y-1/2

// Abbsolute - 50% trickUgh.
<div className="absolute h-screen top-0  ">
<div className="relative top-1/2 -translate-y-1/2">
*/
