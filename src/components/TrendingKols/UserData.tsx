

import {motion} from 'framer-motion'
import { IconStar, PointIcon, Top1Icon, Top2Icon, Top3Icon, VerifyIcon } from "../../assets/icons";
import Link from 'next/link';
import { ITrendingKols } from '@/interface/trendingKols.interface';

function UserData({ userInfo, index }:{userInfo: ITrendingKols, index: number}) {
 
  const rankChange = userInfo.twitterInfo!.previous7DRank   - index;

  const rankChangeStyle = {
    highest: "text--500 text-xs", 
    positive: "text-green-500 text-xs", 
    medium: "text-cyan-500 text-xs", 
    warning: "text-yellow-500 text-xs", 
    negative: "text-red-500 text-xs", 
    neutral: "text-gray-500 text-xs"
  };

  const getRankChangeStyle = () => {
    if (rankChange > 0) return rankChangeStyle.positive;
    if (rankChange < 0) return rankChangeStyle.negative;
    return rankChangeStyle.neutral;
  };

  const getRankIcon = (index:any) => {
    switch (index) {
      case 0:
        return <Top1Icon />;
      case 1:
        return <Top2Icon />;
      case 2:
        return <Top3Icon />;
      default:
        return index + 1;
    }
  };


  return (
    <motion.tr
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{
        duration: 0.2,
        delay: index * 0.1
      }}
      viewport={{once: true}}
      className={
        index === 0 ? "bg-darkblack-200/50 group hover:bg-darkblack-100 transition-all duration-300" :
          index === 1 ? "bg-darkblack-300/50 group hover:bg-darkblack-100 transition-all duration-300" :
          index === 2 ? "bg-darkblack-400/50 group hover:bg-darkblack-100 transition-all duration-300" :
          index % 2 === 0 ? "bg-darkblack-500/50 group hover:bg-darkblack-100 transition-all duration-300" : "group hover:bg-darkblack-100 transition-all duration-300"
      }
    >
      <td className="whitespace-nowrap p-4 text-sm font-medium rounded-l-lg text-white w-[100px]">
        <div className="flex items-center justify-between gap-2">
          <p className={`${getRankChangeStyle()}`}> 
            {rankChange > 0 ? `▲ ${rankChange}` : rankChange < 0 ? `▼ ${Math.abs(rankChange)}` : "="}
          </p>
          <div className='flex items-center justify-center w-8 h-8 flex-shrink-0'>
          {getRankIcon(index)}

          </div>
        </div>
      </td>
      <td className="py-4 text-sm text-gray-500 w-auto lg:w-[800px]">
        <div className="flex items-center gap-5">
          <Link href={`/user/${userInfo?.twitterInfo?.username}`} className="w-[64px] h-[64px] group-hover:w-[80px] group-hover:h-[80px] transition-all duration-300">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={userInfo?.twitterInfo?.avatar ?? "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg"}
              alt=""
            />
          </Link>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg text-white flex gap-1 items-center">
              <p className="truncate max-w-[150px]">
                {userInfo?.fullName}
              </p>
              {userInfo?.twitterInfo?.verificationStatus ? <VerifyIcon width={20} height={19} color="#F23581" />: ""}
            </h4>
            <div className="flex items-center space-x-2">
              <span className="text-secondary">{userInfo?.username}</span>
              <p className="text-white/70">|</p>
              <div className="flex items-center space-x-2">
                <IconStar width={12} height={12} />
                <span className="text-gray-500">{userInfo?.review}</span>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <span className={`bg-darkblack-500 hover:bg-darkblack-300 shadow-md shadow-gray-100/20 text-sm ${
            userInfo?.type === "Experts" ? "text-primary" : 
            userInfo?.type === "KOL" ? "text-green-500" : 
            userInfo?.type === "Celebrities" ? "text-secondary" : 
            userInfo?.type === "Threador" ? "text-portage" : 
            userInfo?.type === "Caller" ? "text-yellow-400" : "text-white"
          } font-medium rounded-lg py-1 px-3`}
        >
          {userInfo?.type}
        </span>
      </td>
      <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">
        <span className={`flex items-center bg-darkblack-500 hover:bg-darkblack-300 shadow-md shadow-gray-100/20 border-[1px] justify-center border-gray-100/10 px-1 py-0.5 md:px-2 md:py-1 rounded-lg text-sm ${
             userInfo.twitterInfo!.totalPoints  >= 750 ? "text-primary" : "text-secondary"
          } font-medium text-am `}
        >
          <PointIcon width={12} height={16} />
          {userInfo?.twitterInfo?.totalPoints}
        </span>
      </td>
      <td className="whitespace-nowrap py-4 text-sm text-gray-500 pr-4">
        <Link
        href={'#'}
          className={`transition duration-300 ease-in-out font-semibold text-white py-3 flex items-center justify-center rounded-xl`}
        >
          <p className={`${getRankChangeStyle()}`}> 
            {rankChange > 0 ? `▲ ${rankChange - Math.floor(Math.random() * 31) - 10}%` : rankChange < 0 ? `▼ ${Math.abs(rankChange) - Math.floor(Math.random() * 31) - 10}%` : "="}
          </p>
        </Link>
      </td>
    </motion.tr>
  );
}

export default UserData;
