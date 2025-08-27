import { NavLink } from "react-router-dom";
import { MdOutlineEmail, MdFacebook } from "react-icons/md";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import "./IconBar.css";
const IconBar = () => {
  return (
    <div className="icon-bar">
      <ul>
        <li>
          <a href="#">
            <MdOutlineEmail />
          </a>
        </li>
        <li>
          <a href="#">
            <MdFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <IoLogoGithub />
          </a>
        </li>
        <li>
          <a href="#">
            <IoLogoLinkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <FaXTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default IconBar;
