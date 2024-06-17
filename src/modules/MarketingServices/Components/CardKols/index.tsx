import { IconStarKols } from "@/assets/icons";
import PointIcon from "@/assets/icons/PointIcon";
import TagList from "@/components/TagList";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface IPropsCardKosl {
  image: string | undefined;
  projectName: string | undefined;
  price: string | undefined;
  paymentMethod: string;
  jobId: string | undefined;
  tags: string[] | undefined;
  projectDescription: string | undefined;
  reviews: number;
  creatorInfo: IUserKOL;
}
export default function CardKols({
  image,
  paymentMethod,
  price,
  projectName,
  jobId,
  tags,
  projectDescription,
  reviews = 0,
  creatorInfo,
}: IPropsCardKosl) {
  const router = useRouter();
  const IMG2 =
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="h-[370px] w-full max-w-[350px] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] duration-200 flex flex-col rounded-lg gap-3 bg-[#191D24] overflow-hidden">
      {/* Image */}
      <div
        className={`relative w-full aspect-video h-full min-h-[169px] max-h-[169px] rounded-[4px] border-b border-[#FFFFFF66] overflow-hidden`}
      >
        <Image src={image ?? IMG2} alt="job image" width={300} height={169} />
        <div className="absolute w-full bg-gradient-to-t from-[#000000] to-transparent h-full bottom-0 left-0 flex items-end text-white">
          <div className="px-3 py-[10px] w-full flex justify-between items-center">
            <div className="flex gap-[10px] items-center">
              {/* Avatar */}
              <Image
                src={creatorInfo?.twitterInfo.avatar ?? IMG2}
                width={40}
                height={40}
                className="border border-[#F23581] rounded-full"
                alt="avatar"
              />
              <div className="flex flex-col font-semibold">
                <p>{creatorInfo?.fullName}</p>
                <div className="flex gap-1 items-center">
                  <IconStarKols />
                  <p className="text-[#A7A7A7] text-[10px]">{reviews}</p>
                </div>
              </div>
            </div>

            {/* Shill Score */}
            <div className="flex items-center gap-[2px] font-semibold">
              <PointIcon />
              <p>{creatorInfo?.twitterInfo.totalPoints}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-2 h-full">
        {/* Header */}
        <div className="px-3 flex items-center justify-between">
          <TagList tags={tags} />
          <Link
            href={""}
            className="text-[#82EBFF] text-[10px] hover:underline text-nowrap"
          >
            View detail
          </Link>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-2 pt-2 px-3 pb-5 h-full">
          {/* Card Title */}
          <h3 className="text-[#82EBFF] text-2xl">{projectName}</h3>

          {/* Card description */}
          <div className="text-[14px] line-clamp-2 w-full text-white h-full mb-auto">
            {projectDescription}
          </div>

          {/* Footer */}
          <div className="flex justify-between ">
            <p className="font-bold text-2xl text-white truncate max-w-28">
              ${price}
            </p>
            <button
              onClick={() => router.push(`/services/payment/${jobId}`)}
              className="rounded-full hover:bg-[#F23581CC] bg-[#F23581] font-bold text-[12px] py-2 px-4 text-white"
            >
              Make an offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
