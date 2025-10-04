let day = 8;

switch (day) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Tuesday");
    break;
  case 3:
    console.log("It is Wednesday");
    break;
  case 4:
    console.log("It is Thursday");
    break;
  case 5:
    console.log("It is Friday");
    break;
  case 6:
    console.log("It is Saturday");
    break;
  case 7:
    console.log("It is Sunday");
    break;
  default:
    console.log(`${day} is not a day`);
}

let score = 32;
let grade;

switch (true) {
  case score >= 80:
    grade = "A";
    break;
  case score >= 60:
    grade = "B";
    break;
  case score >= 40:
    grade = "C";
    break;
  case score >= 0:
    grade = "Failed";
}
console.log(grade);
