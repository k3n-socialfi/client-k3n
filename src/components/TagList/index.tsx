import { colorMap } from '@/constant/tagColor';
import React from 'react';
import {motion} from 'framer-motion'

interface TagProps {
  tag?: string; // Cho phép tag là undefined
  colorMap: { [tag: string]: { background: string; text: string } };
}

function Tag({ tag, colorMap }: TagProps) {
  const tagColors = tag ? colorMap[tag] : getRandomColor(colorMap); // Lấy màu từ colorMap hoặc ngẫu nhiên
  const backgroundColor = tagColors?.background || 'bg-gray-200';
  const textColor = tagColors?.text || 'text-black';

  return (
    <div
      className={`inline-block px-2 py-[1px] rounded-full text-sm font-semibold ${backgroundColor} mx-1 ${textColor} hover:bg-opacity-70`}
    >
      {tag || 'Random'} {/* Hiển thị tag hoặc "Random" nếu tag là undefined */}
    </div>
  );
}

// Hàm lấy màu ngẫu nhiên từ colorMap
function getRandomColor(colorMap: { [tag: string]: { background: string; text: string } }) {
  const keys = Object.keys(colorMap);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return colorMap[keys[randomIndex]];
}

interface TagListProps {
  tags: string[];
}

function TagList({ tags }: TagListProps) {
  return (
    <div className="flex">
      {tags.length === 0
      ? <Tag colorMap={colorMap} /> // Render Tag với tag là undefined để chọn màu ngẫu nhiên
      : tags.map((tag, index) => (
      tag && (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          duration: 2,
          delay: index * 0.4
        }}
        key={index}
      >
        <Tag key={index} tag={tag} colorMap={colorMap} />
      </motion.div>
      )
      ))}
    </div>
  );
}

export default TagList;
