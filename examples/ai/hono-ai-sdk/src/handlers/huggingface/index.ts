import { Hono } from "hono";
import { huggingface } from '@ai-sdk/huggingface';
import { generateText } from 'ai';


export default function setHuggingfaceRoutes(app: Hono) {
    app.post('/api/huggingface', async c => {
        console.log('POST /api/huggingface');

        const body = await c.req.json().catch(() => ({}));
        const prompt = body.prompt || 'Invent a new holiday and describe its traditions.';
        console.log('Prompt:', prompt);

        const { text } = await generateText({
            model: huggingface('deepseek-ai/DeepSeek-V3-0324'),
            prompt,
        });

        return c.text(text);
    });

    return app;
}