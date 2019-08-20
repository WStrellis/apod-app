
const dateFns =  require("date-fns");
// import dateFns from "date-fns";

const nextDay = ( start  ) => {
  /* go to the day after the currently selected day */
  let nd = dateFns.addDays( start , 1);
  console.log(`return value of datfns.adddays : ${nd}`);
  console.log(`type of date from datefns: ${typeof(nd)}`);
  // cb( nd);
}

const prevDay = ( start, cb ) => {
  /* go to the day before the currently selected day */
  // let pd = dateFns.subDays( start , 1);
  cb ( dateFns.subDays( start , 1));
}
/* 
module.exports = {
   nextDay,
  prevDay,
} 
*/

module.exports = { nextDay, prevDay};
