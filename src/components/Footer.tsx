export default function Footer() {
  return (
    <footer className="flex justify-center border border-[#3a3a3a] bg-[#191919] bg-opacity-50 mt-8 mb-8">
      <p className="text-[#aaaaaa] text-xs text-center p-2">Designed and built in Astro/React</p>
      <a href="" className="self-center ml-2">
        <img src="/github-alt.svg" className="" alt="github logo" width="20" height="20" />
      </a>
    </footer>
  );
}
