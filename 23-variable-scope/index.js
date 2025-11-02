// Global scope
let x = 1;

// Local Scope
function scope1() {
  let x = 1;
  console.log(x);
}
scope1();

function scope2() {
  let x = 2;
  console.log(x);
}
scope2();
