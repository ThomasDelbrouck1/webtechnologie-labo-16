function calculateTotalPrice(prijzen) {
  console.log("De input array:", prijzen);

  const totaal = prijzen.reduce((som, prijs) => som + prijs, 0);
  console.log(`De totale prijs is: ${totaal}`);
}

calculateTotalPrice([130, 150, 80, 131, 90, 300, 212]);
