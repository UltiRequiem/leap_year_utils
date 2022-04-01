import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.133.0/testing/asserts.ts";

import { leapYearsInRange } from "./mod.ts";

Deno.test("Main", () => {
  assert(Array.isArray(leapYearsInRange()));

  leapYearsInRange().forEach((year) => {
    assert(year % 4 === 0);
    assertEquals(typeof year, "number");
  });
});
