function calculate(getal1, getal2, callback) {
  const som = getal1 + getal2;
  callback(som);
}

function printToConsole(resultaat) {
  console.log(`De som is: ${resultaat}`);
}

calculate(5, 10, printToConsole);
