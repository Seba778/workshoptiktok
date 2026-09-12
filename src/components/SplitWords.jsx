export default function SplitWords({ text, className = '', startIndex = 0 }) {
  const words = text.split(' ');
  return (
    <span className={`split-words ${className}`.trim()}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="word-anim" style={{ '--i': startIndex + i }}>
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
}