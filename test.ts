import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.224.0/testing/asserts.ts";

import { leapYearsInRange } from "./mod.ts";

Deno.test("Main", () => {
  assert(Array.isArray(leapYearsInRange(200, 2000)));

  leapYearsInRange(19, 2000).forEach((year) => {
    assert(year % 4 === 0);
    assertEquals(typeof year, "number");
  });
});
