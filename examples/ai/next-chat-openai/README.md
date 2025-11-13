# Next.js AI Chat Application

A modern, responsive AI chat application built with Next.js 14, OpenAI GPT-4, and the Vercel AI SDK. Features real-time streaming responses, markdown support, and a beautiful UI.

## ✨ Features

### 🤖 AI Integration
- **OpenAI GPT-4** integration with streaming responses
- **Vercel AI SDK** for seamless AI interactions
- Real-time message streaming with loading indicators
- Markdown rendering for rich AI responses

### 🎨 Modern UI/UX
- **Responsive design** that works on all devices
- **Clean chat interface** with message bubbles
- **Auto-scrolling** to latest messages
- **Loading animations** and status indicators
- **Tailwind CSS** for beautiful styling

### ⚡ Technical Stack
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **React 18** with modern hooks
- **Tailwind CSS** for styling
- **Vitest** for testing
- **ESLint & Prettier** for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd next-chat-openai
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.sample .env
   ```
   
   Add your OpenAI API key to the `.env` file:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   azion dev
   ```

5. **Open your browser**
   
   Visit [http://localhost:3000](http://localhost:3333) to start chatting with the AI!

## 📝 Usage

### Chat Interface

- **Send messages**: Type your message in the input field and press Enter or click Send
- **View responses**: AI responses are rendered with markdown support for rich formatting
- **Real-time streaming**: Watch as the AI types responses in real-time
- **Auto-scroll**: The chat automatically scrolls to show the latest messages

## 🚀 Deployment

### Deploy to Azion

Deploy your OpenNext project with Azion for edge computing benefits.

```bash
azion deploy
# or
azion deploy --local
```

## 🛠️ Development

### Project Structure

```
src/
├── app/
│   ├── api/chat/          # Chat API endpoint
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main chat interface
├── components/           # Reusable components (atomic design)
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
└── styles/
    └── globals.css       # Global styles
```

### Key Dependencies

- **@ai-sdk/openai**: OpenAI integration
- **@ai-sdk/react**: React hooks for AI
- **ai**: Vercel AI SDK core
- **react-markdown**: Markdown rendering
- **zod**: Runtime type validation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
