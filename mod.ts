import { isLeapYear } from "https://deno.land/x/leap_year@v2.1.0/mod.ts";
import { parseDateLike } from "https://deno.land/x/parse_datelike@0.0.1/mod.ts";

export interface LeapYearsInRangeOptions {
  min?: number;
  max?: Date | number | string;
}

export function leapYearsInRange({
  min = 0,
  max = 0,
}: LeapYearsInRangeOptions) {
  const maxYear = parseDateLike(max);

  const leapYears = [];

  for (let year = min; year <= maxYear; year++) {
    if (isLeapYear(year)) {
      leapYears.push(year);
    }
  }

  return leapYears;
}
