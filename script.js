const data = [3, 7, 15, 22, 5.9, 42, 88, 100];

function checkNumber() {
  const input = document.getElementById("userInput").value;
  const guess = parseFloat(input);
  const result = document.getElementById("result");

  if (isNaN(guess)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  const index = data.indexOf(guess);

  if (index !== -1) {
    result.textContent = `🎉 Number found at index ${index}: ${data[index]}`;
  } else {
    result.textContent = "❌ Data is not in your array!";
  }
}