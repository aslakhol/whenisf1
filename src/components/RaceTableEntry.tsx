import RaceDate from "./RaceDate";
import RaceTime from "./RaceTime";

type Session = { date: string; time: string };

type Race = {
  Circuit: {
    circuitId: string;
    Location: { locality: string; country: string };
  };
  date: string;
  time: string;
  FirstPractice: Session;
  SecondPractice: Session;
  Qualifying: Session;
  ThirdPractice?: Session;
  Sprint?: Session;
};

interface Props {
  race: Race;
  utc: boolean;
}

const RaceTableEntry = (props: Props) => {
  const { race, utc } = props;

  const now = new Date();

  const circuit = race.Circuit.Location.locality;
  const fp1 = new Date(race.FirstPractice.date + "T" + race.FirstPractice.time);
  const fp2 = new Date(
    race.SecondPractice.date + "T" + race.SecondPractice.time
  );
  const fp3orSprint = new Date(
    `${race.ThirdPractice?.date || race.Sprint?.date}T${
      race.ThirdPractice?.time || race.Sprint?.time
    }`
  );
  const qualifying = new Date(
    race.Qualifying.date + "T" + race.Qualifying.time
  );
  const raceDate = new Date(race.date + "T" + race.time);

  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {circuit}
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          raceDate > now ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceDate goTime={raceDate} utc={utc} />
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          fp1 > now ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceTime goTime={fp1} utc={utc} />
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          fp2 > now ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceTime goTime={fp2} utc={utc} />
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          fp3orSprint > now ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceTime goTime={fp3orSprint} utc={utc} />
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          qualifying > now ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceTime goTime={qualifying} utc={utc} />
      </td>
      <td
        className={`whitespace-nowrap px-3 py-4 text-sm ${
          raceDate > now ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <RaceTime goTime={raceDate} utc={utc} />
      </td>
    </tr>
  );
};

export default RaceTableEntry;
