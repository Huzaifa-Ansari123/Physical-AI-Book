import React from 'react';
import styles from './styles.module.css';

export default function ChatIcon(): JSX.Element {
  return (
    <a
      href="https://chatgpt.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.chatIcon}
      aria-label="Chat with AI Assistant"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Chat bubble icon */}
        <path
          d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l4.93-1.36A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
          fill="url(#chatGradient)"
        />
        {/* AI brain/circuit pattern inside */}
        <circle cx="8" cy="11" r="1.5" fill="white"/>
        <circle cx="12" cy="11" r="1.5" fill="white"/>
        <circle cx="16" cy="11" r="1.5" fill="white"/>
        <defs>
          <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
      <span className={styles.badge}>AI</span>
      <div className={styles.pulseRing}></div>
    </a>
  );
}
