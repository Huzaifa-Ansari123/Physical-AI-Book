import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatBot(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hello! I'm your AI assistant for the Physical AI Learning book. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length,
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! Physical AI combines machine learning with real-world physics. Would you like to know more about a specific topic?",
        "I'd recommend checking out the chapter on ROS 2 Fundamentals. It covers the core concepts you'll need for robotics development.",
        "Robot simulation with Gazebo is essential for safe testing before deploying to real robots. The simulation chapter has great practical examples!",
        "Humanoid robotics is one of the most exciting areas of Physical AI. The book covers kinematics, dynamics, and control in detail.",
        "Conversational robotics combines NLP with physical embodiment. It's fascinating how language interfaces with the physical world!",
        "Based on your question, you might find the NVIDIA Isaac platform chapter helpful. It shows how GPU acceleration enables real-time perception and control.",
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const botMessage: Message = {
        id: messages.length + 1,
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className={styles.chatToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        <div className={styles.chatIcon}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"
              fill="currentColor"
            />
            <path
              d="M7 9H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7 12H13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className={styles.badge}>?</span>
        {isOpen && <span className={styles.closeIcon}>×</span>}
      </button>

      {/* Chat Window */}
      <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
        {/* Header */}
        <div className={styles.chatHeader}>
          <div className={styles.headerContent}>
            <div className={styles.botAvatar}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="7" r="3" fill="currentColor" />
                <path
                  d="M6 15C6 12 9 11 12 11C15 11 18 12 18 15V17H6V15Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={styles.headerInfo}>
              <div className={styles.headerTitle}>AI Assistant</div>
              <div className={styles.headerStatus}>
                <span className={styles.statusDot}></span>
                Online
              </div>
            </div>
          </div>
          <button
            className={styles.minimizeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Minimize chat"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className={styles.chatMessages}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${message.isUser ? styles.userMessage : styles.botMessage}`}
            >
              {!message.isUser && (
                <div className={styles.messageAvatar}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="7" r="3" fill="currentColor" />
                    <path d="M6 15C6 12 9 11 12 11C15 11 18 12 18 15V17H6V15Z" fill="currentColor" />
                  </svg>
                </div>
              )}
              <div className={styles.messageContent}>
                <div className={styles.messageText}>{message.text}</div>
                <div className={styles.messageTime}>
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className={`${styles.message} ${styles.botMessage}`}>
              <div className={styles.messageAvatar}>
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="7" r="3" fill="currentColor" />
                  <path d="M6 15C6 12 9 11 12 11C15 11 18 12 18 15V17H6V15Z" fill="currentColor" />
                </svg>
              </div>
              <div className={styles.messageContent}>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className={styles.chatInput}>
          <textarea
            className={styles.inputField}
            placeholder="Ask me anything about Physical AI..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            rows={1}
            disabled={isTyping}
          />
          <button
            className={styles.sendButton}
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            aria-label="Send message"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>

        {/* Footer */}
        <div className={styles.chatFooter}>
          <span className={styles.footerText}>Powered by AI</span>
        </div>
      </div>
    </>
  );
}
