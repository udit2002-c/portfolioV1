import React, { useState, useEffect } from 'react';

const RecursiveTyping = ({ phrases, typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000 }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const type = () => {
      if (!isDeleting && text.length < currentPhrase.length) {
        setText(currentPhrase.slice(0, text.length + 1));
        setTimeout(type, typingSpeed);
      } else if (isDeleting && text.length > 0) {
        setText(text.slice(0, -1));
        setTimeout(type, deletingSpeed);
      } else if (text.length === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
        setTimeout(type, typingSpeed);
      }
    };

    type();
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="recursive-typing" style={{ fontFamily: 'var(--heading-font)', fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
      {text}
      <span className="cursor">|</span>
    </div>
  );
};

export default RecursiveTyping;

