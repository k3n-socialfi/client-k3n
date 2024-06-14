const StarRating = ({ rating, size }: { rating: number, size?: string }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <span key={i} className="text-yellow-500">
            ★
          </span>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <span key={i} className="relative text-yellow-500">
            <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
              ★
            </span>
            <span className="text-gray-300">
              ☆
            </span>
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ☆
          </span>
        );
      }
    }
    return stars;
  };

  return <div className={`${size ?? ''} flex`}>{renderStars()}</div>;
};

export default StarRating;
