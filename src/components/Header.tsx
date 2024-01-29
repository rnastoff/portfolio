import { getDate } from "../utils/utils";

export default function Header() {
  return (
    <header className="flex justify-between sm:mt-8 mt-2">
      <div className="self-end">
        <h1 className="text-[#eeeeee] sm:text-5xl text-3xl font-black">ROB NASTOFF</h1>
        <h2 className="text-[#aaaaaa] sm:text-xl text-lg sm:-mt-1 -mt-2 ml-[1px]">REACT DEVELOPER</h2>
      </div>
      <div className="self-end">
        <div className="flex justify-end">
          <a href="https://github.com/rnastoff" target="_blank" className="self-center">
            <img src="/github.svg" className="" alt="github logo" width="20" height="20" />
          </a>
          <a href="https://www.linkedin.com/in/robert-nastoff-2b6ba592/" target="_blank" className="self-center">
            <img src="/linkedin.svg" className="ml-2" alt="linked in logo" width="20" height="20" />
          </a>
        </div>
        <p className="text-[#aaaaaa] text-xs text-right mt-1">u. {getDate()}</p>
      </div>
    </header>
  );
}
