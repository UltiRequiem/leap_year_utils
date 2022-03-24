import { leapYearsInRange } from "./mod.ts";

const leapYears = leapYearsInRange({ min: 2000, max: 2020 });
console.log(leapYears); //=> [ 2004, 2008, 2012, 2016, 2020]
