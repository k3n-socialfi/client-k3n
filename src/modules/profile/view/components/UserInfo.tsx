import {
  IconCheck,
  IconCheckCrile,
  IconShare,
  IconSharePost,
  IconShareProject,
  IconStar,
  IconStarKols,
  IconThunder,
  IconTwitter,
  LocationIcon,
  TelegramIcon,
  VerifyIcon,
} from "@/assets/icons";
import { motion } from "framer-motion";
import imgs from "@/assets/images";;
import TagList from "@/components/TagList";
import { Divider } from "@mui/material";
import Image from "next/image";

const UserInfo = ({ user }: any) => {

  return (
    <div className="w-full relative pt-5 text-white flex flex-col gap-[140px]">
      <div className="w-full max-h-[312px] relative ">
        <div className="relative w-full h-[300px]">
          <Image
            src={user?.twitterInfo?.coverImage ?? imgs.img_user_banner}
            alt="bg"
            fill
            sizes="100%"
            objectFit="cover"
          />
        </div>

        {/* share */}
        <div className="absolute right-3 top-1 px-[10px]">
          <div className="flex gap-[6px]">
            <motion.button 
             whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center gap-2 bg-[#232731] py-2 px-3">
              <IconShareProject />

              <p className="md:text-base text-[#82EBFF]">Share</p>
            </motion.button>

            <motion.button  
             whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center gap-2 bg-[#232731] py-2 px-3">
              <IconStarKols color="#82EBFF" />

              <p className="md:text-base text-[#82EBFF]">Added to favorites</p>
            </motion.button>
          </div>
        </div>

        {/* User infor */}
        <div className="absolute -bottom-[40%] w-full">
          <div className="flex items-center justify-between ">
            {/* left */}
            <div className="flex items-center justify-center gap-[38px]">
              {/* avatar */}
              <div className="relative rounded-full w-[246px] h-[246px] flex-shrink-0">
                <Image
                  className="rounded-full"
                  fill
                  sizes="100%"
                  objectFit="contain"
                  alt="avatar"
                  src={user?.twitterInfo?.avatar}
                />
              </div>

              {/* infor */}
              <div className="hidden lg:flex flex-col   pt-2 ">
                <div className="flex items-center gap-3 w-2/3">
                  <p className="text-white text-[56px] font-bold truncate line-clamp-2 text-wrap  font-kode">
                    {user?.fullName}
                  </p>
                  <IconCheckCrile color="#009CB9" />
                </div>

                <div className="flex space-x-2 items-center">
                  <p className="text-secondary text-sm truncate line-clamp-2 text-wrap w-2/3">
                    {user?.bio}
                  </p>
                </div>
                <div className="flex w-2/3 h-[1px] bg-secondary/20" />
                <div className="flex gap-4 items-center pt-2">
                  <div className="flex gap-1 items-center">
                    <LocationIcon color="#F23581" />
                    <h1 className="text-white font-bold">{user?.location}</h1>
                  </div>
                  <div className="mr-2 flex items-center gap-1">
                    <IconStar width={14} height={14} color="#F23581" />
                    <h1 className="text-white font-bold ">{user?.review}</h1>
                  </div>
                  <TagList tags={user?.tags} />
                </div>

                <div className="flex gap-1 pt-2">
                  <a
                    target="_blank"
                    href={`https://x.com/${user?.twitterInfo?.username}`}
                    className="flex items-center space-x-1 cursor-pointer"
                  >
                    <IconTwitter />
                    <p className="text-white">{user?.twitterInfo?.username}</p>
                  </a>

                  {/* <a
              target="_blank"
              href={`https://x.com/${user?.twitterInfo?.username}`}
              className="flex items-center space-x-1 cursor-pointer"
            >
              <TelegramIcon />
              <p className="text-white">{user?.twitterInfo?.username}</p>
            </a> */}
                </div>
              </div>
            </div>

            {/* right */}

            <div className="hidden lg:flex  flex-col gap-8">
              <div className="flex items-center justify-center gap-8">
                <div>
                  <p className="text-nowrap">X Followers</p>
                  <p className="text-2xl text-[#82EBFF]">12,314</p>
                </div>
                <Divider
                  sx={{
                    width: "0.5px",
                    height: "76px",
                    backgroundColor: "#FFFFFF",
                  }}
                />
                <div>
                  <p className="text-nowrap">Shill Score</p>

                  <div className="flex gap-1 items-center justify-center">
                    <IconThunder />
                    <p className="text-2xl text-[#82EBFF]">12,314</p>
                  </div>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="py-[14px] px-[67px] bg-[#F23581] rounded-[40px]"
              >
                <p className="text-2xl text-white text-nowrap">
                  Request Collaboration
                </p>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="flex flex-col lg:hidden px-5 gap-3">
        <div className="flex flex-col   pt-2 ">
          <div className="flex space-x-2 items-center">
            <p className="text-secondary text-sm truncate line-clamp-2 text-wrap w-2/3">
              {user?.bio}
            </p>
          </div>
          <div className="flex w-2/3 h-[1px] bg-secondary/20" />
          <div className="flex gap-4 items-center pt-2">
            <div className="flex gap-1 items-center">
              <LocationIcon color="#F23581" />
              <h1 className="text-white font-bold">{user?.location}</h1>
            </div>
            <div className="mr-2 flex items-center gap-1">
              <IconStar width={14} height={14} color="#F23581" />
              <h1 className="text-white font-bold ">{user?.review}</h1>
            </div>
            <TagList tags={user?.tags} />
          </div>

          <div className="flex gap-1 pt-2">
            <a
              target="_blank"
              href={`https://x.com/${user?.twitterInfo?.username}`}
              className="flex items-center space-x-1 cursor-pointer"
            >
              <IconTwitter />
              <p className="text-white">{user?.twitterInfo?.username}</p>
            </a>

            {/* <a
              target="_blank"
              href={`https://x.com/${user?.twitterInfo?.username}`}
              className="flex items-center space-x-1 cursor-pointer"
            >
              <TelegramIcon />
              <p className="text-white">{user?.twitterInfo?.username}</p>
            </a> */}
          </div>
        </div>

        <div className="flex   flex-col gap-8">
          <div className="flex  gap-8">
            <div>
              <p className="text-nowrap">X Followers</p>
              <p className="text-2xl text-[#82EBFF]">12,314</p>
            </div>
            <Divider
              sx={{
                width: "0.5px",
                height: "76px",
                backgroundColor: "#FFFFFF",
              }}
            />
            <div>
              <p className="text-nowrap">Shill Score</p>
              <div className="flex gap-1 items-center justify-center">
                <IconThunder />
                <p className="text-2xl text-[#82EBFF]">12,314</p>
              </div>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="py-3 max-w-[300px] text-center bg-[#F23581] rounded-[40px]"
          >
            <p className="text-xl text-white text-nowrap">
              Request Collaboration
            </p>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
