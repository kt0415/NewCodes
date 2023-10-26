const string1Input = document.getElementById("string1");
const string2Input = document.getElementById("string2");
const compareButton = document.getElementById("compareButton");
const resultDisplay = document.getElementById("result");

compareButton.addEventListener("click", compareStrings);

function compareStrings() {
    const string1 = string1Input.value;
    const string2 = string2Input.value;

    const localeCompareResult = string1.localeCompare(string2) === 0;

    const strictEqualityResult = string1 === string2;

    const regexComparison = compareWithRegex(string1, string2);

    const lengthComparison = string1.length === string2.length;

    const uppercaseComparison = string1.toUpperCase() === string2.toUpperCase();

    resultDisplay.innerHTML = `
        <p>Comparison using localeCompare: ${localeCompareResult}</p>
        <p>Comparison using strict equality (===): ${strictEqualityResult}</p>
        <p>Comparison using regex: ${regexComparison}</p>
        <p>Comparison based on length: ${lengthComparison}</p>
        <p>Comparison after converting to uppercase: ${uppercaseComparison}</p>
    `;
}

function compareWithRegex(str1, str2) {
    const regex = new RegExp(`^${str1}$`, 'i');
    return regex.test(str2);
}
