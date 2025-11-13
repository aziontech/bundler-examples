'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Page() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const isLoading = status !== 'ready';

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">AI Chat Assistant</h1>
        <p className="text-sm text-gray-500 mt-1">
          {isLoading ? 'AI is thinking...' : 'Ready to chat'}
        </p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Start a conversation</h3>
              <p className="text-gray-500 max-w-sm">
                Send a message to begin chatting with the AI assistant.
              </p>
            </div>
          </div>
        ) : (
          <>
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-md'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
                  }`}
                >
                  <div className="text-sm font-medium mb-1">
                    {message.role === 'user' ? 'You' : 'AI Assistant'}
                  </div>
                  <div className="text-sm leading-relaxed">
                    {message.parts.map((part, index) =>
                      part.type === 'text' ? (
                        message.role === 'user' ? (
                          <span key={index} className="whitespace-pre-wrap">
                            {part.text}
                          </span>
                        ) : (
                          <div key={index} className="prose prose-sm max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-strong:text-gray-800 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 prose-pre:text-gray-800">
                            <ReactMarkdown>
                              {part.text}
                            </ReactMarkdown>
                          </div>
                        )
                      ) : null,
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="text-sm font-medium mb-1">AI Assistant</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Form */}
      <div className="bg-white border-t border-gray-200 px-4 py-4">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (input.trim()) {
              sendMessage({ text: input });
              setInput('');
            }
          }}
          className="flex space-x-3"
        >
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={status !== 'ready'}
              placeholder="Type your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={status !== 'ready' || !input.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
          >
            <span>Send</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}