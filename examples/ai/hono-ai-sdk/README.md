# 🚀 Hono + AI SDK Multi-Provider Example

A comprehensive [Hono](https://hono.dev/) server implementation showcasing multiple AI providers using the **AI SDK 6.0 Beta**. This project demonstrates text generation, image generation, and audio transcription capabilities across various AI services, deployed on Azion Edge Platform.

## ✨ Features

- 🔄 **Multiple AI Providers** - OpenAI, Deepseek, XAI Grok, Hugging Face, Replicate, Deepgram
- 🌊 **Streaming Support** - Real-time text streaming with UI message streams
- 🎨 **Image Generation** - AI-powered image creation with Replicate
- 🎵 **Audio Transcription** - Speech-to-text with Deepgram
- ⚡ **Edge Deployment** - Optimized for Azion Edge Platform
- 🔒 **Type Safety** - Full TypeScript implementation
- 🧪 **Testing Ready** - Comprehensive curl test suite included

## 🤖 Supported AI Providers

| Provider | Capability | Model | Status |
|----------|------------|-------|--------|
| **OpenAI** | Text generation & streaming | GPT-4o | ✅ Active |
| **Deepseek** | Text generation | deepseek-chat | ✅ Active |
| **XAI Grok** | Text generation | Grok models | ✅ Active |
| **Hugging Face** | Text generation | Various models | ✅ Active |
| **Replicate** | Image generation | Recraft V3 | ✅ Active |
| **Deepgram** | Audio transcription | Nova-3 | ✅ Active |

## 🛠️ Setup

### 1. **Clone & Install**

```bash
git clone <repository-url>
cd hono-ai-sdk-example
yarn install
```

### 2. **Environment Configuration**

Copy the example environment file and add your API keys:

```bash
cp .env.example .env
```

Update `.env` with your API keys:

```bash
OPENAI_API_KEY="your_openai_api_key"
DEEPSEEK_API_KEY="your_deepseek_api_key"
XAI_API_KEY="your_xai_api_key"
HUGGINGFACE_API_KEY="your_huggingface_api_key"
REPLICATE_API_TOKEN="your_replicate_token"
DEEPGRAM_API_KEY="your_deepgram_api_key"
```

### 3. **Development**

Start the development server:

```bash
azion dev
```

The server will be available at `http://localhost:3333`

### 4. **Testing**

Test all endpoints using the provided curl commands:

```bash
# Test health endpoint
curl -X GET http://localhost:3333/api/health

# Or use the comprehensive test suite
cat curl-tests.txt
```

## 📡 API Endpoints

### 🏥 Health Check
```bash
GET /api/health
```
**Response:** `"Hono AI SDK example server is running!"`

---

### 🤖 OpenAI Endpoints

#### **UI Message Stream** (Recommended for web apps)
```bash
POST /api/openai
Content-Type: application/json

{
  "prompt": "Tell me about artificial intelligence"
}
```
**Returns:** UI Message Stream for real-time updates

#### **Text Stream** (Raw text streaming)
```bash
POST /api/openai/text
Content-Type: application/json

{
  "prompt": "Write a poem about coding"
}
```
**Returns:** Plain text stream

#### **Chat Interface** (Conversation format)
```bash
POST /api/openai/chat
Content-Type: application/json

{
  "messages": [
    {"role": "user", "content": "Hello, how are you?"}
  ]
}
```
**Returns:** UI Message Stream with conversation context

#### **Stream with Custom Data** (Advanced streaming)
```bash
POST /api/openai/stream-data
Content-Type: application/json

{
  "prompt": "Explain quantum computing"
}
```
**Returns:** UI Message Stream with custom data injection

---

### 🧠 Other AI Providers

#### **Deepseek** (Text Generation)
```bash
POST /api/deepseek
Content-Type: application/json

{
  "prompt": "Write a lasagna recipe for 4 people"
}
```
**Returns:** Plain text response

#### **XAI Grok** (Text Generation)
```bash
POST /api/xai-grok
Content-Type: application/json

{
  "prompt": "Explain the theory of relativity"
}
```
**Returns:** Plain text response

#### **Hugging Face** (Text Generation)
```bash
POST /api/huggingface
Content-Type: application/json

{
  "prompt": "Create a short story about robots"
}
```
**Returns:** Plain text response

#### **Replicate** (Image Generation)
```bash
POST /api/replicate
Content-Type: application/json

{
  "prompt": "A futuristic city at sunset"
}
```
**Returns:** Generated image URL

#### **Deepgram** (Audio Transcription)
```bash
POST /api/deepgram
Content-Type: application/json

{
  "audio": "https://example.com/audio.mp3"
}
```
**Returns:** Transcribed text

## 🚀 Deployment

### Azion Edge Platform

This project is optimized for **Azion Edge Platform** deployment:

```bash
# Deploy to Azion Edge
azion deploy
# or
azion deploy --local
```

**Configuration:**
- Entry point: `src/server.ts`
- Build preset: TypeScript
- Edge runtime optimized
- Global CDN distribution


## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **[Hono](https://hono.dev/)** | `4.6.9` | Fast, lightweight web framework |
| **[AI SDK](https://sdk.vercel.ai/)** | `6.0.0-beta.95` | Vercel's AI toolkit for streaming |
| **TypeScript** | `5.8.3` | Type safety and developer experience |
| **Azion Edge** | `1.20.11` | Edge computing platform |
| **Zod** | `4.1.12` | Runtime type validation |

### AI SDK Providers
- `@ai-sdk/openai` - OpenAI GPT models
- `@ai-sdk/deepseek` - Deepseek chat models  
- `@ai-sdk/xai` - XAI Grok models
- `@ai-sdk/huggingface` - Hugging Face models
- `@ai-sdk/replicate` - Replicate image generation
- `@ai-sdk/deepgram` - Deepgram audio transcription

---

## 📁 Project Structure

```
├── 📁 src/
│   ├── 📁 handlers/           # AI provider implementations
│   │   ├── 📁 openai/         # OpenAI GPT-4o streaming & chat
│   │   │   ├── index.ts       # Main OpenAI routes
│   │   │   └── openai-web-search-agent.ts  # Web search agent
│   │   ├── 📁 deepseek/       # Deepseek text generation
│   │   ├── 📁 x-ai-grok/      # XAI Grok integration
│   │   ├── 📁 huggingface/    # Hugging Face models
│   │   ├── 📁 replicate/      # Image generation (Recraft V3)
│   │   └── 📁 deepgram/       # Audio transcription (Nova-3)
│   └── 📄 server.ts           # Main server & routing configuration
├── 📁 azion/                  # Azion deployment configuration
├── 📄 azion.config.ts         # Azion build configuration
├── 📄 curl-tests.txt          # Comprehensive API test suite
├── 📄 package.json            # Dependencies & scripts
├── 📄 .env.example            # Environment variables template
└── 📄 README.md               # This documentation

```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **[Hono Documentation](https://hono.dev/)**
- **[AI SDK Documentation](https://sdk.vercel.ai/)**
- **[Azion Edge Platform](https://www.azion.com/)**
