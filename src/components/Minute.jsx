export default function Minute({ time }) {
  return <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>;
}
