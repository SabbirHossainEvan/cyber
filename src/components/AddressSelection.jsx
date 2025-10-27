import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, X, Plus } from "lucide-react";

const AddressSelection = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "2118 Thornridge",
      label: "HOME",
      address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      phone: "(209) 555-0104",
    },
    {
      id: 2,
      title: "Headoffice",
      label: "OFFICE",
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      phone: "(704) 555-0127",
    },
  ]);

  const [selectedId, setSelectedId] = useState(1);

  const handleDelete = (id) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  const handleAddNew = () => {
    const newAddress = {
      id: Date.now(),
      title: "New Address",
      label: "OTHER",
      address: "Enter address details...",
      phone: "(000) 000-0000",
    };
    setAddresses([...addresses, newAddress]);
    setSelectedId(newAddress.id);
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 bg-white rounded-2xl "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Step Header */}
      <div className="flex items-center justify-center space-x-10 mb-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 text-black font-medium ">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white text-sm">
              1
            </span>
            <span>Address</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-gray-400">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-sm">
              2
            </span>
            <span>Shipping</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-gray-400">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-sm">
              3
            </span>
            <span>Payment</span>
          </div>
        </div>
      </div>

      {/* Select Address */}
      <h3 className="text-lg font-semibold mb-5 mt-20">Select Address</h3>

      <AnimatePresence>
        {addresses.map((address) => (
          <motion.div
            key={address.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            whileHover={{ scale: 1.01 }}
            className={`flex justify-between items-start p-4 mb-4 rounded-xl border transition-all ${
              selectedId === address.id
                ? "border-black bg-gray-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-start gap-3">
              <input
                type="radio"
                checked={selectedId === address.id}
                onChange={() => setSelectedId(address.id)}
                className="mt-1 cursor-pointer accent-black w-5 h-5"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-gray-800">
                    {address.title}
                  </h4>
                  <span className="text-xs bg-black text-white px-2 py-0.5 rounded-md">
                    {address.label}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{address.address}</p>
                <p className="text-sm text-gray-500">{address.phone}</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Pencil className="w-4 h-4 text-gray-500 hover:text-black cursor-pointer" />
              <X
                className="w-4 h-4 text-gray-500 hover:text-red-500 cursor-pointer"
                onClick={() => handleDelete(address.id)}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Add New Address */}
      <motion.div
        className="flex justify-center items-center mt-6 border-t border-dashed border-gray-300 pt-4 cursor-pointer hover:text-black text-gray-500"
        whileHover={{ scale: 1.05 }}
        onClick={handleAddNew}
      >
        <Plus className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">Add New Address</span>
      </motion.div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-8 mb-20">
        <button className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100 transition-all">
          Back
        </button>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-black text-white px-6 py-2 rounded-lg shadow hover:shadow-md transition-all"
        >
          Next
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AddressSelection;
