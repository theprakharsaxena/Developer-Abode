import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

const Navbar = [
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

var today = new Date();
var year = today.getFullYear();

const footer = () => {
  return (
    <>
      {/* Footer top */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10 justify-center h-1/3 pt-10 text-center pb-10 bg-black bg-fixed bg-center px-10 xl:px-20 border-t-2">
        <div className="xl:col-span-3">
          <h2 className="text-2xl font-bold text-blue-500 underline underline-offset-2 mb-4">
            Quick Links
          </h2>
          <ul className="text-white grid grid-cols-3 md:grid-cols-6 font-mono gap-5 items-center justify-center">
            {Navbar.map(({ link, title }, id) => {
              return (
                <li
                  key={id}
                  className="hover:text-blue-500 hover:underline hover:underline-offset-8"
                >
                  <Link href={link}>{title}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="text-white flex flex-row space-x-10 mt-8 justify-center items-center">
            <li className="border p-2 rounded-lg border-blue-600 text-blue-600 hover:text-white hover:border-white">
              <BsLinkedin />
            </li>
            <li className="border p-2 rounded-lg border-blue-600 text-blue-600 hover:text-white hover:border-white">
              <BsFacebook />
            </li>
            <li className="border p-2 rounded-lg border-blue-600 text-blue-600 hover:text-white hover:border-white">
              <BsInstagram />
            </li>
            <li className="border p-2 rounded-lg border-blue-600 text-blue-600 hover:text-white hover:border-white">
              <BsTwitter />
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold text-blue-500 underline underline-offset-2 mb-4">
            Contact Us
          </h2>
          <ul className="text-white text-left grid md:grid-cols-2 gap-5 xl:grid-cols-1">
            <li className="grid grid-cols-5 items-center gap-2 hover:text-blue-500">
              <div className="col-span-2 flex flex-row space-x-2">
                <FiMail className="text-2xl" />
                <p>Mail -</p>
              </div>
              <div className="col-span-3">
                <p>info@developerabode.com</p>
                <p>help@developerabode.com</p>
              </div>
            </li>
            <li className="grid grid-cols-5 items-center gap-2 hover:text-blue-500">
              <div className="col-span-2 flex flex-row space-x-2">
                <IoLocationSharp className="text-2xl" />
                <p>Location -</p>
              </div>
              <div className="col-span-3">
                <p>Bareilly, Uttar Pradesh, India - 243003</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="bg-black border-t-[1px] text-center py-5">
        <h4 className="text-white">
          &copy; {year} Developer Abode. All Rights Reserved
        </h4>
      </div>
    </>
  );
};

export default footer;
