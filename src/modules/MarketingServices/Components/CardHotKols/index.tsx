import { IconStarKols } from "@/assets/icons";
import PointIcon from "@/assets/icons/PointIcon";
import TagList from "@/components/TagList";
import Image from "next/image";
import styled from "styled-components";

interface IPropsCardHotKols {
  number?: number;
  avatar?: string;
  name?: string;
  review?: number;
  tags?: string[];
  score?: number;
}
export default function CardHotKols({
  avatar,
  name,
  number,
  review,
  tags,
  score,
}: IPropsCardHotKols) {
  return (
    <div className="hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] w-[520px] duration-200 flex rounded-[8px] py-4 px-3 bg-[#191D24] items-center gap-2">
      {/* Number */}
      <p className="font-bold text-xl">{number}</p>

      {/* Avatar */}
      <Image
        src={avatar ?? ""}
        alt="user avatar"
        width={56}
        height={56}
        className="rounded-full border border-[#F23581]"
      />
      {/* Content */}
      <div className="flex flex-col flex-grow gap-2 w-full">
        <p className="text-lg font-bold w-full">{name}</p>
        <div className="flex gap-2 items-center">
          <IconStarKols />
          <p className="font-medium">{review}</p>
        </div>
        <TagList tags={tags} />
      </div>
      {/* Point */}
      <div className="flex gap-[2px] items-center">
        <PointIcon size={20} />
        <p className="font-bold">{score ?? 0}</p>
      </div>
    </div>
  );
}
