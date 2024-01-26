export default function SectionBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[#aaaaaa] border-l-[1px] border-r-[1px] border-b-[1px]  border-[#3a3a3a] bg-[#191919] bg-opacity-25">
      {children}
    </div>
  );
}
