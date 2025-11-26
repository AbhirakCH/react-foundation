import React, { useEffect, useRef } from "react";
import { MessageBubble } from "./MessageBubble";
import { InputZone } from "./InputZone";
import { useChatStore } from "../../store/useChatStore";
import { useAI } from "../../hooks/useAI";
import { motion } from "framer-motion";

import { ChatHeader } from "./ChatHeader";

export const ChatArea: React.FC = () => {
  const { messages, isTyping } = useChatStore();
  const { sendMessage } = useAI();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-full relative">
      <ChatHeader />

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-32 pt-20">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-4 w-full max-w-4xl mx-auto p-4 justify-start"
          >
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30 shrink-0">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            </div>
            <div className="bg-surface/50 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-none text-gray-400 text-sm flex items-center gap-1">
              <span>Thinking</span>
              <span className="animate-bounce delay-0">.</span>
              <span className="animate-bounce delay-100">.</span>
              <span className="animate-bounce delay-200">.</span>
            </div>
          </motion.div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent pt-10">
        <InputZone onSend={sendMessage} disabled={isTyping} />
      </div>
    </div>
  );
};
