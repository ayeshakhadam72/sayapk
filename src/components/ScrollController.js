// import { useEffect } from "react";

// export default function ScrollController() {
//   useEffect(() => {
//     const sections = document.querySelectorAll("section");
//     let currentIndex = 0;

//     const scrollToSection = (index) => {
//       if (index >= 0 && index < sections.length) {
//         sections[index].scrollIntoView({ behavior: "smooth" });
//         currentIndex = index;
//       }
//     };

//     const handleKey = (e) => {
//       if (e.key === "ArrowRight") scrollToSection(currentIndex + 1);
//       if (e.key === "ArrowLeft") scrollToSection(currentIndex - 1);
//     };

//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, []);

//   return null;
// }
