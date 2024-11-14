import { FaRegEye, FaShareAlt } from "react-icons/fa";
import Rating from "./Rating";

const NewsCard = (props = {}) => {
  const { singleNews } = props || {};
  console.log(singleNews);
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={singleNews.author.img}
          className="w-10 h-10 rounded-full mr-3"
          alt=""
        />
        <div>
          <p className="font-semibold">{singleNews.author.name}</p>
          <p>{singleNews.author.published_date}</p>
        </div>
        <div className="ml-auto">
          <FaShareAlt className="text-gray-600"></FaShareAlt>
        </div>
      </div>
      <img
        src={singleNews.thumbnail_url}
        className="w-full object-contain rounded-lg mb-4"
        alt=""
      />
      <p className="text-gray-700 text-sm mb-4">
        {singleNews.details.slice(0, 150)}...{" "}
        <span className="text-primary">Read more</span>
      </p>
      <div className="flex items-center justify-between text-sm">
        <Rating rating={singleNews.rating.number}></Rating>
        <span className="font-semibold mr-auto">
          {singleNews.rating.number}
        </span>
        <div className="flex items-center">
          <FaRegEye className="mr-1"></FaRegEye>
          <span>{singleNews.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
