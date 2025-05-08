


import React, { useEffect, useRef, useState } from 'react';
import style from './test.module.css';
import Footer from './Section16contact';

const sections = [
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/WEBSITE-BANNER_cd6c2cb6-49b4-452a-9911-35df3d559bd4_1660x.jpg?v=1746528566"
  },
  {
    type: "video",
    src: 'https://saya.pk/cdn/shop/videos/c/vp/ec619b7331b644c6bedacc1b6812190d/ec619b7331b644c6bedacc1b6812190d.HD-1080p-7.2Mbps-46803908.mp4?v=0'
  },
  {
    type: "video",
    src: "https://saya.pk/cdn/shop/videos/c/vp/7fdd915912a544f5beeb6756a9b12dc3/7fdd915912a544f5beeb6756a9b12dc3.HD-1080p-7.2Mbps-46745983.mp4?v=0"
  },
  {
    type: "video",
    src: "https://saya.pk/cdn/shop/videos/c/vp/435e5c47f7a14c06bc6ca32c4de218a6/435e5c47f7a14c06bc6ca32c4de218a6.HD-1080p-7.2Mbps-46349470.mp4?v=0"
  },
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/MUSHQ-_Web_12e2ad43-5440-46c5-b7c3-7e65938dc887_1660x.jpg?v=1743068089"
  },
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/Unstitched-EMB-3pc_web_1660x.jpg?v=1744289328"
  },
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/Lawn-Spring-Summer-25-Web_cfeaacce-860a-4ee3-b6a1-dc0e775cb47d_1660x.jpg?v=1744441857"
  },
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/Lawn-Spring-Summer-25-Web_cfeaacce-860a-4ee3-b6a1-dc0e775cb47d_1660x.jpg?v=1744441857"
  },
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/Chikankari-collection-25_1660x.jpg?v=1744288661"
  },
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/WEBSITE-BANNER_34fa5332-e6be-4208-b297-dee44fa2668f_1660x.jpg?v=1745476562"
  },
  {
    type: "video",
    src: "https://saya.pk/cdn/shop/videos/c/vp/1b8a4721104c46a1bc722877457d9eb6/1b8a4721104c46a1bc722877457d9eb6.HD-1080p-7.2Mbps-46676795.mp4?v=0"
  },
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/Western-collection-_Web_-F_1660x.jpg?v=1744458917"
  },
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/WEBSITE-BANNER_ca3a9330-f830-4424-9a2d-0c7fe3c41d0c_1660x.jpg?v=1745482956"
  },
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/MENSWEAR_BANNER_FOR_NATIONAL_WEBSITE_DESKTOP_1660x.jpg?v=1742802957"
  },
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/Unstitched-Jacquard-_web_1660x.jpg?v=1745922940"
  },
  {
    type: "image",
    src: "https://saya.pk/cdn/shop/files/RTW-LUXURY-DESKTOP-BANNER_1660x.jpg?v=1741950191"
  },
  {
    type: "footer"
  }
];

const SnapScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const wrapperRef = useRef(null);

  const goToSlide = (index) => {
    if (index >= 0 && index < sections.length) {
      setActiveIndex(index);
    }
  };

  const handleWheel = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (e.deltaY > 0 && activeIndex < sections.length - 1) {
      goToSlide(activeIndex + 1);
    } else if (e.deltaY < 0 && activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' && activeIndex < sections.length - 1) {
      goToSlide(activeIndex + 1);
    } else if (e.key === 'ArrowUp' && activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  // Handle touch move (optional - to prevent default behavior if needed)
  const handleTouchMove = (e) => {
    // Prevent default to stop browser scroll
    // e.preventDefault();
    touchEndY.current = e.touches[0].clientY;
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    if (isScrolling.current) return;
    
    const touchDiff = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50; // Minimum distance to be considered a swipe
    
    if (Math.abs(touchDiff) < minSwipeDistance) return;
    
    isScrolling.current = true;

    if (touchDiff > 0 && activeIndex < sections.length - 1) {
      // Swipe up - go to next slide
      goToSlide(activeIndex + 1);
    } else if (touchDiff < 0 && activeIndex > 0) {
      // Swipe down - go to previous slide
      goToSlide(activeIndex - 1);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 1200);
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
      wrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
      wrapper.addEventListener('touchend', handleTouchEnd);
    }
    
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      if (wrapper) {
        wrapper.removeEventListener('touchstart', handleTouchStart);
        wrapper.removeEventListener('touchmove', handleTouchMove);
        wrapper.removeEventListener('touchend', handleTouchEnd);
      }
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <div className={style.wrapper} ref={wrapperRef}>
      {sections.map((sec, index) => {
        let className = style.inactive;
        if (index === activeIndex) {
          className = style.active;
        } else if (index === activeIndex - 1) {
          className = style.previous;
        }
        
        // Handle different section types
        let content;
        if (sec.type === "footer") {
          content = (
            <div className={style.footerContainer}>
              <Footer />
            </div>
          );
        } else if (sec.type === "image") {
          content = (
            <a href={sec.href} target="_blank" rel="noopener noreferrer" className={style.linkWrapper}>
              <img src={sec.src} alt="..." className={style.video} />
            </a>
          );
        } else if (sec.type === "video") {
          content = (
            <a href={sec.href} target="_blank" rel="noopener noreferrer" className={style.linkWrapper}>
              <video
                className={style.video}
                src={sec.src}
                autoPlay
                muted
                loop
                playsInline
              />
            </a>
          );
        }

        return (
          <div key={index} className={`${style.slide} ${className}`}>
            {content}
          </div>
        );
      })}

      <div className={style.dots}>
        {sections.map((_, i) => (
          <button
            key={i}
            className={`${style.dot} ${i === activeIndex ? style.activeDot : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default SnapScroll;
// import React, { useEffect, useRef, useState } from 'react';
// import style from './test.module.css';
// import Footer from './Section16contact';

// const sections = [
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/WEBSITE-BANNER_cd6c2cb6-49b4-452a-9911-35df3d559bd4_1660x.jpg?v=1746528566"
//   },
//   {
//     type: "video",
//     src: 'https://saya.pk/cdn/shop/videos/c/vp/ec619b7331b644c6bedacc1b6812190d/ec619b7331b644c6bedacc1b6812190d.HD-1080p-7.2Mbps-46803908.mp4?v=0'
//   },
//   {
//     type: "video",
//     src: "https://saya.pk/cdn/shop/videos/c/vp/7fdd915912a544f5beeb6756a9b12dc3/7fdd915912a544f5beeb6756a9b12dc3.HD-1080p-7.2Mbps-46745983.mp4?v=0"
//   },
//   {
//     type: "video",
//     src: "https://saya.pk/cdn/shop/videos/c/vp/435e5c47f7a14c06bc6ca32c4de218a6/435e5c47f7a14c06bc6ca32c4de218a6.HD-1080p-7.2Mbps-46349470.mp4?v=0"
//   },
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/MUSHQ-_Web_12e2ad43-5440-46c5-b7c3-7e65938dc887_1660x.jpg?v=1743068089"
//   },
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/Unstitched-EMB-3pc_web_1660x.jpg?v=1744289328"
//   },
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/Lawn-Spring-Summer-25-Web_cfeaacce-860a-4ee3-b6a1-dc0e775cb47d_1660x.jpg?v=1744441857"
//   },
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/Lawn-Spring-Summer-25-Web_cfeaacce-860a-4ee3-b6a1-dc0e775cb47d_1660x.jpg?v=1744441857"
//   },
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/Chikankari-collection-25_1660x.jpg?v=1744288661"
//   },
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/WEBSITE-BANNER_34fa5332-e6be-4208-b297-dee44fa2668f_1660x.jpg?v=1745476562"
//   },
//   {
//     type: "video",
//     src: "https://saya.pk/cdn/shop/videos/c/vp/1b8a4721104c46a1bc722877457d9eb6/1b8a4721104c46a1bc722877457d9eb6.HD-1080p-7.2Mbps-46676795.mp4?v=0"
//   },
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/Western-collection-_Web_-F_1660x.jpg?v=1744458917"
//   },
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/WEBSITE-BANNER_ca3a9330-f830-4424-9a2d-0c7fe3c41d0c_1660x.jpg?v=1745482956"
//   },
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/MENSWEAR_BANNER_FOR_NATIONAL_WEBSITE_DESKTOP_1660x.jpg?v=1742802957"
//   },
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/Unstitched-Jacquard-_web_1660x.jpg?v=1745922940"
//   },
//   {
//     type: "image",
//     src: "https://saya.pk/cdn/shop/files/RTW-LUXURY-DESKTOP-BANNER_1660x.jpg?v=1741950191"
//   },
//   {
//     type: "footer"
//   }
// ];

// const SnapScroll = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const isScrolling = useRef(false);

//   const goToSlide = (index) => {
//     if (index >= 0 && index < sections.length) {
//       setActiveIndex(index);
//     }
//   };

//   const handleWheel = (e) => {
//     if (isScrolling.current) return;
//     isScrolling.current = true;

//     if (e.deltaY > 0 && activeIndex < sections.length - 1) {
//       goToSlide(activeIndex + 1);
//     } else if (e.deltaY < 0 && activeIndex > 0) {
//       goToSlide(activeIndex - 1);
//     }

//     setTimeout(() => {
//       isScrolling.current = false;
//     }, 1200);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'ArrowDown' && activeIndex < sections.length - 1) {
//       goToSlide(activeIndex + 1);
//     } else if (e.key === 'ArrowUp' && activeIndex > 0) {
//       goToSlide(activeIndex - 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('wheel', handleWheel, { passive: true });
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [activeIndex]);

//   return (
//     <div className={style.wrapper}>
//       {sections.map((sec, index) => {
//         let className = style.inactive;
//         if (index === activeIndex) {
//           className = style.active;
//         } else if (index === activeIndex - 1) {
//           className = style.previous;
//         }
        
//         // Handle different section types
//         let content;
//         if (sec.type === "footer") {
//           content = (
//             <div className={style.footerContainer}>
//               <Footer />
//             </div>
//           );
//         } else if (sec.type === "image") {
//           content = (
//             <a href={sec.href} target="_blank" rel="noopener noreferrer" className={style.linkWrapper}>
//               <img src={sec.src} alt="..." className={style.video} />
//             </a>
//           );
//         } else if (sec.type === "video") {
//           content = (
//             <a href={sec.href} target="_blank" rel="noopener noreferrer" className={style.linkWrapper}>
//               <video
//                 className={style.video}
//                 src={sec.src}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </a>
//           );
//         }

//         return (
//           <div key={index} className={`${style.slide} ${className}`}>
//             {content}
//           </div>
//         );
//       })}

//       <div className={style.dots}>
//         {sections.map((_, i) => (
//           <button
//             key={i}
//             className={`${style.dot} ${i === activeIndex ? style.activeDot : ''}`}
//             onClick={() => goToSlide(i)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SnapScroll;




// // import React, { useEffect, useRef, useState } from 'react';
// // import style from './test.module.css';

// // import Image from 'next/image';
// // import Footer from './Section16contact';



// // const sections = [
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/WEBSITE-BANNER_cd6c2cb6-49b4-452a-9911-35df3d559bd4_1660x.jpg?v=1746528566"
// //   },
// //   {
// //     type : "video",
// //     src:'https://saya.pk/cdn/shop/videos/c/vp/ec619b7331b644c6bedacc1b6812190d/ec619b7331b644c6bedacc1b6812190d.HD-1080p-7.2Mbps-46803908.mp4?v=0'
// //   },
// //   {
// //     type : "video ",
// //     src:"https://saya.pk/cdn/shop/videos/c/vp/7fdd915912a544f5beeb6756a9b12dc3/7fdd915912a544f5beeb6756a9b12dc3.HD-1080p-7.2Mbps-46745983.mp4?v=0"
// //   },
// //   {
// //     type: "video",
// //     src:"https://saya.pk/cdn/shop/videos/c/vp/435e5c47f7a14c06bc6ca32c4de218a6/435e5c47f7a14c06bc6ca32c4de218a6.HD-1080p-7.2Mbps-46349470.mp4?v=0"
// //   },
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/MUSHQ-_Web_12e2ad43-5440-46c5-b7c3-7e65938dc887_1660x.jpg?v=1743068089"
// //   },
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/Unstitched-EMB-3pc_web_1660x.jpg?v=1744289328"
// //   },
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/Lawn-Spring-Summer-25-Web_cfeaacce-860a-4ee3-b6a1-dc0e775cb47d_1660x.jpg?v=1744441857"
// //   },
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/Lawn-Spring-Summer-25-Web_cfeaacce-860a-4ee3-b6a1-dc0e775cb47d_1660x.jpg?v=1744441857"
// //   },
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/Chikankari-collection-25_1660x.jpg?v=1744288661"
// //   },
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/WEBSITE-BANNER_34fa5332-e6be-4208-b297-dee44fa2668f_1660x.jpg?v=1745476562"
// //   },
// //   {
// //     type : "video ",
// //     src:"https://saya.pk/cdn/shop/videos/c/vp/1b8a4721104c46a1bc722877457d9eb6/1b8a4721104c46a1bc722877457d9eb6.HD-1080p-7.2Mbps-46676795.mp4?v=0"
// //   },
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/Western-collection-_Web_-F_1660x.jpg?v=1744458917"
// //   },
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/WEBSITE-BANNER_ca3a9330-f830-4424-9a2d-0c7fe3c41d0c_1660x.jpg?v=1745482956"
// //   },
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/MENSWEAR_BANNER_FOR_NATIONAL_WEBSITE_DESKTOP_1660x.jpg?v=1742802957"
// //   },
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/Unstitched-Jacquard-_web_1660x.jpg?v=1745922940"
// //   },
// //   {
// //     type : "image",
// //     src : "https://saya.pk/cdn/shop/files/RTW-LUXURY-DESKTOP-BANNER_1660x.jpg?v=1741950191"
// //   },
// //   {
// //     type : "section" , 
// //     section : <Footer/>
// //   }
// // ];

// // const SnapScroll = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const isScrolling = useRef(false);

// //   const goToSlide = (index) => {
// //     if (index >= 0 && index < sections.length) {
// //       setActiveIndex(index);
// //     }
// //   };

// //   const handleWheel = (e) => {
// //     if (isScrolling.current) return;
// //     isScrolling.current = true;

// //     if (e.deltaY > 0 && activeIndex < sections.length - 1) {
// //       goToSlide(activeIndex + 1);
// //     } else if (e.deltaY < 0 && activeIndex > 0) {
// //       goToSlide(activeIndex - 1);
// //     }

// //     setTimeout(() => {
// //       isScrolling.current = false;
// //     }, 1200);
// //   };

// //   const handleKeyDown = (e) => {
// //     if (e.key === 'ArrowDown' && activeIndex < sections.length - 1) {
// //       goToSlide(activeIndex + 1);
// //     } else if (e.key === 'ArrowUp' && activeIndex > 0) {
// //       goToSlide(activeIndex - 1);
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener('wheel', handleWheel, { passive: true });
// //     window.addEventListener('keydown', handleKeyDown);
// //     return () => {
// //       window.removeEventListener('wheel', handleWheel);
// //       window.removeEventListener('keydown', handleKeyDown);
// //     };
// //   }, [activeIndex]);

// //   return (
// //     <div className={style.wrapper}>
// //       {sections.map((sec, index) => {
// //         let className = style.inactive;
// //         if (index === activeIndex) {
// //           className = style.active;
// //         } else if (index === activeIndex - 1) {
// //           className = style.previous;
// //         }

// //         return (
// //           <div key={index} className={`${style.slide} ${className}`}>
// //             <a href={sec.href} target="_blank" rel="noopener noreferrer" className={style.linkWrapper}>

// //              { 
// //               sec.type == "image" ? <img src={sec.src} alt='...' className={style.video} /> :
// //               <video
// //                 className={style.video}
// //                 src={sec.src}
// //                 autoPlay
// //                 muted
// //                 loop
// //                 playsInline
// //               />}
// //             </a>
// //           </div>
// //         );
// //       })}

// //       <div className={style.dots}>
// //         {sections.map((_, i) => (
// //           <button
// //             key={i}
// //             className={`${style.dot} ${i === activeIndex ? style.activeDot : ''}`}
// //             onClick={() => goToSlide(i)}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SnapScroll;


