import { Hono } from 'hono';
import { deepgram } from '@ai-sdk/deepgram';
import { experimental_transcribe as transcribe } from 'ai';

export default function setDeepgramRoutes(app: Hono) {
    app.post('/api/deepgram', async c => {
        console.log('POST /api/deepgram');

        const body = await c.req.json().catch(() => ({}));
        const audioURL = body.audio || 'https://github.com/vercel/ai/raw/refs/heads/main/examples/ai-core/data/galileo.mp3';
        console.log('Audio URL:', audioURL);

        const { text } = await transcribe({
            model: deepgram.transcription('nova-3'),
            audio: new URL(audioURL),
        });

        const result = `Generated text from audio: ${text}`;

        return c.text(result);
    })

    return app;
}
