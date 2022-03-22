import { assert } from "https://deno.land/std@0.128.0/testing/asserts.ts";

import { generateLeapYear } from "./mod.ts";

Deno.test("Main", () => {
  assert(Array.isArray(generateLeapYear()));
});
