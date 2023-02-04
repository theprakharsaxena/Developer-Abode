import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const NavbarData = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/internships",
    title: "Internships",
  },
  {
    link: "/courses",
    title: "Courses",
  },
  {
    link: "/about",
    title: "About Us",
  },
  {
    link: "/contact",
    title: "Contact Us",
  },
  {
    link: "/faq",
    title: "FAQ",
  },
];


const Navbar = () => {
  
  // const [active, setActive] = useState("Home")  
  const [nav, setNav] = useState(false);
  const [color, setcolor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [image, setImage] = useState("/logo1b.png");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setcolor("#ffffff");
        setTextColor("#000000");
        setImage("/logo2b.png");
      } else {
        setcolor("transparent");
        setTextColor("#ffffff");
        setImage("/logo1b.png");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: `${color}` }}
        className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
      >
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
          <Link href="/">
            <Image
              src={image}
              width={60}
              height={60}
              alt="Developer Abode Logo"
            />
          </Link>
          <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
            {NavbarData.map(({link,title},id) => {
              return (
                <li key={id} className="m-4 hover:underline hover:underline-offset-8 font-mono hover:text-blue-500">
                  <Link href={link}>{title}</Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Button */}
          <div
            onClick={handleNav}
            className="block sm:hidden z-10 cursor-pointer hover:text-blue-500 mr-1"
          >
            {nav ? (
              <AiOutlineClose size={20} className="hover:text-blue-500" />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }}/>
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul>
              {NavbarData.map(({link,title},id) => {
                return (
                  <li key={id} className="p-4 text-4xl hover:underline hover:underline-offset-8 font-mono hover:text-blue-500">
                    <Link href={link} onClick={handleNav}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      <p
      style={{ backgroundColor: `${textColor}` }}
      className="h-0.5">
      </p>
      </div>
    </>
  );
};

export default Navbar;
