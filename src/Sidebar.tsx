import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, ChevronLeft } from "lucide-react"; // Using Lucide icons
import { sections } from "./data/data";
import { useIsMediumScreen } from "./useMedium";

export const Sidebar = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: any;
  setActiveSection: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isMedium = useIsMediumScreen();

  useEffect(() => {
    if (isMedium) {
      setIsOpen(true); // Ensure it's always open on md+ screens
    }
  }, [isMedium]);

  // Close sidebar on outside click (only for small screens)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        !isMedium && // Only apply on small screens
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMedium]);

  return (
    <>
      {!isMedium && (
        <div className="flex gap-4">
          {isOpen && (
            <motion.div
              ref={sidebarRef}
              className="bg-gray-900 flex gap-8 text-white  p-4 transition-all duration-300 fixed left-0  z-[9999] flex-1 w-[80%]"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <div className="flex flex-col justify-between w-full ">
                {Object.entries(sections).map(([key, section]) => (
                  <motion.div
                    key={key}
                    className={`flex items-center space-x-2 p-2 cursor-pointer ${
                      activeSection === key ? "bg-green-800" : ""
                    }`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveSection(key)}
                  >
                    {section.icon}
                    <span>{section.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          <button
            className=" z-50 p-2 bg-green-600 text-white rounded-full shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? <Menu size={24} /> : <ChevronLeft size={24} />}
          </button>
        </div>
      )}
    </>
  );
};
