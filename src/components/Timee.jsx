import Hour from "./Hour";
import Minute from "./Minute";
import Second from "./Second";

export default function Time({ time }) {
  return (
    <div>
      <Hour time={time} />
      <Minute time={time} />
      <Second time={time} />
    </div>
  );
}
