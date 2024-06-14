import React from 'react';
import { motion } from 'framer-motion';
import { colorMap } from '@/constant/tagColor';

interface ColorMap {
  [key: string]: {
    background: string;
    text: string;
  };
}

interface TagProps {
  tag: string;
  colorMap: ColorMap;
}

interface TagListProps {
  tags: any[];
}

const Tag: React.FC<TagProps> = ({ tag, colorMap }) => {
  const tagColors = colorMap[tag];
  const backgroundColor = tagColors?.background || 'bg-secondary';
  const textColor = tagColors?.text || 'text-black';

  // Log the colors for debugging
  console.log(`Tag: ${tag}, Background: ${backgroundColor}, Text: ${textColor}`);

  return (
    <div
      className={`inline-block px-2 py-[1px] rounded-full text-sm font-semibold mx-1 ${backgroundColor} ${textColor} hover:bg-opacity-70`}
    >
      {tag}
    </div>
  );
};

const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <button className="flex cursor-pointer">
      {tags?.length === 0 ? (
        <Tag tag={"Other"} colorMap={colorMap} />
      ) : (
        tags?.map((tag, index) => (
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
          )
        ))
      )}
    </button>
  );
};

export default TagList;
