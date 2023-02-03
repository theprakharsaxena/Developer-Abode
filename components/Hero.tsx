import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  heading: string;
  message: string;
  page: string;
  link: string;
  image: string;
};

const Hero = ({ heading, message, page, link, image }: HeroProps) => {
  return (
    <>
      <div className={`flex items-center justify-center h-screen bg-fixed bg-center bg-cover ${image}`}>
        {/* Overlay */}
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2]" /> */}
        <div className="p-5 text-white z-[2] mt-[-5rem]">
          <h2 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold">
            {heading}
          </h2>
          <p className="py-5 text-xl mb-1 font-mono">{message}</p>
          <Link
            href={`/${link}`}
            className="px-8 py-2 border hover:border-blue-500 hover:text-blue-500 cursor-pointer"
          >
            {page}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
