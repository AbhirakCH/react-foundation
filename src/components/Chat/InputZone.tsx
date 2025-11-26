import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Mic } from "lucide-react";
import { GlassPanel } from "../ui/GlassPanel";

interface InputZoneProps {
  onSend: (content: string) => void;
  disabled?: boolean;
}

export const InputZone: React.FC<InputZoneProps> = ({ onSend, disabled }) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (!input.trim() || disabled) return;
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-6">
      <GlassPanel className="p-2 flex items-end gap-2 bg-surface/80 backdrop-blur-xl">
        <button className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
          <Paperclip size={20} />
        </button>

        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message AI Agent..."
          rows={1}
          className="flex-1 bg-transparent border-0 focus:ring-0 text-white placeholder-gray-500 resize-none py-3 max-h-32"
          disabled={disabled}
        />

        {input.trim() ? (
          <button
            onClick={handleSubmit}
            disabled={disabled}
            className="p-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <Send size={20} />
          </button>
        ) : (
          <button className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
            <Mic size={20} />
          </button>
        )}
      </GlassPanel>
      <div className="text-center mt-2 text-xs text-gray-500">
        AI can make mistakes. Please verify important information.
      </div>
    </div>
  );
};
