import 'dotenv/config';

import { Hono } from 'hono';
import { cors } from 'hono/cors';

import setOpenAIRoutes from './handlers/openai';
import setDeepgramRoutes from './handlers/deepgram';
import setReplicateRoutes from './handlers/replicate';
import setDeepseekRoutes from './handlers/deepseek';
import setXAIGrokRoutes from './handlers/x-ai-grok';
import setHuggingfaceRoutes from './handlers/huggingface';

let app = new Hono();

// CORS setup to allow calls from localhost:3333
app.use(
  '/api/openai/chat/*',
  cors({
    origin: 'http://localhost:3333',
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
  }),
);

app = setOpenAIRoutes(app);
app = setDeepgramRoutes(app);
app = setReplicateRoutes(app);
app = setDeepseekRoutes(app);
app = setXAIGrokRoutes(app);
app = setHuggingfaceRoutes(app);

app.get('/api/health', c => c.text('Hono AI SDK example server is running!'));

// console.log(`\n### DEBUG ### app.routes: ${JSON.stringify(app.routes, null, 2)}`);
console.log(`\n### DEBUG ### env: ${JSON.stringify({
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  DEEPGRAM_API_KEY: process.env.DEEPGRAM_API_KEY,
  REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
  DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY,
}, null, 2)}`);

app.fire();