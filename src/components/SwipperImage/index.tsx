import {Swiper, SwiperSlide} from 'swiper/react'

import {motion} from 'framer-motion' 

import {Autoplay, FreeMode, Pagination } from 'swiper/modules'
import Count from '../Count'
import { formatNumberToK } from '@/utils'
import { IconStar, IconThunder, IconTwitter } from '@/assets/icons'
import { StyleChips } from '../CardFeaturedKOLs/style'
import TagList from '../TagList'

type ISwiperImg = {
  data: IUserKOL[]
}

const SwipperImage = ({data} : ISwiperImg) => {
  return (
    <>
      <Swiper breakpoints={{
        340: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 6,
          spaceBetween: 15
        }
      }}
              freeMode={true}
              autoplay={{ delay: 2500, disableOnInteraction: false, }}
              pagination={{
                clickable: true
              }}
              grabCursor={true}
              modules={[FreeMode, Pagination, Autoplay]}
              className="shadow-xs shadow-gray-600"
      >
        {data.map((item,i) => (
          <SwiperSlide key={item.userId}>
            <motion.div 
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 1,
                delay: i * 0.3
              }}
            >
              <div className="flex flex-col gap-6 group:relative shadow-lg text-white rounded-xl px-6 py-8 h-[200px] w-[200px]">

                <div className="absolute z-10 top-1 left-1 select-none">
                  <div className="flex items-center space-x-1 flex-wrap bg-[#191D24] border border-primary rounded-full text-white px-2 py-[1px]">
                    <IconThunder height={14} width={14} />
                    <span className="text-xs">{item?.twitterInfo?.totalPoints}</span> | <p><IconStar width={14} height={14} /></p> <span className="text-xs">{item?.review}</span>
                  </div>
                </div>
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-md"
                    style={{backgroundImage: `url(${item?.twitterInfo?.avatar})`}}
                />
                <motion.div
                    initial={{opacity: 0}}
                    whileHover={{opacity: 1}}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-[#191D24] to-white/0 opacity-10 hover:opacity-30 transition-all duration-200 overflow-hidden">
                  <div className="relative flex flex-col space-y-1 w-[80%] mx-auto pt-40 items-end" >
                    <h1 className="text-xl font-bold text-[#82EAFF]">
                      {item.username}
                    </h1>
                    <div className="flex space-x-1 items-center">
                      <p className="border p-[2px] border-white rounded-full">
                        <IconTwitter/>
                      </p>
                      <Count countTo={formatNumberToK(item?.twitterInfo?.followers)} />
                      <p>followers</p>
                    </div>
                    <div className="cursor-pointer">
                      {item &&
                       <TagList tags={item?.tags}/>
                      }
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwipperImage
