import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const filterData = [
  {
    title: "Brand",
    options: [
      { name: "Apple", count: 110 },
      { name: "Samsung", count: 125 },
      { name: "Xiaomi", count: 68 },
      { name: "Poco", count: 44 },
      { name: "OPPO", count: 36 },
      { name: "Honor", count: 10 },
      { name: "Motorola", count: 34 },
      { name: "Nokia", count: 22 },
    ],
  },
  {
    title: "Battery capacity",
    options: [],
  },
  {
    title: "Screen type",
    options: [],
  },
  {
    title: "Screen diagonal",
    options: [],
  },
  {
    title: "Protection class",
    options: [],
  },
  {
    title: "Built-in memory",
    options: [],
  },
];

export default function SidebarFilter() {
  const [openSection, setOpenSection] = useState("Brand");
  const [checked, setChecked] = useState({});
  const [search, setSearch] = useState("");

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  const toggleCheck = (option) => {
    setChecked((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="w-64 bg-white ">
      {filterData.map((section) => (
        <div key={section.title} className="mb-3">
          {/* Section Header */}
          <button
            onClick={() => toggleSection(section.title)}
            className="flex justify-between items-center w-full text-left font-semibold text-gray-800 py-2 "
          >
            {section.title}
            {openSection === section.title ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {/* Section Content with Animation */}
          <AnimatePresence initial={false}>
            {openSection === section.title && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                {/* Optional Search Bar for Brand */}
                {section.title === "Brand" && (
                  <div className="relative mb-2 mt-5">
                    <Search className="absolute left-2 top-2.5 text-gray-400 " size={16} />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search"
                      className="pl-8 w-full border rounded-lg py-1  text-sm focus:outline-none focus:ring focus:ring-gray-200"
                    />
                  </div>
                )}

                {/* Options */}
                <div className="space-y-1">
                  {section.options
                    .filter((opt) =>
                      opt.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((opt) => (
                      <label
                        key={opt.name}
                        className="flex items-center space-x-2 text-gray-700 text-sm cursor-pointer hover:text-black"
                      >
                        <input
                          type="checkbox"
                          checked={checked[opt.name] || false}
                          onChange={() => toggleCheck(opt.name)}
                          className="accent-black"
                        />
                        <span>
                          {opt.name}{" "}
                          <span className="text-gray-400 text-xs">{opt.count}</span>
                        </span>
                      </label>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="border-b border-gray-200 mt-2"></div>
        </div>
      ))}
    </div>
  );
}
