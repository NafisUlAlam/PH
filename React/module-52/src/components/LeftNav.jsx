import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  //const { data } = useLoaderData();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="font-semibold mb-3">All category {categories.length}</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink
            to={`category/${category.category_id}`}
            key={category.category_id}
            className="btn"
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
