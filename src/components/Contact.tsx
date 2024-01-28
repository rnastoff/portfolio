import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { serviceId, templateId, publicKey } from "../emailjs/emailjs.tsx";

import SectionHeader from "./SectionHeader";
import SectionBodyWrapper from "./SectionBodyWrapper";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const form = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currentForm = form.current;

    if (currentForm == null) {
      // This is necessary for typescript
      return;
    }

    if (!name || !email || !textArea) {
      setSuccess(false);
      setError("Please fill out all fields");
      return;
    }

    emailjs.sendForm(serviceId, templateId, currentForm, publicKey).then(
      (result) => {
        setError("");
        setSuccess(true);
        setName("");
        setEmail("");
        setTextArea("");
        // currentForm.reset();
      },
      (error) => {
        console.log("send error");
        setSuccess(false);
        setError("Something went wrong!");
      }
    );
  }

  const errorMessage = <p className=" text-[#a82727] text-sm text-center mb-4">{error}</p>;
  const successMessage = <p className=" text-[#47bd2f] text-sm text-center mb-4">Success! Message sent.</p>;

  return (
    <section className="mt-8">
      <SectionHeader title="CONTACT" />
      <SectionBodyWrapper>
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col py-3 px-2">
          {error && errorMessage}
          {success && successMessage}
          <input
            className="w-full bg-[#191919] bg-opacity-50 text-[#eeeeee] border border-[#3a3a3a] text-sm p-2 outline-none placeholder-[#aaaaaa] "
            type="text"
            placeholder="Name"
            name="user_name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            className="w-full bg-[#191919] bg-opacity-50 text-[#eeeeee] border border-[#3a3a3a] text-sm p-2 outline-none placeholder-[#aaaaaa] mt-4"
            type="email"
            placeholder="Email"
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <textarea
            className="w-full h-32 bg-[#191919] bg-opacity-50 text-[#eeeeee] border border-[#3a3a3a] text-sm p-2 outline-none placeholder-[#aaaaaa] resize-none mt-4"
            placeholder="Send me a message"
            name="message"
            onChange={(e) => setTextArea(e.target.value)}
            value={textArea}
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
