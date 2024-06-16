import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, FreeMode } from 'swiper/modules'
import {motion} from 'framer-motion' 
import { IconStar, IconThunder, IconTwitter } from '@/assets/icons'
import { formatNumberToK } from '@/utils'
import Image from 'next/image'
import TagList from '../TagList'

const SwipperImage = ({featureKols}: any) => {
  return (
    <>
      <Swiper breakpoints={{
        300: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 15
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 15
        },
        1530: {
          slidesPerView: 6,
          spaceBetween: 15
        }
      }}
              freeMode={true}
              autoplay={{ delay: 2500, disableOnInteraction: false, }}
              grabCursor={true}
              modules={[FreeMode, Autoplay]}
      >
        {featureKols?.map((item: any,i: number) => (
          <SwiperSlide key={item?.userId}>
            <motion.div 
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 1,
                delay: i * 0.3
              }}
              className="shadow-xl shadow-gray-700/30"
            >
              <a href={`/profile/${item?.username}`} className="flex flex-col gap-6 group:relative shadow-lg text-white rounded-xl overflow-hidden bg-darkblack-500 border-[1px] border-gray-100/10 hover:bg-darkblack-200 transition-all duration-300">
                <div className="absolute z-10 top-1 left-1 select-none">
                  <div className="flex items-center space-x-1 flex-wrap bg-[#191D24] border rounded-full text-white px-2 py-[1px]">
                    <IconThunder height={12} width={12} />
                    <span className="text-xs">{item?.twitterInfo?.totalPoints}</span> <span>|</span> <span><IconStar width={12} height={12} /></span> <span className="text-xs">{item?.review}</span>
                  </div>
                </div>
                <Image src={`${item?.twitterInfo?.avatar ?? "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg"}`} alt='avatar'  className="" width={400} height={400}/>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                      duration: 0.2,
                    }}
                    className="transition-all duration-200 overflow-hidden pb-4">
                  <div className="relative flex flex-col space-y-1 w-[90%] mx-auto items-start" >
                    <h1 className="text-xl font-bold text-[#82EAFF]">
                      {item?.username}
                    </h1>
                    <div className="flex space-x-1 pb-[4px] items-center">
                      <span className="border p-[2px] border-white rounded-full">
                        <IconTwitter/>
                      </span>
                      <span className="pl-1 flex space-x-1">
                        <span>
                          {formatNumberToK(item?.twitterInfo?.followers)}
                        </span>
                        <span>followers</span>
                      </span>
                    </div>
                    <div className="cursor-pointer">
                      {item &&
                       <TagList tags={item?.tags}/>
                      }
                    </div>
                  </div>
                </motion.div>
              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwipperImage
