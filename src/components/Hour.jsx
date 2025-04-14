export default function Hour({ time }) {
  return <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>;
}
