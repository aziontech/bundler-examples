import { xai } from '@ai-sdk/xai';
import { generateText } from 'ai';
import { Hono } from 'hono';

export default function setXAIGrokRoutes(app: Hono) {
    app.post('/api/xai-grok', async c => {
        console.log('POST /api/xai-grok');

        const body = await c.req.json().catch(() => ({}));
        const prompt = body.prompt || 'Write a vegetarian lasagna recipe for 4 people.';
        console.log('Prompt:', prompt);

        const { text } = await generateText({
            model: xai('grok-3'),
            prompt,
        });

        return c.text(text);
    });
    return app;
}
