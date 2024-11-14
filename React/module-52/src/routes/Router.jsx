import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "category/:categoryId",
        element: <CategoryNews></CategoryNews>,
        loader: (e) => {
          //console.log(e);
          return fetch(
            `https://openapi.programming-hero.com/api/news/category/${e.params.categoryId}`
          );
        },
      },
      {
        path: "",
        element: <Navigate to={"/category/1"}></Navigate>,
      },
    ],
  },
  {
    path: "/news",
    element: <h2>News</h2>,
  },
  {
    path: "auth",
    element: <h2>login</h2>,
  },
  {
    path: "*",
    element: <h2>error</h2>,
  },
]);
