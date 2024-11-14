import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center p-2 bg-base-200">
      <p className="bg-purple-500 text-white px-3 py-1">latest</p>
      <Marquee className="space-x-10 ">
        <Link to="news">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          praesentium excepturi nesciunt libero rerum? Molestiae, quibusdam
          natus. Placeat, odit dignissimos!
        </Link>
        <Link to="news">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          praesentium excepturi nesciunt libero rerum? Molestiae, quibusdam
          natus. Placeat, odit dignissimos!
        </Link>
        <Link to="news">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          praesentium excepturi nesciunt libero rerum? Molestiae, quibusdam
          natus. Placeat, odit dignissimos!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
