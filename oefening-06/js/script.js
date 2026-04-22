function sortByAttribute(objecten, attribuutnaam) {
  console.log("Original Array:", objecten.map((object) => ({ ...object })));

  objecten.sort(function (object1, object2) {
    if (object1[attribuutnaam] < object2[attribuutnaam]) {
      return -1;
    }

    if (object1[attribuutnaam] > object2[attribuutnaam]) {
      return 1;
    }

    return 0;
  });

  console.log("Sorted Array:", objecten);
}

const personen = [
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 35 },
  { name: "Alice", age: 30 },
];

sortByAttribute(personen, "age");
