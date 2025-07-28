// ✅ Correct way to export as default
const ShinyText = ({ text, hoverOnly = false, speed = 5, className = '' }) => {
  return (
    <span
      className={`${hoverOnly ? 'shiny-hover' : 'shiny-text'} inline-block ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
