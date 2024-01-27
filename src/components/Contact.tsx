import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { serviceId, templateId, publicKey } from "../emailjs/emailjs.tsx";

import SectionHeader from "./SectionHeader";
import SectionBodyWrapper from "./SectionBodyWrapper";

export default function Contact() {
  const [status, setStatus] = useState();
  //please fill out all fields
  //There was an error
  //Success! Message sent.

  const form = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const currentForm = form.current;
    console.log("FORM:", form);
    // this prevents sending emails if there is no form.
    // in case currentForm cannot possibly ever be null,
    // you could alert the user or throw an Error, here
    if (currentForm == null) {
      console.log("not sending");
      return;
    }

    emailjs.sendForm(serviceId, templateId, currentForm, publicKey).then(
      (result) => {
        console.log("success");
        currentForm.reset();
        // e.target.reset();
      },
      (error) => {
        console.log("error");
        console.log(error.txt);
      }
    );
  }

  return (
    <section className="mt-8">
      <SectionHeader title="CONTACT" />
      <SectionBodyWrapper>
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col py-3 px-2">
          <input
            className="w-full bg-[#191919] bg-opacity-50 text-[#eeeeee] border border-[#3a3a3a] text-sm p-2 outline-none placeholder-[#aaaaaa]"
            type="text"
            placeholder="Name"
            name="user_name"
            required
          />
          <input
            className="w-full bg-[#191919] bg-opacity-50 text-[#eeeeee] border border-[#3a3a3a] text-sm p-2 outline-none placeholder-[#aaaaaa] mt-4"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <textarea
            className="w-full h-32 bg-[#191919] bg-opacity-50 text-[#eeeeee] border border-[#3a3a3a] text-sm p-2 outline-none placeholder-[#aaaaaa] resize-none mt-4"
            placeholder="Send me a message"
            name="message"
            required
          />
          <div className="flex ">
            <button
              type="submit"
              className="text-[#eeeeee] font-bold bg-[#191919] bg-opacity-50 px-4 py-2 text-center border border-[#3a3a3a] w-full mt-2"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </SectionBodyWrapper>
    </section>
  );
}
