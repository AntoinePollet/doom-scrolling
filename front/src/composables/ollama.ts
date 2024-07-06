import { ref } from "vue";
export const useOllama = () => {
  const messageContent = ref<string>('');
  type Message = {
    role: "assistant" | "user" | "system";
    content: string;
  };
  
  async function chat(messages: Message[]): Promise<Message> {
    messageContent.value = '';

    const body = {
      model: 'assistant',
      messages: messages
    };
  
    const response = await fetch("http://127.0.0.1:11434/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("Failed to read response body");
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      const rawjson = new TextDecoder().decode(value);
      const json = JSON.parse(rawjson);
  
      if (json.done === false) {
        // process.stdout.write(json.message.content);
        messageContent.value += json.message.content;
      }
  
    }
    return { role: "assistant", content: messageContent.value };
  }

  return { chat, messageContent };
};