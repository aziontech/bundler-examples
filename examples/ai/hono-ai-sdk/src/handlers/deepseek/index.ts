import { Hono } from "hono";
import { deepseek } from '@ai-sdk/deepseek';
import { generateText } from 'ai';

export default function setDeepseekRoutes(app: Hono) {
    app.post('/api/deepseek', async c => {
        console.log('POST /api/deepseek');

        const body = await c.req.json().catch(() => ({}));
        const prompt = body.prompt || 'Write a lasagna recipe for 4 people.';
        console.log('Prompt:', prompt);

        const { text } = await generateText({
            model: deepseek('deepseek-chat'),
            prompt,
        });

        return c.text(text);
    });
    return app;
}