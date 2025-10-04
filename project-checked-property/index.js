let subscribe = document.getElementById("subscribe");

let visa = document.getElementById("visa");
let mastercard = document.getElementById("mastercard");
let paypal = document.getElementById("paypal");

let submit = document.getElementById("submit");

let first = document.getElementById("first");
let second = document.getElementById("second");

submit.onclick = function () {
  confirm("Proceed the submit?");

  if (subscribe.checked) {
    first.textContent = `You subscribe to our latest promotion`;
  } else {
    first.textContent = `You did not subscribe to our latest promotion yet`;
  }

  if (visa.checked) {
    second.textContent = `You choose payment with VISA`;
  } else if (mastercard.checked) {
    second.textContent = `You choose payment with MASTERCARD`;
  } else if (paypal.checked) {
    second.textContent = `You choose payment with PAYPAL`;
  } else {
    second.textContent = `You did not choose any payment yet`;
  }
};

// second.textContent = `You choose ${} as payment method`
