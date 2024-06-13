const StarRating = ({ rating, size }: {rating: number, size?: string}) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className={`${size ?? size} flex`}>{renderStars()}</div>
  );
};

export default StarRating;
