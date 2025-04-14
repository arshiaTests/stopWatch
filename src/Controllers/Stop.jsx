export default function Stop({ setRunning }) {
  return <button onClick={() => setRunning(false)}>Stop</button>;
}
