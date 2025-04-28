import { createBrowserRouter } from "react-router-dom";
import Product from "../app/product/Product";
import Dashboard from "../app/dashboard/Dashboard";
import AddProduct from "../app/product/AddProduct";
import Category from "../app/product/Category";
import Layout from "../common/Layout";

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
