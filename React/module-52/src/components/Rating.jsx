const Rating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 text-yellow-500"
        >
          <path d="M12 .587l3.668 7.455 8.214 1.192-5.932 5.779 1.4 8.178-7.35-3.863-7.348 3.863 1.4-8.178-5.932-5.779 8.214-1.192z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 text-yellow-500"
        >
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="gray" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGrad)"
            d="M12 .587l3.668 7.455 8.214 1.192-5.932 5.779 1.4 8.178-7.35-3.863-7.348 3.863 1.4-8.178-5.932-5.779 8.214-1.192z"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="gray"
          viewBox="0 0 24 24"
          className="w-5 h-5 text-gray-400"
        >
          <path d="M12 .587l3.668 7.455 8.214 1.192-5.932 5.779 1.4 8.178-7.35-3.863-7.348 3.863 1.4-8.178-5.932-5.779 8.214-1.192z" />
        </svg>
      ))}
    </div>
  );
};
export default Rating;
