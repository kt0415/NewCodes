function generateTableFor(number) {
  let table = '<table border="">';
  for (let i = 1; i <= 10; i++) {
    table += '<tr>';
    table += `<td>${number}</td>`;
    table += `<td>x</td>`;
    table += `<td>${i}</td>`;
    table += `<td>=</td>`;
    table += `<td>${number * i}</td>`;
    table += '</tr>';
  }
  table += '</table>';
  return table;
}

function generateTableWhile(number) {
  let table = '<table border="1">';
  let i = 1;
  while (i <= 10) {
    table += '<tr>';
    table += `<td>${number}</td>`;
    table += `<td>x</td>`;
    table += `<td>${i}</td>`;
    table += `<td>=</td>`;
    table += `<td>${number * i}</td>`;
    table += '</tr>';
    i++;
  }
  table += '</table>';
  return table;
}

function generateTableDoWhile(number) {
  let table = '<table border="1">';
  let i = 1;
  do {
    table += '<tr>';
    table += `<td>${number}</td>`;
    table += `<td>x</td>`;
    table += `<td>${i}</td>`;
    table += `<td>=</td>`;
    table += `<td>${number * i}</td>`;
    table += '</tr>';
    i++;
  } while (i <= 10);
  table += '</table>';
  return table;
}

const numberInput = document.getElementById('number');
const generateBtn = document.getElementById('generateBtn');
const tableContainer = document.getElementById('tableContainer');

generateBtn.addEventListener('click', () => {
  const number = parseInt(numberInput.value);

  if (!isNaN(number)) {
    const tableHTMLFor = generateTableFor(number);
    const tableHTMLWhile = generateTableWhile(number);
    const tableHTMLDoWhile = generateTableDoWhile(number);
    
    tableContainer.innerHTML = `
      <h5>Multiplication Table (for loop)</h5>
      ${tableHTMLFor}
      <h5>Multiplication Table (while loop)</h5>
      ${tableHTMLWhile}
      <h5>Multiplication Table (do while loop)</h5>
      ${tableHTMLDoWhile}
    `;
  } else {
    tableContainer.innerHTML = 'Please enter a valid number.';
  }
});
