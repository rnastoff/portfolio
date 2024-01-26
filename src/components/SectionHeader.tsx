interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="border border-[#3a3a3a] bg-[#191919] bg-opacity-50">
      <h3 className="text-[#eeeeee] sm:text-xl text-lg font-bold py-1 px-2">{title}</h3>
    </div>
  );
}
