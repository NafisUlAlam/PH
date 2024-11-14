import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const [news, setNews] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setNews(data.data);
  }, [data.data]);
  //   const { categoryId } = useParams();
  //   console.log(categoryId);
  //   useEffect(() => {
  //     fetch(
  //       `https://openapi.programming-hero.com/api/news/category/${categoryId}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setNews(data))
  //       .catch((err) => console.log(err));
  //   }, [categoryId]);
  return (
    <div>
      <h2 className="font-bold mb-3">{news.length} Dragon News Home</h2>
      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
