// import React from 'react'
// import {Link} from 'react-router-dom'
// import client1 from '../assets/client1.jpg'
// import client2 from '../assets/client2.jpg'
// import client3 from '../assets/client3.jpg'
// import {FaStar} from 'react-icons/fa'
// const Hero = () => {
//   return (
//     <section className='max-padd-container bg-hero bg-cover bg-no-repeat h-[722px] w-full'>
//       <div className='relative top-32 xs:top-48'>
//         <h1 className='h1 capitalize max-w-[41rem]'>Discover Your Dream Property Today</h1>
//         <p className='my-5 max-w-[33rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non rerum dolorum cumque magni rem illo quia, autem porro excepturi.</p>
//         <div className='inline-flex items-center justify-center gap-4 bg-white rounded ring-1 ring-slate-900/5 mt-4'>
//           <div className='text-center regular-14 leading-tight pl-5 cursor-default'>
//             <p className='regular-14'><span className='uppercase font-bold'>10% off</span> On All Properties</p>
//           </div>
//           <Link to={'/listing'} className='btn-dark !rounded-tl-none !rounded-bl-none !rounded-lg'>Explore</Link>
//         </div>
//         <div className='flex flex-col gap-4 mt-10 mb-4 max-w-64'>
//           <div className='flex relative'>
//             <img src={client1} alt="" className='h-[46px] border-2 border-white shadow-sm rounded-full' />
//             <img src={client2} alt="" className='h-[46px] border-2 border-white shadow-sm rounded-full absolute left-8' />
//             <img src={client3} alt="" className='h-[46px] border-2 border-white shadow-sm rounded-full absolute left-16' />
//             <img src={client1} alt="" className='h-[46px] border-2 border-white shadow-sm rounded-full absolute left-24' />
//             <img src={client2} alt="" className='h-[46px] border-2 border-white shadow-sm rounded-full absolute left-32' />
//             <img src={client3} alt="" className='h-[46px] border-2 border-white shadow-sm rounded-full absolute left-40' />
//             <div className='h-[46px] w-[46px] border-2 border-white shadow-sm bg-slate-500/70 text-white absolute left-48 rounded-full flexCenter text-xs font-semibold'>210k+</div>
//           </div>
//           <div className='h5 !font-semibold max-w-52'>People successfully got their dream homes</div>
//         </div>
//         <div className='flex flex-col'>
//           <div className='flex gap-2 text-yellow-500 text-xs'>
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//           </div>
//           <div className='bold-14 sm:bold-16 relative top-1'>
//           127k<span className='regular-14 sm:regular-16'> Excellent Reviews</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import { FaStar } from 'react-icons/fa';

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: 'easeOut',
      },
    },
  };
};

const Hero = () => {
  return (
    <section className='max-padd-container bg-hero bg-cover bg-no-repeat h-[722px] w-full'>
      <motion.div 
        className='relative top-32 xs:top-48'
        initial='hidden'
        animate='visible'
        variants={fadeIn('up', 0.2)}
      >
        <motion.h1 
          className='h1 capitalize max-w-[41rem]'
          variants={fadeIn('up', 0.4)}
        >
          Discover Your Dream Property Today
        </motion.h1>
        <motion.p 
          className='my-5 max-w-[33rem]'
          variants={fadeIn('up', 0.6)}
        >
          Find the perfect home that matches your style and budget. Explore a wide range of properties in prime locations, handpicked to meet your needs.<br />
          🏡 Your dream home is just a click away!
        </motion.p>
        <motion.div 
          className='inline-flex items-center justify-center gap-4 bg-white rounded ring-1 ring-slate-900/5 mt-4'
          variants={fadeIn('up', 0.8)}
        >
          <div className='text-center regular-14 leading-tight pl-5 cursor-default'>
            <p className='regular-14'><span className='uppercase font-bold'>10% off</span> On All Properties</p>
          </div>
          <Link to={'/listing'} className='btn-dark !rounded-tl-none !rounded-bl-none !rounded-lg'>Explore</Link>
        </motion.div>

        <motion.div 
          className='flex flex-col gap-4 mt-10 mb-4 max-w-64'
          variants={fadeIn('up', 1)}
        >
          <div className='flex relative'>
            {[client1, client2, client3, client1, client2, client3].map((client, index) => (
              <motion.img
                key={index}
                src={client}
                alt='client'
                className={`h-[46px] border-2 border-white shadow-sm rounded-full absolute left-${index * 8}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              />
            ))}
            <motion.div
              className='h-[46px] w-[46px] border-2 border-white shadow-sm bg-slate-500/70 text-white absolute left-48 rounded-full flexCenter text-xs font-semibold'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, duration: 0.4 }}
            >
              210k+
            </motion.div>
          </div>
          <div className='h5 font-semibold max-w-52 whitespace-nowrap overflow-hidden text-ellipsis'>
            People successfully got their dream homes
          </div>
        </motion.div>

        <motion.div 
          className='flex flex-col'
          variants={fadeIn('up', 1.2)}
        >
          <div className='flex gap-2 text-yellow-500 text-xs'>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.1, duration: 0.3 }}
              >
                <FaStar />
              </motion.div>
            ))}
          </div>
          <div className='bold-14 sm:bold-16 relative top-1'>
            127k<span className='regular-14 sm:regular-16'> Excellent Reviews</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;