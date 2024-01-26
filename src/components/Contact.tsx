import SectionHeader from "./SectionHeader";
import SectionBodyWrapper from "./SectionBodyWrapper";

export default function Contact() {
  return (
    <section className="mt-8">
      <SectionHeader title="CONTACT" />
      <SectionBodyWrapper>
        <form className="py-3 px-2">
          <textarea
            className="w-full h-32 bg-[#191919] bg-opacity-50 text-[#eeeeee] border border-[#3a3a3a] sm:text-base text-sm p-2 outline-none placeholder-[#aaaaaa] resize-none"
            placeholder="Send me a message"
          />
          <div className="flex ">
            <button className="text-[#eeeeee] bg-[#191919] bg-opacity-50 px-4 py-2 text-center border border-[#3a3a3a] w-full mt-2">
              SUBMIT
            </button>
          </div>
        </form>
      </SectionBodyWrapper>
    </section>
  );
}
