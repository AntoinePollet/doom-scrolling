import { Body, Controller, Get, Post, Res, Sse } from '@nestjs/common';
import { OllamaService } from './ollama.service';
import { Response } from 'express';
import { Observable, interval, map } from 'rxjs';
import { Ollama } from 'ollama';
const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });

@Controller('ollama')
export class OllamaController {
  constructor(private readonly ollamaService: OllamaService) {}

  @Post('/model')
  createModel(@Body() body: { modelName: string }) {
    return this.ollamaService.generateModel(body);
  }

  @Post('/chat')
  async chat(@Body() body: { messages: { role: string; content: string }[] }, @Res() res: Response): Promise<void> {
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

  @Sse('/chat')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((_) => ({ data: { hello: 'world' } }) as MessageEvent),
    );
  }
}