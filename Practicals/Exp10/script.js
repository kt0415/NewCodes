

const number = process.argv[2];

if (isNaN(number)) {
  console.log("Please provide a valid positive number as an argument.");
} else {
  console.log("Kunal Tambe");
  console.log("BE-7 S7");
  console.log("Roll No: 42367");
  console.log(`Multiplication Table for ${number}:\n`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
