import { PointIcon } from "@/assets/icons"
import StarRating from "@/components/StarRating"
import TagList from "@/components/TagList"
import { IMAGES } from "@/constant"
import { formatNumberToK } from "@/utils"
import Image from "next/image"

const ServiceCard = ({service}: any) => {
  return (
    <div className="flex col-span-1 min-w-full h-[370px] overflow-hidden bg-darkblack-500 hover:bg-darkblack-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-md relative border-[1px] border-gray-100/10 shadow-lg shadow-gray-500/10">
      <div className="flex w-full h-1/2 aspect-video">
        <Image src={service?.image ?? IMAGES} alt="service image" width={1920} height={1080} className="object-cover"/>
      </div>
      <div className="w-full absolute bg-darkblack-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 h-[70px] bottom-1/2 px-2">
        <div className="flex items-center w-full justify-between h-full gap-2">
          <div className="flex">
            <div className="w-[50px] h-[50px]">
              <Image src={service?.creatorInfo?.twitterInfo?.avatar ?? IMAGES} alt="service image" width={50} height={50} className="object-cover rounded-full"/>
            </div>
            <div className="flex flex-col items-start">
              {service?.creatorInfo?.fullName}
              <StarRating rating={service?.creatorInfo?.review} size="text-2xl"/>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <PointIcon />
            <h1>{service?.creatorInfo?.twitterInfo?.totalPoints}</h1>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 pt-4 w-full px-2">
        <TagList tags={service?.creatorInfo?.tags}/>
        <div className="px-2 pt-2 ">
          <h1 className="text-xl font-bold text-secondary">{service?.projectName}</h1>
          <span>{service?.jobDescription}</span>
          <div className="flex w-full items-center justify-between pt-4">
            <h3 className="font-bold text-2xl">
              ${formatNumberToK(service?.price)}
            </h3>
            <button className="bg-primary border-[1px] border-gray-100/10 font-bold hover:scale-105 px-4 py-2 rounded-full transition-all duration-200">
              Make an Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
