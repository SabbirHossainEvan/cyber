import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ShopLayouts from "../layouts/ShopLayouts";
import ProductDetailsLayout from "../layouts/ProductDetailsLayout";

import ShoppingCart from "../pages/ShoppingCart";
import Checkout from "../pages/Checkout";
import AboutLayout from "../layouts/AboutLayout";
import Contact from "../layouts/Contact";

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
    {
        path: "/about",
        element: <AboutLayout></AboutLayout>,
    },
    {
        path: "/contact",
        element: <Contact></Contact>,
    },
]);

export default router;