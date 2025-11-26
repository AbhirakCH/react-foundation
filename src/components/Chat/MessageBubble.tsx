import React from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { cn } from "../../lib/utils";
import type { Message } from "../../store/useChatStore";

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isAI = message.role === "ai";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex gap-4 w-full max-w-4xl mx-auto p-4",
        isAI ? "justify-start" : "justify-end"
      )}
    >
      {isAI && (
        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30 shrink-0">
          <Bot size={18} className="text-secondary" />
        </div>
      )}

      <div
        className={cn(
          "relative px-6 py-4 rounded-2xl max-w-[80%] shadow-sm",
          isAI
            ? "bg-surface/50 border border-white/5 text-gray-200 rounded-tl-none"
            : "bg-primary text-white rounded-tr-none"
        )}
      >
        <div className="prose prose-invert prose-sm max-w-none">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      </div>

      {!isAI && (
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
          <User size={18} className="text-primary" />
        </div>
      )}
    </motion.div>
  );
};
