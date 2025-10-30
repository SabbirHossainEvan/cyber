import React from "react";
import { motion } from "framer-motion";
import playStation from '../assets/PlayStation.png';
import headPhone from '../assets/hero__gnfk5g59t0qe_xlarge_2x 1@2x.png';
import game from '../assets/image 36.png';
import macBook from '../assets/MacBook Pro 14.png';

const ProductShowcase = () => {
    return (
        <section className="bg-white text-gray-900 mt-10">
            <div className="grid md:grid-cols-2">
                <div>
                    <div className="">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white  flex flex-col md:flex-row items-center justify-between h-full p-5 md:p-0 md:h-full"
                        >
                            <img src={playStation} alt="Playstation 5" className="w-1/2 md:w-3/5" />
                            <div className="md:ml-6 mt-6 md:mt-0">
                                <h2 className="text-5xl font-medium mb-2 ">Playstation 5</h2>
                                <p className="text-gray-600 mt-3">
                                    Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                                    will redefine your PlayStation experience.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-2">
                        {/* AirPods Max */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-gray-100 flex flex-col md:flex-row items-center justify-between"
                        >
                            <img src={headPhone} alt="AirPods Max" className="w-1/2 md:w-1/3" />
                            <div className="md:ml-6 mt-6 md:mt-0 p-2 md:p-0">
                                <h2 className="text-2xl md:text-3xl text-gray-700">
                                    Apple <br />AirPods <br /><span className="font-bold text-black">Max</span>
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    Computational audio. <br />Listen, it’s powerful.
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision Pro */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-black text-white flex flex-col md:flex-row items-center justify-between"
                        >
                            <div className="md:ml-6 mt-6 p-2 md:p-0 md:mt-0">
                                <h2 className="text-2xl md:text-3xl">
                                    Apple <br />Vision<span className="font-bold">Pro</span>
                                </h2>
                                <p className="text-gray-400 mt-2">
                                    An immersive way to <br />experience <br />entertainment.
                                </p>
                            </div>
                            <img src={game} alt="Vision Pro" className="w-1/2 md:w-1/3" />
                        </motion.div>


                    </div>
                </div>
                {/* Playstation 5 */}


                {/* Macbook Air */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-gray-100 flex flex-col md:flex-row items-center justify-between p-4"
                >
                    <div className="md:ml-6 mt-6 md:mt-0 ">
                        <h2 className="text-6xl mb-2 ">Macbook <br /><span className="text-black font-bold">Air</span></h2>
                        <p className="text-gray-600 mb-4  p-2">
                            The new 15-inch MacBook Air makes room for more of what you love
                            with a spacious Liquid Retina display.
                        </p>
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "#111",
                                color: "#fff",
                            }}
                            className="px-5 py-2 border border-gray-800 rounded-md font-semibold transition"
                        >
                            Shop Now
                        </motion.button>
                    </div>
                    <img src={macBook} alt="MacBook Air" className="w-1/2 md:w-1/3 mt-5" />
                </motion.div>
            </div>
        </section>
    );
};

export default ProductShowcase;
