import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: `"Roommate Finder has been a lifesaver for me. I found the perfect roommate just days after signing up. The platform is so easy to use, and I was able to browse listings from students and young professionals in NYC looking for affordable living options."`,
    author: 'Sarah Williams',
    title: 'Senior Student at NYU',
  },
  {
    text: `"Finding a roommate has never been easier! Roommate Finder helped me connect with fellow graduates from nearby universities. It’s the go-to platform for anyone in NYC trying to save on rent while finding a trustworthy roommate."`,
    author: 'John Doe',
    title: 'Recent Graduate from Columbia University',
  },
  {
    text: `"I was able to find a great roommate through Roommate Finder. The platform made it super simple to filter by preferences, and it’s especially great for students and young professionals in NYC. Definitely recommend it!"`,
    author: 'Emily Smith',
    title: 'Product Designer at a Tech Startup in NYC',
  },
];

const ReviewSliders = () => {
  return (
    <div data-aos="fade-right" className="bg-stone-100 py-10 px-4 lg:px-20">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        What Our Customers Say
      </h2>

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('Slide changed')}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:-translate-y-2 duration-300">
              <blockquote className="text-lg italic text-gray-700 dark:text-gray-200 mb-6">
                {testimonial.text}
              </blockquote>
              <hr className="border-gray-300 dark:border-gray-600 mb-4" />
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSliders;
