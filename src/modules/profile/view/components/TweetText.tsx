import { useState } from 'react';

const TweetText = ({ text }:any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const highlightText = (text:any) => {
    const regex = /(@\w+|#\w+|$\w+)/g;
    return text.replace(regex, (match:any) => {
      if (match.startsWith('@')) {
        return `<span style="color: #1DA1F2;">${match}</span>`;
      } else if (match.startsWith('#')) {
        return `<span style="color: #FF4500;">${match}</span>`;
      } else if (match.startsWith('$')) {
        return `<span style="color: #FF4500;">${match}</span>`;
      } else if (match.startsWith('0x')) {
        return `<span style="color: #FF4500;">${match}</span>`;
      } 
      return match;
    });
  };

  const formattedText = highlightText(text);

  return (
    <div className="py-2 flex flex-col items-start">
      <span
        className={`${isExpanded ? '' : 'line-clamp-2'}`}
        dangerouslySetInnerHTML={{ __html: formattedText }}
      ></span>
      <button 
      
      // onClick={handleToggle}
      
      className="mt-1">
        {isExpanded ? 'See less' : 'View all comments'}
      </button>
    </div>
  );
};

export default TweetText;
