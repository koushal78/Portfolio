import { HiOutlineHome } from "react-icons/hi2";
import { FaRegFolder } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const NavItems = [
    { name: "Home", icon: <HiOutlineHome />, section: "home" },
    { name: "Projects", icon: <FaRegFolder />, section: "projects" },
    { name: "Skills", icon: <AiFillSetting />, section: "skills" },
    { name: "Experience", icon: <BsFillPersonVcardFill />, section: "experience" },
   
];

const Nav = ({ scrollToSection }) => {
    return (
        <>
        
        <div className="flex border border-white py-2 max-w-max gap-4   md:gap-8 text-white text-2xl px-2 rounded-lg hover:shadow-lg shadow-purple-500 bg-[#211d1d]  fixed top-4 left-1/2 transform -translate-x-1/2 justify-center items-center ">
            
            <Link to='/' className="flex flex-nowrap" >
            
            {NavItems.map((item, index) => (
                <button 
                key={index} 
                onClick={() => scrollToSection(item.section)}
                className="bg-transparent focus:bg-purple-700 focus:rounded-lg p-2 md:px-4 transition-all duration-300 mx-2"
                >
                    {item.icon}
                </button>
            ))}
            </Link>
            <ul className="mx-0">
                <li className="text-center focus:bg-purple-700 mr-2 ">
                    <Link  to={'/Contact'} ><MdOutlineEmail /></Link>
                </li>
            </ul>
        </div>
        
        </>
    );
};

export default Nav;
