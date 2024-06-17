import { IconTop1, IconTop2, IconTop3 } from "@/assets/icons";
import { ITrendingProjects } from "@/interface/trendingProjects.interface";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function TrendingProjects({ project }: { project: ITrendingProjects }) {
  const { name, symbol, thumb, score, coinId, slug } = project;
  const rankChange = Math.floor(Math.random() * 41) - 10;

  const rankChangeStyle = {
    highest: "text--500 text-xs",
    positive: "text-green-500 text-xs",
    medium: "text-cyan-500 text-xs",
    warning: "text-yellow-500 text-xs",
    negative: "text-red-500 text-xs",
    neutral: "text-gray-500 text-xs",
  };

  const getRankChangeStyle = () => {
    if (rankChange > 0) return rankChangeStyle.positive;
    if (rankChange < 0) return rankChangeStyle.negative;
    return rankChangeStyle.neutral;
  };

  return (
    <motion.tr
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        delay: score * 0.1,
      }}
      viewport={{ once: true }}
      className={
        score === 0
          ? "bg-darkblack-200/50 group hover:bg-darkblack-100 transition-all duration-300 flex items-center justify-center"
          : score === 1
          ? "bg-darkblack-300/50 group hover:bg-darkblack-100 transition-all duration-300 flex items-center justify-center"
          : score === 2
          ? "bg-darkblack-400/50 group hover:bg-darkblack-100 transition-all duration-300 flex items-center justify-center"
          : score % 2 === 0
          ? "bg-darkblack-500/50 group hover:bg-darkblack-100 transition-all duration-300 flex items-center justify-center"
          : "hover:bg-darkblack-100 transition-all group duration-300 flex items-center justify-center"
      }
    >
      <td className="whitespace-nowrap p-4 text-sm font-medium rounded-l-lg text-white max-w-[100px]">
        <div className="flex items-center justify-between gap-2">
          <p className={`${getRankChangeStyle()}`}>
            {rankChange > 0
              ? `▲ ${rankChange + Math.floor(Math.random() * 31) - 10}`
              : rankChange < 0
              ? `▼ ${
                  Math.abs(rankChange) + Math.floor(Math.random() * 31) - 10
                }`
              : "="}
          </p>
          <div className="flex w-6 h-6 items-center justify-center">
            {score === 0 && <IconTop1 size={24} />}
            {score === 1 && <IconTop2 size={24} />}
            {score === 2 && <IconTop3 size={24} />}
            {score !== 0 && score !== 1 && score !== 2 && score + 1}
          </div>
        </div>
      </td>
      <td className="py-4 text-sm text-gray-500 w-full">
        <div className="flex items-center gap-5">
          <Link
            href={`/profile/${slug}`}
            className="relative w-[40px] h-[40px] md:w-[64px] lg:h-[64px] group-hover:w-[80px] group-hover:h-[80px] transition-all duration-300"
          >
            <Image
              className="rounded-lg"
              src={thumb as string}
              alt="project logo"
              fill
              style={{ objectFit: "cover" }}
            />
          </Link>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg text-white flex gap-1 items-center truncate">
              {name}
            </h4>
            <div className="flex items-center space-x-2">
              <span className="text-secondary">{symbol}</span>
              <p className="text-white/70">|</p>
              <div className="flex items-center space-x-2 bg-darkblack-600 border-[1px] border-white/30 shadow-md shadow-gray-100/10 group-hover:bg-primary/20 group-hover:text-white rounded-full px-1 lg:px-2 lg:py-1 text-primary">
                <span>#{coinId}</span>
                <p className="hidden md:flex">Mentioned</p>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap py-4 text-sm text-gray-500 pr-4">
        <Link
          href={"#"}
          className={`transition duration-300 ease-in-out font-semibold text-white py-3 flex items-center justify-center rounded-xl`}
        >
          <p className={`${getRankChangeStyle()}`}>
            {rankChange > 0
              ? `▲ ${rankChange + Math.floor(Math.random() * 31)}%`
              : rankChange < 0
              ? `▼ ${Math.abs(rankChange) + Math.floor(Math.random() * 31)}%`
              : "="}
          </p>
        </Link>
      </td>
    </motion.tr>
  );
}

export default TrendingProjects;
