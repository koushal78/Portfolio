import img from "/Profile.jpg";
import { IoLogoInstagram } from "react-icons/io5";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const SelfCard = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[330px] lg:min-w-[330px] h-full bg-[#211d1d] mx-auto lg:mx-0 mt-10 rounded-md px-4 py-8">
      <div className="flex flex-col items-center">
        {/* Responsive Image with Increased Size */}
        <img
          src={img}
          alt="Profile Image"
          className="rounded-lg shadow-2xl max-w-full w-[95%] sm:w-[80%] md:w-[70%] lg:w-[88%] h-auto object-cover object-top lg:h-[220px] min-h-[220px]"
        />
        <p className="text-2xl font-bold text-center mt-2 text-white pr-1">Koushal Kumar</p>
        <p className="text-gray-400 mt-4 text-md text-center">Fullstack Web Developer</p>
        <ul className="flex gap-6 my-8 text-2xl justify-center text-white">
          <Link to="https://www.instagram.com/koushal_kushwaha1222/" className="hover:scale-110 hover:duration-100 hover:text-purple-800">
            <IoLogoInstagram />
          </Link>
          <Link to="https://www.linkedin.com/in/koushalk/" className="hover:scale-110 hover:duration-100 hover:text-purple-800">
            <TbBrandLinkedin />
          </Link>
          <Link to="https://x.com/koushalkus60191" className="hover:scale-110 hover:duration-100 hover:text-purple-800">
            <FiTwitter />
          </Link>
          <Link to="mailto:kushwahakoushal78@gmail.com?subject=Let's%20Talk&body=Hi,%20I%20would%20like%20to%20contact%20with%20you." className="hover:scale-110 hover:duration-100 hover:text-purple-800">
            <MdOutlineEmail />
          </Link>
        </ul>
        <div className="text-center">
          <button className="text-white text-sm font-medium bg-purple-700 px-10 py-3 rounded-md shadow-2xl mt-8 cursor-pointer">
            <a  href="mailto:kushwahakoushal78@gmail.com?subject=Let's%20Talk&body=Hi,%20I%20would%20like%20to%20contact%20with%20you."
            >

            Let's Talk

            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfCard;
