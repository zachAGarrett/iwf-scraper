export enum EventGender {
  "MEN" = "Men",
  "WOMEN" = "Women",
}

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

export type GetMatchedEventsProps = {
  event_age?: string;
  event_nation?: string;
  event_type?: string;
  event_year?: EventYear;
};
export type QueryStringOptions = XOR<
  { event_year: string },
  GetMatchedEventsProps
>;

// type 1 event filters: event_year
//https://iwf.sport/results/results-by-events/?event_year=2022
// type 2 event filters: event_type, event_age, event_nation
//https://iwf.sport/results/results-by-events/?event_type=Continental+Championships&event_age=Junior&event_nation=ARG

/**
 * Create enums from all filter types on https://iwf.sport/results/results-by-events
 */
export type EventYear = 2018 | 2019 | 2020 | 2021 | 2022 | 2023;
