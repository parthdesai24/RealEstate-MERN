// import { FaListAlt } from "react-icons/fa";
// import {AiOutlineFileSearch} from "react-icons/ai"
// import { IoBookmarksOutline, IoTicketOutline } from "react-icons/io5";
// import { RiFileList3Line } from "react-icons/ri";

// const Features = () => {
//   return (
//     <section className="max-padd-container py-10 bg-white">
//       {/* CONTAINER */}
//       <div className="max-padd-container flexBetween flex-wrap gap-8">
//         <div className="flex items-start gap-x-3">
//           <RiFileList3Line className="text-3xl" />
//           <h4 className="medium-18">Detailed Listings</h4>
//         </div>
//         <div className="flex items-start gap-x-3">
//           <AiOutlineFileSearch className="text-3xl" />
//           <h4 className="medium-18">Property Search</h4>
//         </div>
//         <div className="flex items-start gap-x-3">
//           <IoBookmarksOutline className="text-3xl" />
//           <h4 className="medium-18">Saved Favorites</h4>
//         </div>
//         <div className="flex items-start gap-x-3">
//           <IoTicketOutline className="text-4xl relative bottom-1" />
//           <h4 className="medium-18">Book Visits</h4>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import { FaListAlt } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoBookmarksOutline, IoTicketOutline } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { motion } from "framer-motion";

const Features = () => {
  // Define animations
  const featureAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="max-padd-container py-10 bg-white">
      {/* CONTAINER */}
      <div className="max-padd-container flexBetween flex-wrap gap-8">
        <motion.div
          className="flex items-start gap-x-3"
          initial="hidden"
          animate="visible"
          variants={featureAnimation}
        >
          <RiFileList3Line className="text-3xl" />
          <h4 className="medium-18">Detailed Listings</h4>
        </motion.div>
        <motion.div
          className="flex items-start gap-x-3"
          initial="hidden"
          animate="visible"
          variants={featureAnimation}
        >
          <AiOutlineFileSearch className="text-3xl" />
          <h4 className="medium-18">Property Search</h4>
        </motion.div>
        <motion.div
          className="flex items-start gap-x-3"
          initial="hidden"
          animate="visible"
          variants={featureAnimation}
        >
          <IoBookmarksOutline className="text-3xl" />
          <h4 className="medium-18">Saved Favorites</h4>
        </motion.div>
        <motion.div
          className="flex items-start gap-x-3"
          initial="hidden"
          animate="visible"
          variants={featureAnimation}
        >
          <IoTicketOutline className="text-4xl relative bottom-1" />
          <h4 className="medium-18">Book Visits</h4>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
