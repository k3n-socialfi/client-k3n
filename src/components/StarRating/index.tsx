const StarRating = ({
  rating,
  size = "text-xl",
}: {
  rating: number;
  size?: string;
}) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-[#F23581]">
            ★
          </span>,
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ☆
          </span>,
        );
      }
    }
    return stars;
  };

  return <div className={`${size} flex items-center`}>{renderStars()}</div>;
};

export default StarRating;