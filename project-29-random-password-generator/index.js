// Generate password function
function password(
  passLength,
  passLowerCase,
  passUpperCase,
  passNumber,
  passSymbol
) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const symbol = "~!@#$%^&*()_+=";

  let allowed = "";
  let password = "";

  allowed += passLowerCase ? lowerCase : "";
  allowed += passUpperCase ? upperCase : "";
  allowed += passNumber ? number : "";
  allowed += passSymbol ? symbol : "";
  console.log(allowed);

  if (passLength <= 0) {
    console.log(`Password length must be at least 1`);
  }
  if (allowed.length === 0) {
    console.log(`At least 1 set of character needs to be selected`);
  }

  for (let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowed.length);
    password += allowed[randomIndex];
  }

  return password;
}

// Password criteria
const passLength = 12;
const passLowerCase = true;
const passUpperCase = true;
const passNumber = true;
const passSymbol = true;

// Result
const pass = password(
  passLength,
  passLowerCase,
  passUpperCase,
  passNumber,
  passSymbol
);
console.log(`The generated password is ${pass}`);
