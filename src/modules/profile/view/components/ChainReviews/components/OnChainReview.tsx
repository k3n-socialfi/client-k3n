import { IconClock, IconKol, IconStar } from '@/assets/icons'
import {   motion } from "framer-motion";
import React from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const posts = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];


const OnChainReview = () => {
  return (
    <>
     <Swiper
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
              700: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            grabCursor={true}
            freeMode={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[FreeMode]}
            className="text-white p-4"
          >
    
    
            {posts?.map((post: any, index: any) => (
              <SwiperSlide className="" key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: index / 10,
                  }}
                  viewport={{ once: true }}
                  key={index}
                  className="bg-darkblack-600 border border-secondary/10 shadow-lg shadow-gray-100/10 py-3 px-5  transition-all duration-300 rounded-xl overflow-hidden hover:bg-darkblack-400"
                >
                  <div className="flex items-center justify-between ">
                    <p>2024-03</p>
                    <div className="flex items-center justify-center gap-1">
                      <IconStar color="#82EBFF" />
                      <p>4.5</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-[#0AD8FF]">
                    Product X KOL Campaign
                  </p>
                  <div className="py-1 px-3 mt-[40px] bg-darkblack-400 rounded-lg">
                    <div>
                      <div className="flex items-center gap-2">
                        <IconKol />
                        <p>KOL Booker</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconClock />
                        <p>2024-03 - Present</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
    </>
   
  )
}

export default OnChainReview
