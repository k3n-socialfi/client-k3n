import Banner from "@/assets/images/Banner.png";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomerInfo from "./CustomerInfo";
import { IconSort } from "@/assets/icons";
import { useState } from "react";

const tableTitle = [
  {
    name: "Rank",
    icon: false,
  },
  {
    name: "KOL",
    icon: false,
  },
  {
    name: "Type",
    icon: false,
  },
  {
    name: "Mentioned Project",
    icon: false,
  },
  {
    name: "#X Followers",
    icon: true,
  },
  {
    name: "Shill Score",
    icon: true,
  },
  {
    name: "7D%",
    icon: false,
  },
  {
    name: "Chains",
    icon: false,
  },
  {
    name: "Tags",
    icon: false,
  },
];

function UserTab({ pageSize, users }: { pageSize: number; users: any[] }) {
  const [sortValue, setSortValue] = useState<-1 | 1>(-1);

  if (users?.length === 0)
    return (
      <div className="relative flex items-center justify-center w-full h-screen">
        <Image src={Banner} alt="banner" fill style={{ objectFit: "cover" }} />
        <h1 className="z-10 text-white font-bold text-2xl">Data are empty!</h1>
      </div>
    );

  return (
    <div className="table-content w-full overflow-x-auto">
      <table className="w-full">
        <tbody>
          <tr className="border-b border-bgray-300 dark:border-darkblack-400 items-center">
            {tableTitle.map((item, i) => (
              <td className="px-6 py-2 xl:px-0 " key={i}>
                <div className="flex w-full items-center space-x-2 truncate">
                  <span className="text-base font-medium text-primary truncate text-start">
                    {item.name}
                  </span>
                  {item.icon && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconSort color={"#f0f0f0"} />
                    </motion.button>
                  )}
                </div>
              </td>
            ))}
          </tr>
          {users?.map((user, index) =>
            pageSize
              ? index + 1 <= pageSize && (
                  <CustomerInfo
                    key={user?.userId}
                    rank={index} 
                    previousRank={user?.twitterInfo.previousRank}
                    imgKol={user?.twitterInfo.avatar}
                    typeKol={user?.type}
                    location={user?.location}
                    nameKol={user?.twitterInfo?.fullName}
                    mentionedProject={user.mentionedProjects}
                    followers={user?.twitterInfo.followers}
                    shillScore={user?.twitterInfo?.totalPoints}
                    change={
                      user?.twitterInfo?.previousRank +
                      Math.floor(Math.random() * 41) -
                      10
                    }
                    chain={user?.projectChain}
                    tags={user?.tags}
                    username={user?.username}
                  />
                )
              : index < 3 && (
                  <CustomerInfo
                    key={user?.userId}
                    rank={index}
                    previousRank={user?.twitterInfo.previousRank}
                    imgKol={user?.twitterInfo.avatar}
                    typeKol={user?.type}
                    location={user?.location}
                    nameKol={user?.socialProfiles?.username}
                    mentionedProject={user.mentionedProjects}
                    followers={user?.twitterInfo.followers}
                    shillScore={user?.twitterInfo?.totalPoints}
                    change={
                      user?.twitterInfo?.previousRank +
                      Math.floor(Math.random() * 41) -
                      10
                    }
                    chain={user?.projectChain}
                    tags={user?.tags}
                    username={user?.username}
                  />
                ),
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTab;
