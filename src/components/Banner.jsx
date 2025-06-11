import React, {  useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import { AuthContext } from '../provider/AuthProvider';

const wordds = [
  'Meet Roommates',
  'Share Spaces',
  'Co-Live Smart',
  'Build Bonds',
  'Share Homes',
];

const Banner = () => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    AOS.init();

    const timeout = setTimeout(() => {
      setStartTyping(true);
    }, 1000); // matches AOS duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="lg:pl-10 lg:pr-5 p-5 mt-10 pb-10 lg:flex justify-between items-center gap-10 space-y-10 lg:space-y-0 min-h-screen">
      <div className=" lg:text-start text-center w-full lg:w-[40%]">
        <h1
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
          className="text-6xl font-bold h-[230px] "
          data-aos-duration="1000"
        >
          THE PLACE TO <br />
          <span>
            {startTyping ? (
              <Typewriter
                words={wordds}
                cursor={true}
                cursorBlinking={false}
                loop={0}
                delaySpeed={1500}
              />
            ) : (
              <span className="inline-block w-[10px] animate-blink">|</span>
            )}
          </span>
        </h1>
      </div>
      <div
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
        className="text-6xl font-bold"
        data-aos-duration="1000"
      >
        <img
          className="bg-gray-600 lg:w-[800px] lg:h-[800px] lg:object-center"
          src="/assets/Banner/Banner City 2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
