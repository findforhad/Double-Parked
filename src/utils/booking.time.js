import { schedulesObject } from "./schedules.days";
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let date = today.getDate();
let currentDate = today.getDate();

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "November",
  "Dec"
];
let DaysArray = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
];
const weekDayName = firstday => {
  let weekdays = [];
  for (var i = 0; i < 7; i++, firstday++) {
    weekdays.push(DaysArray[firstday]);
  }
  return { weekdays };
};

export const getCurrentWeek = (day, month, year) => {
  const dateArray = [];
  const { weekdays } = weekDayName(new Date(year, month, day).getDay());

  let firstDayOfNewWeek = `${months[month]} ${year}`;

  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  for (let i = 0; i < 7; i++) {
    if (daysInMonth > day) {
      dateArray.push({ year, month: months[month], day });
      day++;
    } else if (daysInMonth === day) {
      dateArray.push({ year, month, day });
      if (currentMonth === 11) {
        currentMonth = 0;
        month = 0;
        currentYear++;
      } else {
        currentMonth++;
        month++;
      }
      day = 1;
      date = 1;
    }
  }

  return {
    weekdays,
    dateArray,
    firstDayOfNewWeek,
    schedules: schedulesObject[DaysArray[today.getDay()]],
    nextWeek: false
  };
};
export const getNextSavenDays = () => {
  date += 7;

  const { weekdays, dateArray, schedules, firstDayOfNewWeek } = getCurrentWeek(
    date,
    currentMonth,
    currentYear
  );

  return {
    weekdays,
    dateArray,
    nextWeek: Number(date) >= Number(currentDate) ? true : false,
    schedules,
    firstDayOfNewWeek
  };
};

export const getPrevSavenDays = () => {
  date -= 7;
  const { weekdays, dateArray, schedules } = getCurrentWeek(
    date,
    currentMonth,
    currentYear
  );
  console.log(currentDate);
  return {
    weekdays,
    dateArray,
    nextWeek: currentDate >= date ? true : false,
    schedules
  };
};
export const getPreviousSavenDays = () => {
  if (
    Number(date) <= Number(today.getDate()) &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear()
  ) {
    return { maindata: { displayDate: null, dateToShow: "" } };
  } else {
    let daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();

    if (date < 7) {
      if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
      } else {
        currentMonth--;
      }

      date = daysInMonth - 7 + date;
    } else {
      date -= 7;
    }

    if (date === 1) {
      date = daysInMonth - 7 + date;
    }

    const {
      weekdays,
      dateArray,
      firstDayOfNewWeek,
      schedules
    } = getCurrentWeek(date, currentMonth, currentYear);

    return { maindata: { weekdays, dateArray, firstDayOfNewWeek, schedules } };
  }
};
