import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ShopLayouts from "../layouts/ShopLayouts";
import ProductDetailsLayout from "../layouts/ProductDetailsLayout";

import ShoppingCart from "../pages/ShoppingCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/shopLayouts",
        element: <ShopLayouts></ShopLayouts>,
    },
 {
  path: "/ProductDetailsLayout",
  element: <ProductDetailsLayout />,
  children: [
    {
      path: "ShoppingCart",
      element: <ShoppingCart />
    },
  ],
},
]);

export default router;