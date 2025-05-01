import { createBrowserRouter } from "react-router-dom";
import Product from "../app/product/Product";
import Dashboard from "../app/dashboard/Dashboard";
import AddProduct from "../app/product/AddProduct";
import Category from "../app/category/Category";
import { Layout } from "../common/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/product",
        Component: Product,
      },
      {
        path: "/add-product",
        Component: AddProduct,
      },
      {
        path: "/category",
        Component: Category,
      },
    ],
  },
]);
