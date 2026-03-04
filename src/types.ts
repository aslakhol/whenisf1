export interface RaceSession {
  date: string;
  time: string;
}

export interface RaceLocation {
  locality: string;
  country: string;
  lat: string;
  long: string;
}

export interface RaceCircuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: RaceLocation;
}

export interface ApiRace {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: RaceCircuit;
  date: string;
  time: string;
  FirstPractice?: RaceSession;
  SecondPractice?: RaceSession;
  ThirdPractice?: RaceSession;
  Qualifying?: RaceSession;
  Sprint?: RaceSession;
  SprintQualifying?: RaceSession;
  SprintShootout?: RaceSession;
}

export interface ApiResponse {
  MRData: {
    RaceTable: {
      season: string;
      Races: ApiRace[];
    };
  };
}

export type SessionKey =
  | "FirstPractice"
  | "SecondPractice"
  | "ThirdPractice"
  | "Qualifying"
  | "Sprint"
  | "SprintQualifying"
  | "SprintShootout";

export type ScheduleRace = ApiRace;
