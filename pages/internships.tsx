import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../components/Hero";

const Internships1 = [
  {
    title: "JavaScript",
    image: "/javascript.jpg",
    link:"https://www.canva.com/design/DAFabaBKiK8/4On0vzjn-cZs0x1GI04suw/view?utm_content=DAFabaBKiK8&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu",
  },
  {
    title: "React",
    image: "/react.jpg",
    link:"https://www.canva.com/design/DAFbjaKWuLk/fTiLWrTpy6qr4o-64JkiQg/view?utm_content=DAFbjaKWuLk&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu",
  },
  {
    title: "Angular",
    image: "/angular.jpg",
    link:"/internships",
  },
  {
    title: "NextJs",
    image: "/nextjs.jpg",
    link:"/internships",
  },
  {
    title: "VueJs",
    image: "/vuejs.jpg",
    link:"/internships",
  },
  {
    title: "NodeJs",
    image: "/nodejs.jpg",
    link:"https://www.canva.com/design/DAFb0ng7N-M/XMARqLFuovooSBm3a59gdA/view?utm_content=DAFb0ng7N-M&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu",
  },
  {
    title: "Flutter",
    image: "/flutter.jpg",
    link:"https://www.canva.com/design/DAFbjf0VzfA/WR_QZuInZfliYO5urr5gYA/view?utm_content=DAFbjf0VzfA&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu",
  },
  {
    title: "React Native",
    image: "/reactnative.jpg",
    link:"/internships",
  },
];

const Internships = () => {
  return (
    <>
      <Head>
        <title>Developer Abode | Internships</title>
      </Head>
      <Hero
        heading={"Internships"}
        message={"Unleashing potential, driving success."}
        link={"courses"}
        page={"Courses"}
        image={"page2"}
      />
      {/* Box 1 */}
      <div className="flex flex-col text-center items-center justify-center h-1/3 py-24 border-2 bg-blue-600 bg-fixed bg-center px-5 sm:px-10 md:px-20">
        <h1 className="text-3xl sm:text-4xl font-mono mb-5 text-white underline underline-offset-4">
          INTERNSHIPS WE OFFER
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif">
          An internship can enhance your professional development and
          intellectual growth.
        </h2>
      </div>
      {/* Grid 1 */}
      <div className="flex flex-col text-left items-center justify-center bg-fixed bg-center bg-cover page2 py-32 px-1 sm:px-10 lg:px-7 xl:px-8 2xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Internships1.map(({ title, image, link }, id) => {
            return (
              <div
                className="m-5 sm:m-10 2xl:m-10 xl:m-8 lg:m-7 md:m-10 sm:p-9 md:p-10 p-10 bg-black border-2 border-blue-500 rounded-xl"
                key={id}
              >
                <Link
                  href="/courses"
                  className="p-3 text-lg rounded-md bg-blue-500/30 hover:text-blue-500 hover:bg-white/30 text-white"
                >
                  Learn {title}
                </Link>
                <h1 className="text-3xl mb-2 mt-5 font-mono text-blue-500 font-bold">
                  {title} Developer
                </h1>
                <div className="h-0.5 w-1/2 bg-white"></div>
                <Image
                  src={image}
                  className="my-5"
                  alt="JavaScript Developer"
                  height={200}
                  width={200}
                />
                <div className="mb-5 text-white">
                <a href={link} target="_blank" rel="noreferrer">Info &gt;</a>
                </div>
                <a
                  href="https://form.jotform.com/230328041230035"
                  className="hover:text-white p-3 text-lg rounded-md hover:bg-blue-500/30 text-blue-500 bg-white/30"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Internships;
