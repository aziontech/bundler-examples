import { Hono } from 'hono';
import { replicate } from '@ai-sdk/replicate';

export default function setReplicateRoutes(app: Hono) {
    app.post('/api/replicate', async c => {
        console.log('POST /api/replicate');

        const body = await c.req.json().catch(() => ({}));
        const prompt = body.prompt || 'The Loch Ness Monster getting a manicure';
        console.log('Prompt:', prompt);

        // Use Replicate directly since the AI SDK generateImage expects v3 models
        // but Replicate models are v2 specification
        const model = replicate.image('recraft-ai/recraft-v3');

        try {
            const result = await model.doGenerate({
                prompt,
                n: 1,
                size: '1365x1024',
                aspectRatio: '4:3',
                seed: undefined,
                providerOptions: {},
            });

            return c.json({ success: true, result });
        } catch (error) {
            console.error('Replicate generation error:', error);
            return c.json({ error: 'Failed to generate image' }, 500);
        }
    });

    return app;
}