export default function Reset({ setRunning, setTime }) {
  return <button onClick={() => setTime(0)}>Reset</button>;
}
