import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ShopLayouts from "../layouts/ShopLayouts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/shopLayouts",
        element: <ShopLayouts></ShopLayouts>
    },
]);

export default router;