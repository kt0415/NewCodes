function startCountdown() {
  // Get the user input
  const datetimeInput = document.getElementById('datetimeInput').value;

  // Validate the input
  if (!datetimeInput) {
    alert('Please enter a valid date and time.');
    return;
  }

  // Parse the input to create a Date object
  const targetDate = new Date(datetimeInput);

  // Validate if the entered date is in the future
  if (targetDate <= new Date()) {
    alert('Please enter a future date and time.');
    return;
  }

  // Update the countdown every second
  const countdownElement = document.getElementById('countdown');
  const countdownInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    // Check if the countdown is over
    if (timeDifference <= 0) {
      clearInterval(countdownInterval); // Stop the interval
      countdownElement.innerHTML = 'Time over!';
      return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
