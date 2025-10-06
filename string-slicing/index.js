const nama = "Amirul Adham";

let firstName = nama.slice(0, 6);
console.log(firstName);
let lastName = nama.slice(7, 12);
console.log(lastName);

let fName = nama.slice(0, nama.indexOf(" "));
console.log(fName);
let lName = nama.slice(nama.indexOf(" ") + 1);
console.log(lName);
