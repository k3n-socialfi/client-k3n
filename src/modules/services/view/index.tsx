"use client";

import {
  IconChevronDown,
  IconFilter,
  IconPointProfile,
  IconReset,
  IconSearch,
} from "@/assets/icons";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import {} from '@/constant/data'
import Image from "next/image";
import {trendingKols7DData} from '@/constant/dataMockUserTrending';
import { IMAGES } from "@/constant";
import StarRating from "@/components/StarRating";
import TagList from "@/components/TagList";
import Link from "next/link";

export default function Services() {
  const { dataServices, isLoading, dataPopularServices } = useServicesContext();

  return (
    <section className="text-white">
      <div className="w-full space-y-4 h-full">
        <h1 className="text-[50px] font-bold">Top KOLs</h1>
        <div className="grid grid-cols-12 gap-4 min-w-full">
          {trendingKols7DData.users.slice(0,9).map((item,index) => (
            <Link
              href={`/profile/${item?.username}`}
              className="col-span-4 flex bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-md w-full border-[1px] border-gray-100/10 items-center justify-between shadow shadow-gray-100/10 px-4 py-2 hover:scale-[102%] transition-all duration-200" key={item?.userId}>
              <div className="flex items-center gap-4">
                <h1 className="font-bold">{index}</h1>
                <div className="flex gap-4">
                  <Image src={item?.twitterInfo?.avatar || IMAGES} alt="avatar" height={100} width={100} objectFit="cover" className="rounded-full"/>
                  <div className="flex flex-col items-start justify-center">
                    <h1 className="font-bold text-xl">{item?.fullName}</h1>
                    <StarRating rating={item?.review} size="text-3xl"/>
                    <TagList tags={item?.tags}/>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <IconPointProfile /> {item?.twitterInfo?.totalPoints}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="pt-20">
        <div className="w-full space-y-4 h-full">
          <h1 className="text-[50px] font-bold">Services</h1>
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

