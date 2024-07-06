import { Injectable } from '@nestjs/common';
import { Ollama } from 'ollama';

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });

@Injectable()
export class OllamaService {
  async generateModel(body: { modelName: string }) {
    return ollama.create({ model: 'assistant' });
  }

  async chat(body: { messages: { role: string; content: string }[] }) {
    try {
      console.log(body);
      const response = await ollama.chat({ model: 'assistant', ...body, stream: true, format: 'json' });
      console.log(response);
        for await (const part of response) {
          console.log(part)
      }

      // return
    } catch (error) {
      throw error;
    }
  }
}
