let clicks = []; // starts as an empty array

let min_clicks = 10; // the minimum number of clicks to calculate the BPM

let tapButtonVariable = document.getElementById('tapButton');

tapButtonVariable.addEventListener('click', getBPM);

function getBPM() {
    let date_right_now = Date.now();
    clicks.push(date_right_now);
    if (clicks.length >= min_clicks) {
        let calculateBPM = calculateBPMFromClicks(clicks);
        alert("Your calculated BPM is: " + calculateBPM);
        clicks = [];
    }
}

function calculateBPMFromClicks(clicksTimestamps) {
    let totalInterval = 0;

    for (let i =1; i < clicksTimestamps.length; i++) {
        let interval = clicksTimestamps[i] - clicksTimestamps [i-1];
        
        totalInterval += interval;
    }
    let numIntervals = clicksTimestamps.length -1;
    let averageInterval = totalInterval / numIntervals;
    return Math.round(60000/averageInterval);
}