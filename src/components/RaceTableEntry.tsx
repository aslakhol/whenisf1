import type { ScheduleRace } from "../types";
import RaceDate from "./RaceDate";
import RaceTime from "./RaceTime";
import { useState, useEffect } from "react";

interface Props {
  race: ScheduleRace;
  utc: boolean;
}

const RaceTableEntry = (props: Props) => {
  const { race, utc } = props;
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const now = new Date();
    const raceDate = new Date(race.date + "T" + race.time);
    setIsPast(raceDate <= now);
  }, [race.date, race.time]);

  const raceDate = new Date(race.date + "T" + race.time);

  const sessionToDate = (
    primary?: { date: string; time: string },
    fallback?: { date: string; time: string }
  ) =>
    new Date(
      `${(primary || fallback || race).date}T${
        (primary || fallback || race).time
      }`
    );

  const circuit = race.Circuit.Location.locality;
  const fp1 = sessionToDate(race.FirstPractice);
  const fp2orSprintQualifying = sessionToDate(
    race.SecondPractice,
    race.SprintQualifying || race.SprintShootout
  );
  const fp3orSprint = sessionToDate(race.ThirdPractice, race.Sprint);
  const qualifying = sessionToDate(race.Qualifying);

  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {circuit}
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          !isPast ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceDate goTime={raceDate} utc={utc} />
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          !isPast ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceTime goTime={fp1} utc={utc} />
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          !isPast ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceTime goTime={fp2orSprintQualifying} utc={utc} />
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          !isPast ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceTime goTime={fp3orSprint} utc={utc} />
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          !isPast ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceTime goTime={qualifying} utc={utc} />
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          !isPast ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceTime goTime={raceDate} utc={utc} />
      </td>
    </tr>
  );
};

export default RaceTableEntry;
