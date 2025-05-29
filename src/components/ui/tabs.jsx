import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

const TabsContext = createContext();

export function Tabs({ defaultValue, children }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, className = "" }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 border-b-2 font-medium transition-all duration-200
        ${
          isActive
            ? "border-black text-black"
            : "border-transparent text-gray-500 hover:text-black"
        }
        ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, image }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) return null;

  return (
    <div className="mt-4 flex flex-col md:flex-row gap-6 items-start">
      {/* Image section do NOT animate */}
      <img
        src={image}
        alt={`${value} icon`}
        className="h-[250px] w-auto object-cover rounded-full shrink-0"
      />

      {/* Text section do animate */}
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={false}
          transition={{
            duration: 0.8,
            ease: [0.1, 0.05, 0.55, 0.95],
            delay: 0.2,
          }}
          className="flex-1"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// export function TabsContent({ value, children }) {
//   const { activeTab } = useContext(TabsContext);

//   return (
//     <AnimatePresence mode="wait">
//       {activeTab === value && (
//         <motion.div
//           key={value}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={false}
//           transition={{
//             duration: 0.8,
//             ease: [0.1, 0.05, 0.55, 0.95],
//             delay: 0.2,
//           }}
//           className="mt-4"
//         >
//           {children}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
