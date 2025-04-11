function checkForSpam(message) {
  const yasaklıKelime1 = "spam";
  const yasaklıKelime2 = "sale";
  if (
    message.toLowerCase().includes(yasaklıKelime1) ||
    message.toLowerCase().includes(yasaklıKelime2)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
