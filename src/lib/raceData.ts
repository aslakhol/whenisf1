import currentYear from "../currentYear.json";
import type { ApiRace, ApiResponse } from "../types";

type RaceTable = ApiResponse["MRData"]["RaceTable"];

const FETCH_TIMEOUT_MS = 8_000;
const FALLBACK_SESSION_TIME = "15:00:00Z";
const CURRENT_YEAR_RACE_TABLE = currentYear.MRData.RaceTable as RaceTable;

const getRaceStartTime = (race: Pick<ApiRace, "date" | "time">) =>
  new Date(`${race.date}T${race.time || FALLBACK_SESSION_TIME}`);

const findUpcomingRace = (races: ApiRace[]) => {
  const now = Date.now();

  return races.find((race) => getRaceStartTime(race).getTime() >= now);
};

const fetchJson = async <T>(url: string): Promise<T> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(
        `Jolpica request failed: ${response.status} ${response.statusText}`,
      );
    }

    return (await response.json()) as T;
  } finally {
    clearTimeout(timeoutId);
  }
};

const logFallback = (label: string, error: unknown) => {
  console.warn(`[raceData] ${label}. Falling back to bundled schedule.`, error);
};

export const getCurrentRaceTable = async (): Promise<RaceTable> => {
  try {
    const data = await fetchJson<ApiResponse>(
      "https://api.jolpi.ca/ergast/f1/current.json",
    );

    return data.MRData.RaceTable;
  } catch (error) {
    logFallback("Unable to fetch current season race table", error);
    return CURRENT_YEAR_RACE_TABLE;
  }
};

export const getNextRaceTable = async (): Promise<RaceTable> => {
  try {
    const data = await fetchJson<ApiResponse>(
      "https://api.jolpi.ca/ergast/f1/current/next.json",
    );

    return data.MRData.RaceTable;
  } catch (error) {
    logFallback("Unable to fetch next race", error);

    const nextRace = findUpcomingRace(CURRENT_YEAR_RACE_TABLE.Races);

    return {
      ...CURRENT_YEAR_RACE_TABLE,
      Races: nextRace ? [nextRace] : [],
    };
  }
};
