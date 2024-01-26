// import logofrom '.'

export default function Header() {
  return (
    <header className="w-full border border-[#3a3a3a] bg-[#191919] bg-opacity-50 mt-10">
      <div className="flex justify-between text-[#eeeeee]">
        <div className="self-center border-r-[1px] border-[#3a3a3a] py-2 px-4">
          <img className="" src="/rn.svg" alt="rn logo" width="30" />
        </div>

        <div className="flex self-center">
          <ul className="flex border-r-[1px] border-[#3a3a3a] p-2">
            <li className="self-center text-sm">
              <a href="">ABOUT</a>
            </li>
            <li className="self-center text-sm ml-8">
              <a href="">PROJECTS</a>
            </li>
            <li className="self-center text-sm ml-8 mr-2">
              <a href="">CONTACT</a>
            </li>
          </ul>

          <div className="flex py-2 px-4">
            <a href="" className="self-center">
              <img src="/github.svg" className="" alt="github logo" width="20" height="20" />
            </a>
            <a href="" className="self-center">
              <img src="/linkedin.svg" className="ml-4" alt="linked in logo" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
