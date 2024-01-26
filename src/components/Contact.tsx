export default function Contact() {
  return (
    <section className="mt-8">
      <div className="border border-[#3a3a3a] bg-[#191919] bg-opacity-50">
        <h3 className="text-[#eeeeee] text-xl font-bold py-1 px-2">CONTACT</h3>
      </div>
      <div className="text-[#aaaaaa] text-base border-l-[1px] border-r-[1px] border-b-[1px]  border-[#3a3a3a] bg-[#191919] bg-opacity-25 py-4 px-4">
        <form>
          <textarea
            className="w-full h-32 bg-[#191919] bg-opacity-50 text-[#eeeeee] border border-[#3a3a3a] p-2 outline-none placeholder-[#aaaaaa] resize-none"
            placeholder="Send me a message"
          />
          <div className="flex ">
            <button className="text-[#eeeeee] bg-[#191919] bg-opacity-50 px-4 py-2 text-center border border-[#3a3a3a] w-full mt-2">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
