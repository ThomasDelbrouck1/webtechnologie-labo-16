function createCalculator(bewerking) {
  if (bewerking === "add") {
    return function (getal1, getal2, callback) {
      const resultaat = getal1 + getal2;
      callback(resultaat);
    };
  }

  if (bewerking === "multiply") {
    return function (getal1, getal2, callback) {
      const resultaat = getal1 * getal2;
      callback(resultaat);
    };
  }
}

function printToConsole(resultaat) {
  console.log(`Het resultaat is: ${resultaat}`);
}

const optellen = createCalculator("add");
const vermenigvuldigen = createCalculator("multiply");

optellen(5, 10, printToConsole);
vermenigvuldigen(3, 4, printToConsole);
