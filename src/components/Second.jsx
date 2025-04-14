export default function Second({ time }) {
  return <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>;
}
