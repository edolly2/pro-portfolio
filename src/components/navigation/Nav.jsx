import "./Nav.css";
import { Link } from "react-router-dom";
import { useScrollHeader } from "../../hooks/useScrollHeader";

const Nav = () => {
  const maxHeight = 200;
  const minHeight = 70;

  const headerHeight = useScrollHeader(maxHeight, minHeight, 0.5);

  const maxFont = 1.35; // rem
  const minFont = 1; // rem

  const fontSize =
    ((headerHeight - minHeight) / (maxHeight - minHeight)) *
      (maxFont - minFont) +
    minFont;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      style={{
        // transition: "margin 1s ease-in-out",
        width: "100%",
        // width: `${fontSize == minFont ? "auto" : "100%"}`,
        // transition: "all 1s linear",

        fontSize: `${fontSize}rem`,
        display: "flex",
        // justifyContent: `${fontSize == minFont ? "flex-start" : "center"}`,
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          //   width: `${fontSize == minFont ? "100%" : "auto"}`,
          //   transition: "width 1s ease-in-out",
          display: "flex",
          listStyle: "none",
          gap: "20px",
          //   margin: `${fontSize == minFont ? "1px" : "0 auto"}`,
        }}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
