/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { useScrollHeader } from "../../hooks/useScrollHeader";
// import "./Header.css";

// const Header = () => {
//   const [isShrunk, setShrunk] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setShrunk((isShrunk) => {
//         if (
//           (!isShrunk && document.body.scrollTop > 20) ||
//           document.documentElement.scrollTop > 20
//         ) {
//           return true;
//         }

//         if (
//           isShrunk &&
//           document.body.scrollTop < 4 &&
//           document.documentElement.scrollTop < 4
//         ) {
//           return false;
//         }
//         return isShrunk;
//       });
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header className={`${isShrunk ? "shrunk" : "header"}`}>Header</header>
//   );
// };
const Header = ({ children }) => {
  const headerHeight = useScrollHeader(200, 70, 0.5);
  return (
    <header
      style={{
        height: `${headerHeight}px`,
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#333",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        fontSize: "1.5rem",
        transition: "height 0.1s linear", // smooth height change
        zIndex: 1000,
      }}
    >
      {children}
    </header>
  );
};

export default Header;
