import React from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const products = [
    {
        id: 1,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        price: "$900",
        image: "/public/newArrivalSectionImage/Iphone 14 pro 1 (1).png",
        liked: false,
    },
    {
        id: 2,
        name: "Blackmagic Pocket Cinema Camera 6k",
        price: "$2535",
        image: "/public/newArrivalSectionImage/chemara.png",
        liked: false,
    },
    {
        id: 3,
        name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
        price: "$399",
        image: "/public/newArrivalSectionImage/Iphone 14 pro 1 (2).png",

        liked: false,
    },
    {
        id: 4,
        name: "AirPods Max Silver Starlight Aluminium",
        price: "$549",

        image: "/public/newArrivalSectionImage/Iphone 14 pro 1 (5).png",
        liked: false,
    },
    {
        id: 5,
        name: "Samsung Galaxy Watch6 Classic 47mm Black",
        price: "$369",
        image: "/public/newArrivalSectionImage/watch.png",
        liked: false,
    },
    {
        id: 6,
        name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
        price: "$1799",
        image: "/public/newArrivalSectionImage/Iphone 14 pro 1 (3).png",
        liked: true,
    },
    {
        id: 7,
        name: "Galaxy Buds FE Graphite",
        price: "$99.99",
        image: "/public/newArrivalSectionImage/Iphone 14 pro 1 (4).png",

        liked: false,
    },
    {
        id: 8,
        name: "Apple iPad 9 10.2\" 64GB Wi-Fi Silver (MK2L3) 2021",
        price: "$398",

        image: "/public/newArrivalSectionImage/Iphone 14 pro 1 (6).png",
        liked: false,
    },
];

const NewArrivalSection = () => {
    return (
        <section className=" py-12 bg-white max-w-6xl mx-auto px-6">
            <div className="flex space-x-6 border-b mb-8 text-gray-500 font-medium">
                <button className="text-black border-b-2 border-black pb-2">New Arrival</button>
                <button>Bestseller</button>
                <button>Featured Products</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product, i) => (
                    <motion.div
                        key={product.id}
                        className="relative bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition">
                            {product.liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
                        </button>

                        <img src={product.image} alt={product.name} className="mx-auto mb-4 w-48 h-48 " />
                        <h3 className="text-sm text-center text-gray-700 font-medium mb-2">{product.name}</h3>
                        <p className="text-center text-lg font-semibold mb-4">{product.price}</p>
                        <div className="flex justify-center">
                            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                                Buy Now
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default NewArrivalSection;
