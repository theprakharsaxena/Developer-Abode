import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

const Main1 = [
  {
    title: "Community",
    description:
      "Connecting with new students, establishing relationships, and building connections can all be beneficial when you are seeking employment in the future. As members of the same organization, you already have shared interests, so the connections you make with these individuals may be particularly valuable.",
    image: "/m1image1.jpg",
  },
  {
    title: "Real Time Skill Development",
    description:
      "By joining a student organization, you can enhance your people skills or soft skills, such as communication, attitude, and work ethic. These skills are essential for successful interactions with others. Not only will the organization provide opportunities to learn these skills, but it will also help you build upon and improve the ones you already possess.",
    image: "/m1image2.jpg",
  },
  {
    title: "Immense Learning",
    description:
      "Joining a student organization that focuses on your area of study can provide you with practical experience in that field. One of the benefits of participating in student communities is that you can gain hands-on experience with skills such as project management, event planning, and fundraising in a safe and supportive environment where it is okay to make mistakes.",
    image: "/m1image3.jpg",
  },
];

const Main2 = [
  {
    title: "Our Approach",
    description:
      "We take great pride in the solutions we provide, it's not just a job to us. We strive for excellence in everything we do by supporting and pushing each other to meet our own high standards, and we won't be content until we have exceeded them.",
    image: "/m2image1.jpg",
    link: "/internships",
    linkTitle: "Internships...",
  },
  {
    title: "Awesome Atmosphere",
    description:
      "As a member of our community, you'll find that everyone shares your passion for creation and you'll feel welcomed by the warm and friendly atmosphere.",
    image: "/m2image2.jpg",
    link: "/about",
    linkTitle: "About Us...",
  },
  {
    title: "Todays work is foundation of tomorrow!",
    description:
      "At Developer Abode, we believe in empowering young people, particularly students, with self-awareness and providing them access to the vast and untapped realms of technology and opportunities for growth. Our conviction and efforts have led us to where we stand today.",
    image: "/m2image3.jpg",
    link: "/courses",
    linkTitle: "Courses...",
  },
];

const Main3 = [
  {
    image: "/m3image1.jpg",
    title: "Work Updates",
    description:
      "We track your work progress at our Community on a regular basis to ensure deadlines are met.",
  },
  {
    image: "/m3image2.jpg",
    title: "Work with True Innovators",
    description:
      "We have a unique method of tackling issues, continuously discovering solutions, and are motivated to make the most of our time and efforts.",
  },
  {
    image: "/m3image3.jpg",
    title: "More Opportunities",
    description:
      "Our community provides many opportunities for you to learn and hone a diverse range of skills.",
  },
];

// Developer Abode is a grassroots organization that seeks to shape the future by investing in the present.

const Main = () => {
  return (
    <>
    
      {/* Box 1 */}
      <div className="flex flex-col text-center items-center justify-center h-1/3 py-24 border-2 bg-blue-600 bg-fixed bg-center px-5 sm:px-10 md:px-20">
        <h1 className="text-3xl sm:text-4xl pb-3 font-bold">WHO ARE WE!</h1>
        <p className="font-serif text-sm sm:text-base md:text-lg text-white">
          The purpose of Developer Abode is to facilitate the development of
          personal and professional skills in the field of technology for the
          benefit of others, and to create a structure in which students can
          come together and work towards a shared goal that promotes a sense of
          community. Our goal is to enable students to exercise their right to
          freely associate and collaborate in pursuit of their collective
          aspirations.
        </p>
      </div>
      {/* Grid 1 */}
      <div className="flex flex-col text-left items-center justify-center py-32 bg-fixed bg-center bg-cover px-1 xl:px-32 lg:px-20 md:px-10 page1">
        <h1 className="pb-5 sm:text-6xl text-4xl font-extrabold font-mono text-white">
          WHAT WE OFFER!
        </h1>
        <div className="flex flex-col lg:flex-row">
          {Main1.map(({ title, image, description }, id) => {
            return (
              <div
                className="m-5 sm:m-10 p-10 sm:p-10 bg-black border-2 border-blue-500 rounded-xl"
                key={id}
              >
                <Image src={image} alt="community" width={40} height={40} />
                <h1 className="text-3xl pb-3 font-mono text-blue-500 font-bold">
                  {title}
                </h1>
                <p className="text-white">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Box 2 */}
      <div className="flex flex-col text-center items-center justify-center h-1/3 py-24 bg-blue-600 border-2 bg-fixed bg-center px-5 sm:px-10 md:px-20">
        <h1 className="text-3xl sm:text-4xl font-bold pb-3">
          Gaining knowledge from mistakes.
        </h1>
        <h2 className="sm:text-lg md:text-xl underline-offset-2 underline pb-3 font-mono">
          At Developer Abode, we are dedicated to fostering growth for all
          individuals associated with us.
        </h2>
        <p className="font-serif text-sm sm:text-base text-white">
          Developer Abode is a company that focuses on creating a better future
          by developing the present. We believe in empowering young people,
          particularly students, to become self-aware and discover new
          opportunities in technology and growth-oriented fields. This belief
          has led us to where we are today as a MSME registered start-up with
          over 100 employees. Our company has held numerous webinars for over a
          decade, reaching an audience of more than 100 people and providing
          them with valuable services.
        </p>
      </div>
      {/* Grid 2 */}
      <div className="flex flex-col text-left items-center justify-center py-32 bg-fixed bg-center bg-cover px-1 xl:px-32 lg:px-20 md:px-10 page1">
        <div className="flex flex-col">
          {Main2.map(({ title, image, description, link, linkTitle }, id) => {
            return (
              <div
                className="m-5 sm:m-10 p-10 bg-black border-2 border-blue-500 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7"
                key={id}
              >
                <Image src={image} alt={title} width={500} height={500} />
                <div className="lg:col-span-2 xl:col-span-3">
                  <h1 className="text-3xl pb-3 font-mono text-blue-500 font-bold">
                    {title}
                  </h1>
                  <p className="text-base text-white pb-3">{description}</p>
                  <Link
                    className="underline underline-offset-8 text-white hover:text-blue-500 font-serif"
                    href={link}
                  >
                    {linkTitle}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Box 3 */}
      <div className="flex flex-col text-center items-center justify-center h-1/3 py-24 bg-blue-600 bg-fixed border-2 bg-center px-5 sm:px-10 md:px-20">
        <h1 className="text-3xl sm:text-4xl pb-3 font-bold">
          Todays work is foundation of tomorrow !
        </h1>
        <h2 className="sm:text-lg mdtext-xl underline underline-offset-2 pb-3 font-mono">
          Developer Abode is a grassroots organization that seeks to shape the
          future by investing in the present.
        </h2>
        <p className="font-serif text-sm sm:text-base text-white">
          Joining a student organization can help you acquire essential soft
          skills, such as communication, attitude, and work ethic, which are
          crucial for effective interactions with others. Not only will we
          provide you with these skills but also assist you in enhancing the
          ones you already possess. Through participation in our organization,
          you will learn how to communicate effectively with both individuals
          and large groups, and you will also improve your emotional
          intelligence by building new relationships.
        </p>
      </div>
      {/* Grid 3 */}
      <div className="flex flex-col text-left items-center justify-center py-32 bg-fixed bg-center bg-cover px-1 xl:px-32 lg:px-20 md:px-10 page1">
        <div className="flex flex-col lg:flex-row mx-20 sm:mx-0">
          {Main3.map(({ title, image, description }, id) => {
            return (
              <div
                className="p-10 sm:m-10 my-10 bg-black border-2 border-blue-500 rounded-xl"
                key={id}
              >
                <Image src={image} alt="community" width={40} height={40} />
                <h1 className="text-3xl pb-3 font-mono text-blue-500 font-bold">
                  {title}
                </h1>
                <p className="text-white">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Box 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center h-1/2 py-24 border-t-2 border-x-2 bg-blue-600 bg-fixed bg-center px-7 sm:px-20 md:px-10 lg:px-20 xl:px-30">
        <Image src="/footer1.jpg" alt="footer" height={500} width={500} />
        <div className="text-left font-mono lg:col-span-2">
          <h3 className="xl:text-lg">EXCITED TO WORK WITH US !</h3>
          <h1 className="text-white text-2xl sm:text-4xl xl:text-5xl mt-3 mb-7 font-semibold">
            We welcome the opportunity to connect with new individuals as we
            continue our journey of ongoing learning and enjoyment.
          </h1>
          <Link
            className="px-8 py-2 border border-white hover:border-black text-black hover:text-white cursor-pointer"
            href="/internships"
          >
            Internships
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
