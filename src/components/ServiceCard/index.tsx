import Link from "next/link";
import { IconPointProfile, IconStar, IconVerify } from "../../assets/icons";
import { formatNumberToK } from "@/utils";
import Image from "next/image";
import TagList from "../TagList";
import StarRating from "../StarRating";
import { IMAGES } from "@/constant";

const ServiceCard = ({service}: any) => {
  return (
    <>
      <Link href={`#`} className="flex flex-col gap-6 group:relative shadow-lg text-white rounded-t-xl overflow-hidden bg-darkblack-500 border-[1px] border-gray-100/10 ">
        <Image src={`${service.image ?? IMAGES}`} alt='avatar'  className="" width={400} height={400}/>
      </Link>
      <div className="p-4 flex flex-col gap-8 overflow-hidden">
        <div className="flex gap-8">
          <div className="w-[80px] h-[80px]">
            <Image src={`${service?.twitterInfo?.avatar ?? IMAGES}`} alt='avatar'  className="rounded-full" width={1920} height={1080}/>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              <h1 className="text-2xl">{service?.creatorInfo?.fullName}</h1>
              {service?.creatorInfo?.twitterInfo?.verificationStatus ? <IconVerify width={20} height={19} color="#F23581" />: ""}
            </div>
            <div className="flex gap-2 items-center">
              <IconPointProfile width={12} height={16} />
              <span className="flex text-xl items-center justify-center">{service?.creatorInfo?.twitterInfo?.totalPoints}</span>
              <div className="w-[0.4px] flex h-full bg-white/50 mx-2"/>
              <IconStar width={14} height={14}/>
              <span className="flex text-xl items-center justify-center">{service?.creatorInfo?.review}</span>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          {service &&
           <TagList tags={service?.tags}/>
          }
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <h1>Offer</h1>
            <span className="text-gray-400">{service?.offers?.length}</span>
          </div>
          <div className="flex flex-col items-center">
            <h1>Avg.Rating</h1>
            <span className="text-gray-400"><StarRating rating={service?.rating}/></span>
          </div>
          <div className="flex flex-col items-center">
            <h1>Price</h1>
            <span className="text-gray-400">${formatNumberToK(service?.price)}</span>
          </div>
        </div>
      </div>
    </>
  )

}

export default ServiceCard
