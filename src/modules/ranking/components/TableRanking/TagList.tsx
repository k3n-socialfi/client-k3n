import { colorMap } from "@/data/ranking/colorsMap";
import React from "react";
import { motion } from "framer-motion";

function Tag({ tag, colorMap }: { tag?: string; colorMap: any }) {
  const tagColors = tag ? colorMap[tag] : getRandomColor(colorMap);
  const backgroundColor = tagColors?.background || "bg-gray-200";
  const textColor = tagColors?.text || "text-black";

  return (
    <div
      className={`inline-block px-2 py-[1px] rounded-full text-sm font-semibold ${backgroundColor} mx-1 ${textColor} hover:bg-opacity-70`}
    >
      {tag || "Random"}
    </div>
  );
}

// Hàm lấy màu ngẫu nhiên từ colorMap
function getRandomColor(colorMap: string[]) {
  const keys = Object.keys(colorMap);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return colorMap[keys[randomIndex] as any];
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <button className="flex cursor-pointer">
      {tags?.length === 0 ? (
        <Tag colorMap={colorMap} />
      ) : (
        tags?.map(
          (tag: string, index: number) =>
            tag && (
              <motion.div
                initial={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: index * 0.4,
                }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                key={index}
              >
                <Tag key={index} tag={tag} colorMap={colorMap} />
              </motion.div>
            ),
        )
      )}
    </button>
  );
}

export default TagList;
