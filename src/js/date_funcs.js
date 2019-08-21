
import { addDays, subDays, differenceInCalendarDays } from "date-fns";

const nextDay = ( start ) => {
  /* go to the day after the currently selected day */
   return addDays( start , 1);
}

const prevDay = ( start ) => {
  /* go to the day before the currently selected day */
  return subDays( start , 1);
}

const randomDayBetween = ( latest, earliest ) => {
  /* Return a random date from earliest up to but not including latest */
  // calc difference between latest and earliest
    let daysBetween = differenceInCalendarDays( latest, earliest);
  // generate random number within the result
    let daysFromEarliest = Math.floor( Math.random() * daysBetween);
  // add that many days to earliest and return the new date
    return addDays( earliest, daysFromEarliest);
}

export { 
  nextDay, 
  prevDay,
  randomDayBetween
}
