import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: `"Subscribely is a game changer. It gives us access to a variety of tech subscriptions, from streaming services like Netflix to productivity tools like Grammarly. Perfect for anyone who wants to manage their subscriptions in one place."`,
    author: 'Sarah Williams',
    title: 'CEO of Netflix',
  },
  {
    text: `"Subscribely has saved us so much time and money. We can now manage all our subscriptions in one place and make adjustments on the fly. A must-have for any tech enthusiast!"`,
    author: 'John Doe',
    title: 'CTO of DevSolutions',
  },
  {
    text: `"Subscribely has made managing my subscriptions so much easier. From ChatGPT to Spotify, everything is streamlined. I love how simple and efficient it is to keep track of my plans."`,
    author: 'Emily Smith',
    title: 'Product Designer at PixelCraft',
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
