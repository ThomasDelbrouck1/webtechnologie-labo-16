function filterAndDouble(getallen) {
  console.log("Input Array:", getallen);

  const resultaat = getallen
    .filter((getal) => getal % 2 === 0)
    .map((getal) => getal * 2);

  console.log("Filtered and Doubled Array:", resultaat);
}

filterAndDouble([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
