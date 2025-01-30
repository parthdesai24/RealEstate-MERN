// import React, { useEffect, useState } from "react";
// import CountUp from "react-countup";
// import { LiaCertificateSolid } from "react-icons/lia";
// const Achievements = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const statistics = [
//     { label: "Happy clients", value: 12 },
//     { label: "Different cities", value: 3 },
//     { label: "Projects completed", value: 45 },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const aboutSection = document.getElementById('about');
//       if(aboutSection){
//         const top = aboutSection.getBoundingClientRect().top;
//         const isVisible = top < window.innerHeight - 100;
//         setIsVisible(isVisible); 
//       }
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     }
//   })

//   return (
//     <section id="about" className="mx-auto max-w-[1440px]">
//       <div className="flex flex-col xl:flex-row">
//         <div className="flex-[6] flex justify-center flex-col bg-[#008274] text-white px-6 lg:px-12 py-16">
//           <h2 className="h2">Our Achievements</h2>
//           <p className="py-5 text-white max-w-[47rem]">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
//             cupiditate magni quasi earum unde, corrupti quidem illum ea laborum
//             vel tempora dignissimos aspernatur iusto doloribus, totam blanditiis
//             commodi!
//           </p>
//           <div className="flex flex-wrap gap-4">
//             {statistics.map((statistic, index) => (
//               <div key={index} className="p-4 rounded-lg">
//                 <div className="flex items-center gap-1">
//                   <CountUp
//                     start={isVisible ? 0 : null}
//                     end={statistic.value}
//                     duration={9}
//                     delay={0.5}
//                   >
//                     {({ countUpRef }) => (
//                       <h3 ref={countUpRef} className="text-5xl font-sans"></h3>
//                     )}
//                   </CountUp>
//                   <h4 className="regular-32">k+</h4>
//                 </div>
//                 <p className="text-white capitalize pt-2">{statistic.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* RIGHT SIDE */}
//         <div className="bg-customBg flex-[2] relative px-6 lg:px-12 py-16 flexCenter">
//           <div className="p-4 rounded-lg flexCenter flex-col xl:-rotate-90">
//             <span className="relative bottom-8 p-3 flex items-center rounded-full"><LiaCertificateSolid className="text-5xl text-black"/></span>
//             <span className="relative bottom-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem aliquid perspiciatis voluptate.</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { LiaCertificateSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statistics = [
    { label: "Happy clients", value: 12 },
    { label: "Different cities", value: 3 },
    { label: "Projects completed", value: 45 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation variants
  // const leftAnimation = {
  //   hidden: { x: -100, opacity: 0 },
  //   visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  // };

  // const rightAnimation = {
  //   hidden: { x: 100, opacity: 0 },
  //   visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  // };

  const leftAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  
  const rightAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  return (
    <section id="about" className="mx-auto max-w-[1440px]">
      <div className="flex flex-col xl:flex-row">
        {/* LEFT SIDE */}
        <motion.div
          className="flex-[6] flex justify-center flex-col bg-[#008274] text-white px-6 lg:px-12 py-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={leftAnimation}
        >
          <h2 className="h2">Our Achievements</h2>
          <p className="py-5 text-white max-w-[47rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            cupiditate magni quasi earum unde, corrupti quidem illum ea laborum
            vel tempora dignissimos aspernatur iusto doloribus, totam blanditiis
            commodi!
          </p>
          <div className="flex flex-wrap gap-4">
            {statistics.map((statistic, index) => (
              <div key={index} className="p-4 rounded-lg">
                <div className="flex items-center gap-1">
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={statistic.value}
                    duration={9}
                    delay={1}
                  >
                    {({ countUpRef }) => (
                      <h3
                        ref={countUpRef}
                        className="text-5xl font-sans"
                      ></h3>
                    )}
                  </CountUp>
                  <h4 className="regular-32">k+</h4>
                </div>
                <p className="text-white capitalize pt-2">
                  {statistic.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex-[2] relative bg-primary px-6 lg:px-12 py-16 flexCenter"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={rightAnimation}
        >
          <div className="p-4 rounded-lg flexCenter flex-col xl:-rotate-90">
            <span className="relative bottom-8 p-3 flex items-center rounded-full">
              <LiaCertificateSolid />
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              quidem aliquid perspiciatis voluptate.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
