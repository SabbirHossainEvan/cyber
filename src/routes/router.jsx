import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ShopLayouts from "../layouts/ShopLayouts";
import ProductDetailsLayout from "../layouts/ProductDetailsLayout";

import ShoppingCart from "../pages/ShoppingCart";
import Checkout from "../pages/Checkout";

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
    },
    {
        path: "/ShoppingCart",
        element: <ShoppingCart></ShoppingCart>,
    },
    {
        path: "/checkout",
        element: <Checkout></Checkout>,
    },
]);

export default router;