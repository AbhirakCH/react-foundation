import React, { useState } from "react";
import { ChevronDown, Sparkles, Code, PenTool, BarChart } from "lucide-react";
import { GlassPanel } from "../ui/GlassPanel";
import { motion, AnimatePresence } from "framer-motion";

const agents = [
  {
    id: "general",
    name: "General Agent",
    icon: Sparkles,
    color: "text-blue-400",
  },
  { id: "coding", name: "Coding Agent", icon: Code, color: "text-purple-400" },
  {
    id: "writing",
    name: "Writing Agent",
    icon: PenTool,
    color: "text-pink-400",
  },
  { id: "data", name: "Data Agent", icon: BarChart, color: "text-green-400" },
];

export const ChatHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);

  return (
    <div className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-center">
      <div className="relative">
        <GlassPanel
          className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <selectedAgent.icon size={18} className={selectedAgent.color} />
          <span className="font-medium text-sm">{selectedAgent.name}</span>
          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </GlassPanel>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 mt-2 w-48 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden"
            >
              {agents.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => {
                    setSelectedAgent(agent);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors text-left"
                >
                  <agent.icon size={16} className={agent.color} />
                  {agent.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
