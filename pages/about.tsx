import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../components/Hero";

const About = () => {
  return (
    <>
      <Head>
        <title>Developer Abode | About Us</title>
      </Head>
      <Hero
        heading={"About Us"}
        message={"Unleashing potential, driving success."}
        link={"contact"}
        page={"Contact Us"}
        image={"page4"}
      />
      {/* Box 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center h-1/2 py-24 border-2 bg-blue-600 bg-fixed bg-center px-7 sm:px-20 md:px-10 lg:px-20 xl:px-30">
        <Image src="/about1.jpg" alt="footer" height={500} width={500} />
        <div className="text-left font-mono lg:col-span-2">
          <h3 className="font-bold text-4xl sm:text-5xl md:text-6xl">About Us</h3>
          <h1 className="text-white text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl mt-3 mb-7 font-semibold">
            Developer Abode is a foundation-based organization that aims to
            shape the future by nurturing the present. At Developer Abode, we
            believe in empowering youth, particularly students, with
            self-awareness and knowledge of technology and growth-rich fields.
            Our dedication has led us to become an registered start-up with
            a team of over 10 employees.
          </h1>
          <Link
            className="px-8 py-2 border border-white hover:border-black text-black hover:text-white cursor-pointer"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* Grid 1 */}
      <div className="flex flex-col text-left items-center justify-center py-32 bg-fixed bg-center bg-cover px-1 xl:px-32 lg:px-20 md:px-10 page4">
        <div className="m-5 sm:m-10 p-10 bg-black border-2 relative border-blue-500 rounded-xl">
          <h1 className="text-blue-500 text-3xl font-mono font-bold underline underline-offset-4 mb-5">
            We Build IT That Build Your Business
          </h1>
          <p className="text-white sm:text-xl mb-16">
            At Developer Abode, we specialize in custom software development,
            transforming our clients digital aspirations into tangible
            solutions. We maintain close communication with users during the
            development process to stay aligned with the desired outcome. Our
            commitment is to deliver exceptional software for each client. As a
            company, we also strive to empower youth, particularly students, by
            promoting self-awareness and providing access to the vast world of
            technology and growth-oriented industries. We aim to bridge the gap
            between students and their industrial knowledge, bringing them
            closer to their goals. We are an registered start-up, always
            open to connecting with new individuals on our journey of continuous
            learning and joy.
          </p>
          <div className="absolute bottom-0 flex right-5 rounded-xl bg-transparent">
            <Image src="/book1.jpg" alt="book" height={100} width={100} />
            <Image
              className="hidden sm:flex"
              src="/book1.jpg"
              alt="book"
              height={100}
              width={100}
            />
            <Image
              className="hidden lg:flex"
              src="/book1.jpg"
              alt="book"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
