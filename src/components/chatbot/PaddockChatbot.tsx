'use client';

import { useState, useRef, useEffect, useCallback, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './PaddockChatbot.module.css';
import { getResponse, getWelcomeMessage, type BotResponse, type QuickAction } from './chatbotBrain';
import BookingModal from '../booking/BookingModal';

type Message = {
  id: number;
  from: 'bot' | 'user';
  text: string;
  quickActions?: QuickAction[];
};

export default function PaddockChatbot() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const msgIdRef = useRef(0);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ─── Draggable avatar state ───
  const avatarRef = useRef<HTMLButtonElement>(null);
  const [avatarPos, setAvatarPos] = useState<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const wasDragged = useRef(false);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Welcome message on first open
  const openChat = useCallback(() => {
    if (!hasOpened) {
      const welcome = getWelcomeMessage();
      setMessages([{
        id: ++msgIdRef.current,
        from: 'bot',
        text: welcome.text,
        quickActions: welcome.quickActions,
      }]);
      setHasOpened(true);
    }
    setIsOpen(true);
  }, [hasOpened]);

  // ─── Dragging logic ───
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (!avatarRef.current) return;
    isDragging.current = true;
    wasDragged.current = false;
    dragStartPos.current = { x: e.clientX, y: e.clientY };

    const rect = avatarRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    };
    avatarRef.current.setPointerCapture(e.pointerId);
    avatarRef.current.classList.add(styles.dragging);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      wasDragged.current = true;
    }
    const x = e.clientX - dragOffset.current.x;
    const y = e.clientY - dragOffset.current.y;
    // Clamp to viewport
    const size = 60;
    const clampedX = Math.max(size / 2, Math.min(window.innerWidth - size / 2, x));
    const clampedY = Math.max(size / 2, Math.min(window.innerHeight - size / 2, y));
    setAvatarPos({ x: clampedX, y: clampedY });
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!avatarRef.current) return;
    isDragging.current = false;
    avatarRef.current.releasePointerCapture(e.pointerId);
    avatarRef.current.classList.remove(styles.dragging);
    // If it wasn't a drag, treat as click
    if (!wasDragged.current) {
      if (isOpen) {
        setIsOpen(false);
      } else {
        openChat();
      }
    }
  }, [isOpen, openChat]);

  // Handle bot response action
  const handleAction = useCallback((action: BotResponse['action']) => {
    if (!action) return;
    switch (action) {
      case 'open-booking':
        setTimeout(() => setShowBooking(true), 500);
        break;
      case 'open-map':
        // Trigger location modal via custom event (Navbar listens)
        window.dispatchEvent(new CustomEvent('paddock:open-map'));
        break;
      case 'open-menu':
        router.push('/menu');
        setIsOpen(false);
        break;
      case 'open-events':
        router.push('/events');
        setIsOpen(false);
        break;
      case 'open-vip':
        router.push('/vip');
        setIsOpen(false);
        break;
    }
  }, [router]);

  // Send message
  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, {
      id: ++msgIdRef.current,
      from: 'user',
      text: text.trim(),
    }]);
    setInput('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate thinking delay
    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
      const response = getResponse(text);
      setMessages(prev => [...prev, {
        id: ++msgIdRef.current,
        from: 'bot',
        text: response.text,
        quickActions: response.quickActions,
      }]);
      setIsTyping(false);

      // Execute action if any
      if (response.action) {
        handleAction(response.action);
      }
    }, delay);
  }, [handleAction]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (action: QuickAction) => {
    sendMessage(action.value);
  };

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // Avatar positioning style
  const avatarStyle: React.CSSProperties = avatarPos
    ? {
        position: 'fixed',
        left: `${avatarPos.x}px`,
        top: `${avatarPos.y}px`,
        transform: 'translate(-50%, -50%)',
        bottom: 'auto',
        right: 'auto',
      }
    : {};

  return (
    <>
      {/* ─── Draggable P Avatar ─── */}
      <button
        ref={avatarRef}
        className={`${styles.avatar} ${isOpen ? styles.avatarActive : ''}`}
        style={avatarStyle}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        aria-label={isOpen ? 'Close chat' : 'Open Paddock concierge'}
      >
        <span className={styles.avatarGlow} />
        <span className={styles.avatarRing} />
        <span className={styles.avatarLetter}>
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            'P'
          )}
        </span>
        {!isOpen && !hasOpened && (
          <span className={styles.avatarBadge}>1</span>
        )}
      </button>

      {/* ─── Chat greeting tooltip ─── */}
      {!isOpen && !hasOpened && (
        <div
          className={styles.tooltip}
          style={avatarPos ? {
            position: 'fixed',
            right: 'auto',
            bottom: 'auto',
            left: `${avatarPos.x - 220}px`,
            top: `${avatarPos.y - 20}px`,
          } : {}}
          onClick={openChat}
        >
          Need help? Chat with us!
        </div>
      )}

      {/* ─── Chat Panel ─── */}
      {isOpen && (
        <div className={styles.panel}>
          {/* Header */}
          <div className={styles.panelHeader}>
            <div className={styles.headerAvatar}>P</div>
            <div className={styles.headerInfo}>
              <span className={styles.headerName}>Paddock Concierge</span>
              <span className={styles.headerStatus}>
                <span className={styles.statusDot} />
                Online now
              </span>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close chat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className={styles.messages}>
            {messages.map((msg) => (
              <div key={msg.id} className={`${styles.message} ${msg.from === 'user' ? styles.userMsg : styles.botMsg}`}>
                {msg.from === 'bot' && <div className={styles.msgAvatar}>P</div>}
                <div className={styles.msgBubble}>
                  <p className={styles.msgText}>{msg.text}</p>
                  {msg.quickActions && msg.quickActions.length > 0 && (
                    <div className={styles.quickActions}>
                      {msg.quickActions.map((action, i) => (
                        <button
                          key={i}
                          className={styles.quickBtn}
                          onClick={() => handleQuickAction(action)}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className={`${styles.message} ${styles.botMsg}`}>
                <div className={styles.msgAvatar}>P</div>
                <div className={styles.msgBubble}>
                  <div className={styles.typing}>
                    <span className={styles.typingDot} />
                    <span className={styles.typingDot} />
                    <span className={styles.typingDot} />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form className={styles.inputArea} onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className={styles.input}
              type="text"
              placeholder="Ask about menu, events, VIP..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
            />
            <button type="submit" className={styles.sendBtn} disabled={!input.trim()} aria-label="Send message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>

          {/* Branding */}
          <div className={styles.panelFooter}>
            Paddock Lounge Concierge
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
    </>
  );
}
