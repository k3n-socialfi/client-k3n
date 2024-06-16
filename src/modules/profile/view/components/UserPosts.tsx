import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import {
  format,
  formatDistance,
  formatDistanceToNow,
  formatRelative,
  subDays,
} from "date-fns";

import {
  HeartReactionIcon,
  IconChat,
  IconComment,
  Iconview,
  SaveIcon,
  ShareReactionIcon,
} from "@/assets/icons";
import TweetText from "./TweetText";
import Image from "next/image";
import svgs from "@/assets/svgs";
import imgs from "@/assets/images";

const UserPosts = ({ posts }: any) => {
 
  return (
    <div className="px-[10px] md:pl-10">
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
            slidesPerView: 3.2,
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
              className="h-[484px] shadow-md shadow-gray-100/20 transition-all duration-300 border-[1px] border-gray-100/20 rounded-xl overflow-hidden"
            >
              <div className="border-b-[1px] border-gray-100/20 flex items-center justify-between">
                <div className="flex items-center justify-center flex-shrink-0">
                  <div className="p-4 rounded-full">
                    <img
                      src={post?.user.profilePicUrl}
                      alt="post image"
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[#82EBFF]">{post?.user.name}</h1>
                    <p className="text-xs ">@{post?.user.username}</p>
                  </div>
                </div>
                <motion.button
                  className="mr-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Iconview />
                </motion.button>
              </div>
              <div className="w-full ratio-square">
                <Swiper
                  navigation={true}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  autoplay={{ delay: 2500, disableOnInteraction: true }}
                  freeMode={true}
                  modules={[FreeMode, Pagination, Autoplay]}
                >
                  {post?.mediaUrl?.map((image: any, index: any) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-[248px] w-[100%]">
                        <Image
                          fill
                          sizes="100%"
                          objectFit="fill"
                          alt=""
                          src={image}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="px-4 pt-2 pb-4">
                {/* Icon  */}
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex space-x-4 items-center">
                    <motion.button
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <HeartReactionIcon />
                    </motion.button>
                    {/* <IconComment /> */}
                    <motion.button
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <div className="relative w-5 h-5">
                        <Image
                          fill
                          sizes="100%"
                          alt="chat"
                          src={imgs.img_chat}
                          objectFit="cover"
                        />
                      </div>
                    </motion.button>

                    <motion.button
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <ShareReactionIcon />
                    </motion.button>
                  </div>

                  <motion.button
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    <SaveIcon />
                  </motion.button>
                </div>

                {/* Icon  */}
                <TweetText text={post?.text} />

                <div>
                  {formatDistanceToNow(new Date(post?.creationDate), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserPosts;
