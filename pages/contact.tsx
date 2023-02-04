import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useRef } from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Hero from "../components/Hero";
import emailjs from "@emailjs/browser";
import Head from "next/head";

const Contact = () => {
  async function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData: { [key: string]: string } = {};
    Array.from((e.currentTarget as HTMLFormElement).elements).forEach(
      (field) => {
        if (!(field as HTMLInputElement).name) return;
        formData[(field as HTMLInputElement).name] = (
          field as HTMLInputElement
        ).value;
      }
    );
    await sendEmail(formData.name, formData.email, formData.message);
    (e.target as HTMLFormElement).reset();
  }

  const sendEmail = async (name: string, email: string, text: string) => {
    try {
      const result = await emailjs.send(
        "service_skz8fqe",
        "template_24hqi8a",
        {
          name,
          email,
          message: text,
        },
        "9mwx-mOiTGZxk_3B2"
      );
      console.log(`Email sent to ${name}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Head>
      <title>Developer Abode | Contact Us</title>
    </Head>
      <Hero
        heading={"Contact Us"}
        message={"Unleashing potential, driving success."}
        link={"faq"}
        page={"F A Q"}
        image={"page5"}
      />
      {/* Box 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center h-1/2 py-16 border-2 bg-blue-600 bg-fixed bg-center px-7 sm:px-20 md:px-10 lg:px-20 xl:px-30">
        <Image src="/contact1.jpg" alt="contact" height={500} width={500} />
        <div className="text-left font-mono lg:col-span-2">
          <h3 className="font-bold text-4xl sm:text-5xl md:text-6xl">Contact Us</h3>
          <h1 className="text-white text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl mt-3 mb-7 font-semibold">
            We are always open to connect new people with us over this journey
            of endless learning and great joy!
          </h1>
          <ul className="text-white flex flex-row space-x-5 mt-8 mb-9">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="border p-2 rounded-lg hover:border-white hover:text-blue-600 text-black border-black bg-white hover:bg-black"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="border p-2 rounded-lg hover:border-white hover:text-blue-500 text-black border-black bg-white hover:bg-black"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="border p-2 rounded-lg hover:border-white hover:text-pink-500 text-black border-black bg-white hover:bg-black"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="border p-2 rounded-lg hover:border-white hover:text-blue-400 text-black border-black bg-white hover:bg-black"
            >
              <BsTwitter />
            </a>
          </ul>
          {/* <a href="https://www.linkedin.com/">
            <Image src="/javascript.jpg" className="mb-7" alt="" height={30} width={30}/>
          </a> */}
          <Link
            className="px-8 py-2 border border-white hover:border-black text-black hover:text-white cursor-pointer"
            href="/about"
          >
            About Us
          </Link>
        </div>
      </div>
      {/* Grid 1 */}
      <div className="flex flex-col text-left items-center justify-center py-32 bg-fixed bg-center bg-cover px-1 xl:px-32 lg:px-20 md:px-10 page5">
        {/* <div className="flex flex-col lg:flex-row"> */}
        <div className="m-5 sm:m-10 md:m-8 lg:m-10 p-10 bg-black border-2 border-blue-500 rounded-xl">
          <h1 className="text-blue-500 text-3xl font-mono font-bold underline underline-offset-4 mb-5">
            Would You Like To Contact Us?
          </h1>
          <div className="grid grid-cols-1 gap-14 md:gap-5 lg:gap-14 md:grid-cols-2 items-center">
            <Image src="/contact2.jpg" alt="contact" height={500} width={500} />
            <div>
              <form
                // method="post"
                onSubmit={handleOnSubmit}
                className="grid grid-cols-1 gap-10 md:gap-5 lg:gap-10 max-w-md"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="bg-transparent text-white border-2 p-2 border-blue-500 rounded-md"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-transparent text-white border-2 p-2 border-blue-500 rounded-md"
                />
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Your Message"
                  required
                  className="bg-transparent text-white border-2 p-2 border-blue-500 rounded-md"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 p-3 rounded-xl text-white border-2 hover:border-blue-500 border-black hover:bg-transparent hover:text-blue-500 w-40"
                >
                  <h3>Send Message</h3>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Contact;
