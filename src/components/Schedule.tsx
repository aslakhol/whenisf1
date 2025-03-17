import RaceTableEntry from "./RaceTableEntry";
import RaceTableHeadings from "./RaceTableHeadings";
import type { ScheduleRace } from "../types";

interface Props {
  races: ScheduleRace[];
}

const Schedule = (props: Props) => {
  const { races } = props;

  return (
    <table className="min-w-1/2 divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <RaceTableHeadings />
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {races.map((race) => (
          <RaceTableEntry key={race.round} race={race} utc={false} />
        ))}
      </tbody>
    </table>
  );
};

export default Schedule;
