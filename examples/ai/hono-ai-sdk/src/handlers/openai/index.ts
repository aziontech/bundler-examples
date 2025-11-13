import { streamText } from "ai";
import { Hono } from "hono";
import { openai } from "@ai-sdk/openai";
import { createUIMessageStream, createUIMessageStreamResponse } from "ai";

export default function setOpenAIRoutes(app: Hono) {
    app.post('/api/openai', async c => {
        console.log('POST /api/openai');

        const body = await c.req.json().catch(() => ({}));
        const prompt = body.prompt || 'Invent a new holiday and describe its traditions.';
        console.log('Prompt:', prompt);

        const result = streamText({
            model: openai('gpt-4o'),
            prompt,
        });
        return result.toUIMessageStreamResponse();
    });

    app.post('/api/openai/text', async c => {
        console.log('POST /api/openai/text');

        const body = await c.req.json().catch(() => ({}));
        const prompt = body.prompt || 'Write a short poem about coding.';
        console.log('Prompt:', prompt);

        const result = streamText({
            model: openai('gpt-4o'),
            prompt,
        });
        return result.toTextStreamResponse();
    });

    app.post('/api/openai/stream-data', async c => {
        console.log('POST /api/openai/stream-data');

        const body = await c.req.json().catch(() => ({}));
        const prompt = body.prompt || 'Invent a new holiday and describe its traditions.';
        console.log('Prompt:', prompt);

        // immediately start streaming the response
        const stream = createUIMessageStream({
            execute: ({ writer }) => {
                writer.write({ type: 'start' });

                writer.write({
                    type: 'data-custom',
                    data: {
                        custom: 'Hello, world!',
                    },
                });

                const result = streamText({
                    model: openai('gpt-4o'),
                    prompt,
                });

                writer.merge(
                    result.toUIMessageStream({
                        sendStart: false,
                        onError: error => {
                            // Error messages are masked by default for security reasons.
                            // If you want to expose the error message to the client, you can do so here:
                            return error instanceof Error ? error.message : String(error);
                        },
                    }),
                );
            },
        });
        return createUIMessageStreamResponse({ stream });
    });

    // useChat example using streamText with tools
    app.post('/api/openai/chat', async c => {
        console.log('POST /api/openai/chat');

        const { messages } = await c.req.json();

        const result = streamText({
            model: openai('gpt-4o'),
            messages,
            // Note: Web search tools may need additional setup in AI SDK 5.0
            // For now, using basic chat without tools
        });

        return result.toUIMessageStreamResponse();
    });

    return app;
}