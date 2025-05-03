import { createBrowserRouter } from "react-router-dom";
import Category from "../app/category/Category";
import AddUser from "../app/user/AddUser";
import User from "../app/user/User";
import Dashboard from "../app/dashboard/Dashboard";
import Order from "../app/order/Order";
import AddProduct from "../app/product/AddProduct";
import Product from "../app/product/Product";
import { Layout } from "../common/layout";
import UserProfile from "../app/user/UserProfile";

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
      {
        path: "/user",
        Component: User,
      },
      {
        path: "/add-user",
        Component: AddUser,
      },
      {
        path: "/order",
        Component: Order,
      },
      {
        path: "/user/:userId",
        Component: UserProfile,
      },
    ],
  },
]);
