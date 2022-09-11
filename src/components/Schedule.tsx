// import { useState } from "react";
import type monza from "../monza.json";
import RaceTableEntry from "./RaceTableEntry";
import RaceTableHeadings from "./RaceTableHeadings";
// import Toggle from "./Toggle";

type Race = typeof monza.MRData.RaceTable.Races[0];
type ScheduleProps = { races: Race[] };

const Schedule = (props: ScheduleProps) => {
  const { races } = props;
  // const [displayLocalTime, setDisplayLocalTime] = useState(true);

  return (
    <>
      {/* <Toggle
        label="Display times in Local Timezone (or utc)"
        checked={displayLocalTime}
        onChange={setDisplayLocalTime}
      /> */}

      <table className="min-w-1/2 divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <RaceTableHeadings />
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {races.map((race) => (
            <RaceTableEntry race={race} utc={true} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Schedule;
