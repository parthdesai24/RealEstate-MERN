import React from 'react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"


const Footer = () => {
  return (
    <footer>
      <div className='max-padd-container flex items-start justify-between flex-col lg:flex-row gap-8 py-6 mb-7 bg-gradient-to-r from-primary via-white to-white'>
        <div>
          <h4 className='h4'>We are always here to help</h4>
          <p>Need help? Our team is ready to assist you. Reach out anytime!</p>
        </div>
        <div className='flexStart flex-wrap gap-8'>
          <div className='flexCenter gap-x-6'>
            <FaLocationDot />
            <div>
              <h5 className='h5'>Location</h5>
              <p>Tech City, TX</p>
            </div>
          </div>
          <div className='flexCenter gap-x-6'>
            <FaPhone />
            <div>
              <h5 className='h5'>Phone</h5>
              <p>+1 (800) 555-7890</p>
            </div>
          </div>
          <div className='flexCenter gap-x-6'>
            <FaMailBulk />
            <div>
              <h5 className='h5'>Email Support</h5>
              <p>info@zenhomes.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='max-padd-container flex items-start justify-between flex-wrap gap-12 mt-12'>
        {/* logo - Left side */}
        <div className='flex flex-col max-w-sm gap-y-5'>
          {/* logo */}
          <div>
            <Link to={"/"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img src={logo} alt="" className="h-16" />
            </Link>
          </div>
          <p>Creating comfortable and sustainable living spaces for modern lifestyles.</p>
        </div>
        <div className='flexStart gap-7 xl:gap-x-36 flex-wrap'>
          <ul>
            <h4 className='h4 mb-3'>Customer Service</h4>
            <li className='my-2'><Link to={"/"} className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Help center</Link></li>
            <li className='my-2'><Link to={"/"} className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Payment methods</Link></li>
            <li className='my-2'><Link to={"/"} className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Contact</Link></li>
            <li className='my-2'><Link to={"/"} className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Shipping status</Link></li>
            <li className='my-2'><Link to={"/"} className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Complaints</Link></li>
            {/* <li className='my-2'><a href="" className='text-gray-30 regular-14 '></a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Contact</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '></a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Complaints</a></li> */}
          </ul>
          <ul>
            <h4 className='h4 mb-3'>Legal</h4>
            <li className='my-2'><Link to={"/"} className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Privacy Policy</Link></li>
            <li className='my-2'><Link to={"/"} className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Cookie settings</Link></li>
            <li className='my-2'><Link to={"/"} className='text-gray-30 regular-14 'onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Terms & conditions</Link></li>
            <li className='my-2'><Link to={"/"} className='text-gray-30 regular-14 'onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Cancelation</Link></li>
            <li className='my-2'><Link to={"/"} className='text-gray-30 regular-14 'onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Imprint</Link></li>
            {/* <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Privacy Policy</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Cookie settings</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Terms & conditions</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Cancelation</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Imprint</a></li> */}
          </ul>
          <ul>
            <h4 className='h4 mb-3'>Others</h4>
            <li className='my-2'><Link href="" className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Our teams</Link></li>
            <li className='my-2'><Link href="" className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Sustainability</Link></li>
            <li className='my-2'><Link href="" className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Press</Link></li>
            <li className='my-2'><Link href="" className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Jobs</Link></li>
            <li className='my-2'><Link href="" className='text-gray-30 regular-14 ' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Newsletter</Link></li>
          </ul>
        </div>
      </div>
      {/* copyrights */}
      <p className='max-padd-container medium-14 py-2 px-8 rounded flexBetween mt-6 bg-gradient-to-r from-primary via-white to-white'><span>2025 ZenHomes</span><span>All rights reserved</span></p>

    </footer>
  )
}

export default Footer