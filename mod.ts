import { isLeapYear } from "https://deno.land/x/leap_year@v2.0.0/mod.ts";
import { parseDateLike } from "https://deno.land/x/parse_datelike@0.0.1/mod.ts";

export function leapYearsInRange(
  config: {
    min?: number;
    max?: Date | number | string;
  } = {}
) {
  const { min = 0, max = new Date() } = config;

  const maxYear = parseDateLike(max);

  const leapYears = [];

  for (let year = min; year <= maxYear; year++) {
    if (isLeapYear(year)) {
      leapYears.push(year);
    }
  }

  return leapYears;
}
