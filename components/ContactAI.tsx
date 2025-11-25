import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface ContactAIProps {
  id: string;
}

export const ContactAI: React.FC<ContactAIProps> = ({ id }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello. I am Ventaoo\'s digital assistant. How can I help you visualize your next project?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(messages, userMsg.text);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the studio. Please try again later.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id={id} className="py-24 bg-stone-900 text-stone-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500">Get in Touch</span>
            <h3 className="text-4xl md:text-5xl font-serif mt-6 leading-tight">
              Let's craft something <br/> timeless.
            </h3>
          </div>
          
          <div className="space-y-6 text-stone-300 font-light">
            <p className="text-lg">
              Currently accepting projects for Q4 2025.
            </p>
            <div className="block">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Email</p>
              <a href="mailto:hello@ventaoo.design" className="text-xl hover:text-white transition-colors">hello@ventaoo.design</a>
            </div>
             <div className="block">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Studio</p>
              <p className="text-xl">Shanghai, French Concession</p>
            </div>
            <div className="block">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Social</p>
              <div className="flex space-x-6 text-sm underline underline-offset-4">
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">Pinterest</a>
                <a href="#" className="hover:text-white">RedBook</a>
              </div>
            </div>
          </div>
        </div>

        {/* AI Chat Interface */}
        <div className="bg-stone-800/50 p-1 rounded-2xl border border-stone-700/50 shadow-2xl flex flex-col h-[500px]">
          <div className="p-4 border-b border-stone-700/50 flex items-center justify-between bg-stone-800/80 rounded-t-xl">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs uppercase tracking-widest text-stone-300">Design Assistant AI</span>
            </div>
            <span className="text-[10px] text-stone-500">Powered by Gemini</span>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-stone-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`
                    max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed
                    ${msg.role === 'user' 
                      ? 'bg-stone-100 text-stone-900 rounded-br-none' 
                      : 'bg-stone-800 text-stone-200 border border-stone-700 rounded-bl-none'}
                    ${msg.isError ? 'border-red-500/50 text-red-200' : ''}
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-800 border border-stone-700 p-4 rounded-2xl rounded-bl-none flex space-x-2 items-center">
                  <div className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-stone-800/80 rounded-b-xl border-t border-stone-700/50">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my design process or schedule..."
                className="w-full bg-stone-900 text-stone-100 placeholder-stone-600 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-1 focus:ring-stone-500 text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-stone-400 hover:text-white transition-colors disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};