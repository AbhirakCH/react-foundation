import { create } from "zustand";

export interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: number;
}

interface ChatStore {
  messages: Message[];
  isTyping: boolean;
  addMessage: (message: Message) => void;
  setTyping: (isTyping: boolean) => void;
  clearHistory: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [
    {
      id: "1",
      role: "ai",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: Date.now(),
    },
  ],
  isTyping: false,
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setTyping: (isTyping) => set({ isTyping }),
  clearHistory: () => set({ messages: [] }),
}));
