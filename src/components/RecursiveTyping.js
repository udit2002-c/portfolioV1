import React, { useState, useEffect } from 'react';

const RecursiveTyping = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
}) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const type = () => {
      if (!isDeleting && text.length < currentPhrase.length) {
        // Add next character
        setText(currentPhrase.slice(0, text.length + 1));
        setTimeout(type, typingSpeed + Math.random() * 50); // Slight randomness for smoother typing
      } else if (isDeleting && text.length > 0) {
        // Remove last character
        setText(text.slice(0, -1));
        setTimeout(type, deletingSpeed + Math.random() * 50); // Slight randomness for smoother deleting
      } else if (text.length === currentPhrase.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text.length === 0) {
        // Move to next phrase
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
        setTimeout(type, typingSpeed); // Start typing the next phrase
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div
      className="recursive-typing"
      style={{
        fontFamily: 'var(--heading-font)',
        fontSize: '1.5rem',
        color: 'var(--accent-color)',
        marginBottom: '1rem',
        whiteSpace: 'nowrap',
      }}
    >
      {text}
      <span
        className="cursor"
        style={{
          animation: 'blink 0.7s infinite',
          fontWeight: 'bold',
        }}
      >
        |
      </span>
    </div>
  );
};

export default RecursiveTyping;