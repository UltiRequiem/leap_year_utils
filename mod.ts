import { isLeapYear } from "https://deno.land/x/leap_year@v2.1.0/mod.ts";
import {
  DateLike,
  parseDateLike,
} from "https://deno.land/x/parse_datelike@0.0.1/mod.ts";

export function leapYearsInRange(
  min: DateLike = 0,
  max: DateLike = new Date(),
) {
  const maxYear = parseDateLike(max);
  const minYear = parseDateLike(min);

  const leapYears = [];

  for (let year = minYear; year <= maxYear; year++) {
    if (isLeapYear(year)) {
      leapYears.push(year);
    }
  }

  return leapYears;
}
