
import { addDays, subDays } from "date-fns";

const nextDay = ( start, cb  ) => {
  /* go to the day after the currently selected day */
   cb( addDays( start , 1));
}

const prevDay = ( start, cb ) => {
  /* go to the day before the currently selected day */
  cb( subDays( start , 1));
}

export { 
  nextDay, 
  prevDay
}
