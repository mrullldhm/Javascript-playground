// Date Object = Objects that contain values that represent dates and times
//               These date object can be changed and formatted

// Example 1
const date = new Date();
console.log(date);

// Example 2
// Date(year, month, day, hour, minute, second, ms)
const date1 = new Date(2029, 0, 1, 2, 3, 4);
console.log(date1);
// Date(string)
const date2 = new Date("2029-01-02T12:00:00+08:00");
console.log(date2);
// Date(millisecond)
const date3 = new Date(17000000000000);
console.log(date3);

// Example 3
const year = date.getFullYear();
console.log(year);
const month = date.getMonth();
console.log(month);
const day = date.getDay();
console.log(day);
const hour = date.getHours();
console.log(hour);
const minutes = date.getMinutes();
console.log(minutes);
const seconds = date.getSeconds();
console.log(seconds);
const dayOfWeek = date.getDay();
console.log(dayOfWeek);

// Example 4
date.setFullYear(2025);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(3);
console.log(date);

// Example 5
let date4 = new Date("2025-12-31");
let date5 = new Date("2025-12-30");

if (date4 > date5) {
  console.log("Happy New Year");
}
