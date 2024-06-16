import { useState, useEffect } from 'react';
import { formatDistanceToNow, parseISO, differenceInDays, format } from 'date-fns';

const parseDate = (timestamp:any) => {
  try {
    return new Date(Date.parse(timestamp));
  } catch (e) {
    console.error("Invalid date format:", timestamp);
    return null;
  }
};

const TimeAgo = ({ timestamp }:any) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const update = () => {
      const date = parseDate(timestamp);
      if (date) {
        const now = new Date();
        const daysDifference = differenceInDays(now, date);
        if (daysDifference > 2) {
          setTimeAgo(format(date, 'PPpp')); // Hiển thị thời gian chính xác nếu lớn hơn 2 ngày
        } else {
          const timePeriod = formatDistanceToNow(date, { addSuffix: true });
          setTimeAgo(timePeriod);
        }
      } else {
        setTimeAgo('Invalid date');
      }
    };

    update();

    const intervalId = setInterval(update, 60000); // Cập nhật mỗi phút

    return () => clearInterval(intervalId); // Clear interval khi component bị unmount
  }, [timestamp]);

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
