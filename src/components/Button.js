export default function Button({ color, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </button>
  );
}
