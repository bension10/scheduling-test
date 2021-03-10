
import { getYear, getMonth, getDay, getHours, getMinutes } from 'date-fns'

export const parseDate = date => {
  return {
    year: getYear(new Date(date)) || "",
    month: getMonth(new Date(date)) || "",
    day: getDay(new Date(date)) || "",
    hour: getHours(new Date(date)) || "",
    minutes: getMinutes(new Date(date)) || "",
  }
};
