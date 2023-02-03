import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../components/Hero";

const Faq1 = [
  {
    title: "How To Apply For Internships?",
    textposition: "text-left",
    description:
      "To apply for the upcoming batch of the internship, you need to fill out the interest form in that specific domain. If selected, you will receive the selection certificate directly from us.",
    image: "/faq2.jpg",
    imageposition: "right-5",
  },
  {
    title: "How To Fill The Interest Form?",
    textposition: "text-right",
    description:
      "The interest form for all internship domains can be found on the internship page. Click on the 'Apply now' button. Your response will help us understand your current skills and any training needs during the internship.",
    image: "/faq3.jpg",
    imageposition: "left-5",
  },
  {
    title: "I Have Completed All The Necessary Steps, Whats Next?",
    textposition: "text-left",
    description:
      "If you have correctly filled out all the required fields in the interest form, you will receive a selection certificate from us before your internship begins. All important information and announcements related to the internship are communicated through the discussion forum of the Developer Abode network on LinkedIn.",
    image: "/faq4.jpg",
    imageposition: "right-5",
  },
  {
    title: "What Will Be The Duration Of Internship?",
    textposition: "text-right",
    description: "The duration of the internship depends on the level. For beginners, it is 3 months, for intermediate it is 2 months, and for advanced, it is 1 month.",
    image: "/faq5.jpg",
    imageposition: "left-5",
  },
  {
    title:
      "I Have Completed My Tasks Well Before Deadline.When Will I Get A Certificate?",
    textposition: "text-left",
    description:
      "You can submit your task through the task submission form if you have received it or wait for it to be shared. If you submit the task before the deadline, you can expect to receive your completion certificate in the first week of the next month.",
    image: "/faq2.jpg",
    imageposition: "right-5",
  },
];

const Faq = () => {
  return (
    <>
    <Head>
      <title>Developer Abode | FAQ</title>
    </Head>
      <Hero
        heading={"Faq"}
        message={"Unleashing potential, driving success."}
        link={""}
        page={"Home"}
        image={"page6"}
      />
      {/* Box 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center h-1/2 py-24 border-2 bg-blue-600 bg-fixed bg-center px-10 sm:px-20 md:px-10 lg:px-20 xl:px-30">
        <Image src="/faq1.jpg" alt="faq" height={500} width={500} />
        <div className="text-left font-mono lg:col-span-2">
          <h3 className="font-bold text-5xl">F A Q</h3>
          <h1 className="text-white text-justify text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl mt-3 mb-7 font-semibold">
            Frequently Asked Questions for the Internship Program: Eligibility &
            Requirements, Application & Selection, and During the Internship
          </h1>
          <Link
            className="px-8 py-2 border border-white hover:border-black text-black hover:text-white cursor-pointer"
            href="/"
          >
            Home
          </Link>
        </div>
      </div>
      {/* Grid 1 */}
      <div className="flex flex-col items-center justify-center py-32 bg-fixed bg-center bg-cover px-1  lg:px-20 md:px-10 page6">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {Faq1.map(
            (
              { title, textposition, description, image, imageposition },
              id
            ) => {
              return (
                <div className="m-10 p-10 bg-black border-2 relative border-blue-500 rounded-xl" key={id}>
                  <h1 className="text-blue-500 text-3xl font-mono font-bold underline underline-offset-4 mb-5">
                    {title}
                  </h1>
                  <p className={`text-white text-xl mb-10 ${textposition}`}>
                    {description}
                  </p>
                  <div className={`absolute bottom-0 ${imageposition} flex rounded-xl bg-transparent`}>
                    <Image src={image} alt="faq" height={100} width={100} />
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Faq;
