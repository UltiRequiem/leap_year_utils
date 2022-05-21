import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.140.0/testing/asserts.ts";

import { leapYearsInRange } from "./mod.ts";

Deno.test("Main", () => {
  assert(Array.isArray(leapYearsInRange({ min: 2000, max: 2020 })));

  leapYearsInRange({ min: 10, max: 2020 }).forEach((year) => {
    assert(year % 4 === 0);
    assertEquals(typeof year, "number");
  });
});
