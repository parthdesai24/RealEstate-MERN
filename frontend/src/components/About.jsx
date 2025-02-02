import React from "react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import { FaScreenpal, FaUpDown } from "react-icons/fa6";
import { FaEnvelope, FaInbox, FaList, FaMap, FaMapMarked, FaMapMarkedAlt, FaUser } from "react-icons/fa";
const About = () => {
  return (
    <section className="max-padd-container pb-16 xl:pb-28">
      <div className="flex items-center flex-col lg:flex-row gap-12">
        {/* IMAGE LEFT SIDE */}
        <div className="flex-1">
          <div className="relative">
            <img src={about1} alt="AboutImg" className="rounded-3xl" />
            <span className="absolute top-8 left-8 bg-white px-2 rounded-full medium-14">
              San Francisco
            </span>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="h2">
            Empowering You to Find Your Dream Home, Effortlessly
          </h2>
          <p>
          Discover the perfect property with ease. Our app is designed to make your real estate journey simple, seamless, and stress-free. Explore, connect, and manage every detail—all in one place.
          </p>
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3">
              <FaScreenpal className="text-secondary" />
              <p>Virtual property tours and viewings</p>
            </div>
            <div className="flex gap-3">
              <FaUpDown className="text-secondary" />
              <p>Real-time market price updates</p>
            </div>
            <div className="flex gap-3">
              <FaMap className="text-secondary" />
              <p>Interactive floor plans and maps</p>
            </div>
            <div className="flex gap-3">
              <FaMapMarkedAlt className="text-secondary" />
              <p>Access to off-market properties</p>
            </div>
            <div className="flex gap-3">
              <FaEnvelope className="text-secondary" />
              <p>Direct messaging with agents and owners Simplifying You</p>
            </div>
          </div>
        </div>
      </div>
      {/* SECOND CONTAINER */}
      <div className="flex items-center flex-col lg:flex-row gap-12 mt-36">
        {/* INFO LEFT SIDE */}
        <div className="flex-1">
          <h2 className="h2">
          Simplifying Your Real Estate Journey Every Step of the Way
          </h2>
          <p>
          Discover, connect, and manage your property needs with ease. Our app is designed to give you full control over your real estate journey:
          </p>
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3">
              <FaList className="text-secondary" />
              <p>In-app scheduling for property viewings</p>
            </div>
            <div className="flex gap-3">
              <FaUpDown className="text-secondary" />
              <p>Real-time market price updates</p>
            </div>
            <div className="flex gap-3">
              <FaInbox className="text-secondary" />
              <p>User-friendly interface for smooth navigation</p>
            </div>
            <div className="flex gap-3">
              <FaUser className="text-secondary" />
              <p>Detailed agent and realtor profiles</p>
            </div>
            <div className="flex gap-3">
              <FaMapMarkedAlt className="text-secondary" />
              <p>Access to off-market properties</p>
            </div>
          </div>
        </div>
        {/* IMAGE LEFT SIDE */}
        <div className="flex-1">
          <div className="relative flex justify-end">
            <img src={about2} alt="AboutImg" className="rounded-3xl" />
            <span className="absolute top-8 right-8 bg-white px-2 rounded-full medium-14">
            Golden Coast
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
