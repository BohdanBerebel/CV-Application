export default function Button({ text, shiftPage, disabled, type = "button" }) {
  return (
    <button onClick={shiftPage} type={type} disabled={disabled}>
      {text}
    </button>
  );
}
