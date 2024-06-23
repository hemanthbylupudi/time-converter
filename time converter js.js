let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let errorMsg = document.getElementById("errorMsg");
let timeInSeconds = document.getElementById("timeInSeconds");

function displayRes(a, b) {
    let res = a * 3600 + b * 60;
    timeInSeconds.textContent = res + "s"
}


convertBtn.addEventListener("click", function() {
    let hours = hoursInput.value;
    let minutes = minutesInput.value;
    if (hours === "") {
        errorMsg.textContent = "Please enter a valid number of hours";
    } else if (minutes === "") {
        errorMsg.textContent = "Please enter a valid number of minutes"
    } else {
        let hoursVal = parseInt(hours);
        let minutesVal = parseInt(minutes)
        displayRes(hoursVal, minutesVal)
    }
})