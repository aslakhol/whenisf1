import type currentYear from "./currentYear.json";

type ScheduleRaces = typeof currentYear.MRData.RaceTable.Races;

export type ScheduleRace = ScheduleRaces[0] | ScheduleRaces[1];
