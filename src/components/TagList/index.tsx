import { colorMap } from '@/constant/tagColor';
import React from 'react';

interface TagProps {
  tag: string;
  colorMap: { [tag: string]: { background: string; text: string } };
}

function Tag({ tag, colorMap }: TagProps) {
  const backgroundColor = colorMap[tag]?.background || 'bg-gray-200';
  const textColor = colorMap[tag]?.text || 'text-black';

  return (
    <div className={`inline-block px-2 py-[1px] rounded-full text-sm font-semibold  ${backgroundColor} mx-1 ${textColor} hover:bg-opacity-70`} >
      {tag}
    </div>
  );
}

interface TagListProps {
  tags: string[];
}

function TagList({ tags}: TagListProps) {
  return (
    <div className="flex">
      {tags.map((tag, index) => (
          tag && <Tag key={index} tag={tag} colorMap={colorMap} />
      ))}
    </div>
  );
}

export default TagList;
