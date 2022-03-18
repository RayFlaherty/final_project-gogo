const { timeStamp } = require("console");
const { model } = require("../models/User");

const addDate = (date) => {
  let dateString= date.toString();

  const endChar = dateString.charAt(dateString.length -1 );
    if (endChar === '1' && dateString !== '11') {
      dateString = `${dateString}st`;
      
    } else if (endChar === '2' && dateString !== '12') {
      dateString = `${dateString}nd`;
      
    } else if (endChar === '3' && dateString !== '13') {
      dateString = ` ${dateString}rd`;
      
    } else { dateString = `th`;
      
    }
    return dateString;
  }

  module.exports = (
    timeStamp,
    {monthLength = ' short', dateSuffix = true} = {}
  ) => {
    const month = {
      0: monthLength === 'short' ? 'Jan' : 'January',
      1: monthLength === 'short' ? 'Feb' : 'February',
      2: monthLength === 'short' ? 'Mar' : 'March',
      3: monthLength === 'short' ? 'Apr' : 'April',
      4: monthLength === 'short' ? 'May' : 'May',
      5: monthLength === 'short' ? 'Jun' : 'June',
      6: monthLength === 'short' ? 'Jul' : 'July',
      7: monthLength === 'short' ? 'Aug' : 'August',
      8: monthLength === 'short' ? 'Sep' : 'September',
      9: monthLength === 'short' ? 'Oct' : 'October',
      10: monthLength === 'short' ? 'Nov' : 'November',
      11: monthLength === 'short' ? 'Dec' : 'December',
    };

    const dateActual = new Date(timeStamp);
    const formattedMonth = months[dateActual.getMonth()];

    const dayActual = dateSuffix
      ? addDateEnd(dateActual.getDate())
      : dateActual.getDate();

    const year = dateActual.getFullYear();
    let hour = 
      dateActual.getHours() > 12
      ? Math.floor(dateActual.getHours() - 12 )
      : dateActual.getHours();

      if (hour === 0 ) {
        hour = 12;
      }

      const minutes = (dateActual.getMinutes() < 10 ? '0' : '') + dateActual.getMinutes();

      const amPm = dateActual.getHours() >= 12 ? 'pm' : 'am';

      const newTimeStamp = `${formattedMonth} ${dayActual}, ${year} at ${hour}:${minutes} ${amPm}`;

      return newTimeStamp;


    } 