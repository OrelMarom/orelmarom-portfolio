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

export function TabsContent({ value, children }) {
  const { activeTab } = useContext(TabsContext);

  return (
    <AnimatePresence mode="wait">
      {activeTab === value && (
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
          className="mt-4"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
