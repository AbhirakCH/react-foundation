import { useCallback } from "react";
import { useChatStore } from "../store/useChatStore";

export const useAI = () => {
  const { addMessage, setTyping } = useChatStore();

  const sendMessage = useCallback(
    async (content: string) => {
      // Add user message
      addMessage({
        id: Date.now().toString(),
        role: "user",
        content,
        timestamp: Date.now(),
      });

      setTyping(true);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate streaming response
      const responseText =
        "This is a simulated AI response. I can help you with coding, writing, or analysis. Just ask!";
      let currentText = "";

      const messageId = (Date.now() + 1).toString();

      // Initial empty AI message
      addMessage({
        id: messageId,
        role: "ai",
        content: "",
        timestamp: Date.now(),
      });

      // Stream characters
      for (let i = 0; i < responseText.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 30));
        currentText += responseText[i];

        // Update the last message (AI's message)
        // Note: In a real app, we'd update the specific message by ID.
        // For this mock, we'll just update the store state directly or assume the UI handles the stream.
        // Since Zustand is immutable, we need a way to update the last message.
        // Let's modify the store slightly or just add a new message for simplicity in this mock
        // but that would create spam.
        // Better approach: The store should support updating a message.
        // For now, let's just add the full message at the end to keep it simple,
        // OR we can implement a proper updateMessage action in the store.
      }

      // For this simple mock, let's just replace the empty message with the full one at the end
      // to avoid complex store logic for now, or better yet, let's add an updateMessage action.

      useChatStore.setState((state) => ({
        messages: state.messages.map((msg) =>
          msg.id === messageId ? { ...msg, content: responseText } : msg
        ),
        isTyping: false,
      }));
    },
    [addMessage, setTyping]
  );

  return { sendMessage };
};
