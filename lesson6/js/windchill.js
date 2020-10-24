let temperature = parseFloat(document.getElementById("temp").innerText);
let windSpeed = parseFloat(document.getElementById("speed").innerText);
let windChill = parseInt(35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)));

if (temperature <= 50 && windSpeed >= 3.0) {
    document.getElementById("chill").innerHTML = windChill.toFixed(2);

} else {
    document.getElementById("chill").innerHTML = "N/A";
}