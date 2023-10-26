const number = process.argv[2];

if (!number || isNaN(number) || number <= 0) {
  console.log("Please provide a valid positive number as an argument.");
} else {
  console.log(`Multiplication Table for ${number}:\n`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
