var objectsArray = [];
var arraySize = 0;

function initializeArray() {
  arraySize = parseInt(document.getElementById("arraySize").value);
  objectsArray = []; // Initialize as an empty array
  document.getElementById("ans").innerHTML =
    "Array initialized with size: " + arraySize;
}

function appendObject() {
  var target = document.getElementById("obj").value;
  if (arraySize === 0) {
    document.getElementById("ans").innerHTML =
      "Initialize the array size first.";
    return;
  }
  if (objectsArray.length >= arraySize) {
    document.getElementById("ans").innerHTML =
      "Array is full. Cannot add more elements.";
    return;
  }
  if (target.startsWith("[") && target.endsWith("]")) {
    target = JSON.parse(target);
  }
  objectsArray.push(target);
  document.getElementById("ans").innerHTML = "Object appended: " + target;
}

function printArray() {
  document.getElementById("ans").innerHTML =
    "Array: " + JSON.stringify(objectsArray);
}

function checkElementAtIndex() {
  var index = parseInt(document.getElementById("indexToCheck").value);
  if (index >= 0 && index < objectsArray.length) {
    var element = objectsArray[index];
    var isObjectAnArray = Array.isArray(element);
    document.getElementById("ans").innerHTML =
      "Element at index " +
      index +
      ": " +
      JSON.stringify(element) +
      "<br>Is it an Array? " +
      isObjectAnArray;
  } else {
    document.getElementById("ans").innerHTML =
      "Invalid index. Please enter a valid index within the array's bounds.";
  }
}
