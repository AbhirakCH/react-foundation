import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Settings, Menu, X, Plus } from "lucide-react";
import { GlassPanel } from "../ui/GlassPanel";
import { cn } from "../../lib/utils";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-surface/50 backdrop-blur-md rounded-lg border border-white/10 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <AnimatePresence mode="wait">
        {(isOpen || window.innerWidth >= 768) && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "fixed md:relative z-40 h-full w-72 p-4",
              "md:translate-x-0 md:opacity-100", // Always visible on desktop
              !isOpen && "hidden md:block" // Hide on mobile if closed
            )}
          >
            <GlassPanel className="h-full flex flex-col p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-bold text-white tracking-tight">
                  AI Agent
                </h1>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <Plus size={20} className="text-accent" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 space-y-2 overflow-y-auto">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
                  History
                </div>
                {/* Mock History Items */}
                {[1, 2, 3].map((i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 p-3 text-sm text-gray-300 hover:bg-white/5 rounded-xl transition-all group"
                  >
                    <MessageSquare
                      size={18}
                      className="text-gray-500 group-hover:text-primary transition-colors"
                    />
                    <span className="truncate">Previous Conversation {i}</span>
                  </button>
                ))}
              </nav>

              {/* Footer */}
              <div className="mt-auto pt-4 border-t border-white/10">
                <button className="w-full flex items-center gap-3 p-3 text-sm text-gray-300 hover:bg-white/5 rounded-xl transition-all">
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
              </div>
            </GlassPanel>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
