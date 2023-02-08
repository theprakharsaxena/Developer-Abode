import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../components/Hero";

const courses1 = [
  {
    title: "JavaScript",
    image: "/javascript.jpg",
    description:
      "JavaScript is a versatile and widely-used programming language for building dynamic, interactive, and responsive web applications. This course is designed for developers who want to learn or improve their JavaScript skills. The course covers the basics of JavaScript syntax, data structures, and control structures, as well as advanced topics such as asynchronous programming, object-oriented programming, and functional programming. By the end of this course, you will have a solid understanding of JavaScript and the ability to apply it in real-world projects.",
  },
  {
    title: "React",
    image: "/react.jpg",
    description:
      "React JS is a popular JavaScript library for building user interfaces. This course is designed for developers who want to learn how to use React to create dynamic, interactive, and scalable web applications. The course covers the fundamentals of React, including components, state, props, hooks, and event handling, as well as advanced topics such as performance optimization and testing. By the end of this course, you will have the skills and knowledge needed to build your own React projects and contribute to the development of larger-scale applications.",
  },
  {
    title: "Angular",
    image: "/angular.jpg",
    description:
      "Angular JS is a powerful JavaScript framework for building complex and dynamic web applications. This course is designed for developers who want to learn how to use Angular to create rich, interactive, and scalable applications. The course covers the fundamentals of Angular, including components, modules, directives, services, and the RxJS library, as well as advanced topics such as testing, deployment, and performance optimization. By the end of this course, you will have the skills and knowledge needed to build your own Angular projects and contribute to the development of larger-scale applications.",
  },
  {
    title: "NextJs",
    image: "/nextjs.jpg",
    description:
      "Next.js is a popular React-based framework for building server-rendered and statically generated web applications. This course is designed for developers who want to learn how to use Next.js to create fast, scalable, and user-friendly web applications. The course covers the fundamentals of Next.js, including routing, code splitting, API routes, and serverless functions, as well as advanced topics such as performance optimization, security, and deployment. By the end of this course, you will have the skills and knowledge needed to build your own Next.js projects and contribute to the development of larger-scale applications.",
  },
  {
    title: "VueJs",
    image: "/vuejs.jpg",
    description:
      "Vue.js is a progressive JavaScript framework for building user interfaces. This course is designed for developers who want to learn how to use Vue to create dynamic, interactive, and scalable web applications. The course covers the fundamentals of Vue, including components, templates, directives, and the Vuex state management library, as well as advanced topics such as performance optimization, testing, and deployment. By the end of this course, you will have the skills and knowledge needed to build your own Vue projects and contribute to the development of larger-scale applications.",
  },
  {
    title: "NodeJs",
    image: "/nodejs.jpg",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine for building fast and scalable server-side applications. This course is designed for developers who want to learn how to use Node.js to create efficient, high-performance, and real-time web applications. The course covers the basics of Node.js, including the event-driven model, streams, modules, and npm, as well as advanced topics such as testing, security, and deployment. By the end of this course, you will have the skills and knowledge needed to build your own Node.js projects and contribute to the development of larger-scale applications.",
  },
  {
    title: "Flutter",
    image: "/flutter.jpg",
    description:
      "Flutter is an open-source UI software development kit created by Google for building high-quality, cross-platform mobile applications for iOS and Android. This course is designed for developers who want to learn how to use Flutter to create beautiful, responsive, and fast mobile apps. The course covers the fundamentals of Flutter, including widgets, layout, animation, and state management, as well as advanced topics such as testing, deployment, and performance optimization. By the end of this course, you will have the skills and knowledge needed to build your own Flutter projects and contribute to the development of larger-scale applications.",
  },
  {
    title: "React Native",
    image: "/reactnative.jpg",
    description:
      "React Native is a popular framework for building native mobile applications using JavaScript and React. This course is designed for developers who want to learn how to use React Native to create high-performance, cross-platform mobile apps for iOS and Android. The course covers the fundamentals of React Native, including components, styles, navigation, and APIs, as well as advanced topics such as testing, deployment, and performance optimization. By the end of this course, you will have the skills and knowledge needed to build your own React Native projects and contribute to the development of larger-scale applications.",
  },
];

const Courses = () => {
  return (
    <>
      <Head>
        <title>Developer Abode | Courses</title>
      </Head>
      <Hero
        heading={"Courses"}
        message={"Unleashing potential, driving success."}
        link={"about"}
        page={"About Us"}
        image={"page3"}
      />
      {/* Box 1 */}
      <div className="flex flex-col text-center items-center justify-center h-1/3 py-24 border-2 bg-blue-600 bg-fixed bg-center px-5 sm:px-10 md:px-20">
        <h1 className="text-3xl sm:text-4xl font-mono mb-5 text-white underline underline-offset-4">
          COURSES WE OFFER
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif">
          Courses can enhance your professional development and intellectual
          growth.
        </h2>
      </div>
      {/* Grid 1 */}
      <div className="flex flex-col text-left items-center justify-center py-32 bg-fixed bg-center bg-cover px-1 xl:px-32 lg:px-20 md:px-10 page3">
        <div className="flex flex-col">
          {courses1.map(({ title, image, description }, id) => {
            return (
              <div
                className="m-5 sm:m-10 p-10 bg-black border-2 border-blue-500 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7"
                key={id}
              >
                <Image src={image} alt="Javascript" width={400} height={400} />
                <div className="lg:col-span-2 xl:col-span-3">
                  <h1 className="text-3xl pb-3 font-mono text-blue-500 font-bold">
                    {title} Developer
                  </h1>
                  <p className="text-sm md:text-base text-white pb-3">
                    {description}
                  </p>
                  <Link
                    className="underline underline-offset-8 text-white hover:text-blue-500 font-serif"
                    href="https://form.jotform.com/230381891853462"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
