function modifyString(tekst, callback) {
  const lengte = tekst.length;
  callback(lengte);
}

function printToConsole(resultaat) {
  console.log(`De lengte van de string is: ${resultaat}`);
}

modifyString("Hallo wereld!", printToConsole);
