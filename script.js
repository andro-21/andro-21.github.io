// Set the date we're counting down to (e.g., 5 minutes from now)
let countdownDate = new Date().getTime() + 5 * 60 * 1000;  // 5 minutes

// Update the timer every second
let x = setInterval(function() {

    let now = new Date().getTime();
    let distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";
    document.getElementById("seconds").innerHTML = seconds + "s";

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".timer-container p").innerHTML = "Time's up! 🎉";
    }
}, 1000);
