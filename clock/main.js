function time() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    // Format the time as HH:MM:SS
    var formattedTime = hours.toString().padStart(2, '0') + ':' +
                        minutes.toString().padStart(2, '0') + ':' +
                        seconds.toString().padStart(2, '0');

    let division = document.getElementById("digital-time");
    
    division.innerHTML = formattedTime;
    division.style.zIndex="4"
    var hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30; // 360 / 12 = 30
    var minuteDegrees = minutes * 6; // 360 / 60 = 6
    var secondDegrees = seconds * 6; // 360 / 60 = 6

    // Get the hand elements
    var hourHand = document.getElementById("hour");
    var minuteHand = document.getElementById("min");
    var secondHand = document.getElementById("seconds");

    if (hourHand && minuteHand && secondHand) {
        // Apply the rotations
        hourHand.style.transform = "rotate(" + hourDegrees + "deg)";
        minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)";
        secondHand.style.transform = "rotate(" + secondDegrees + "deg)";
    
        hourHand.style.transformOrigin = "100% 100%";
        minuteHand.style.transformOrigin = "100% 100%";
        secondHand.style.transformOrigin = "100% 100%";
        
    } else {
        console.error("One or more clock hands were not found.");
    }
}
time()
setInterval(time,100)
time()