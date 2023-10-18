// You can adjust these percentages as needed
const percentage1 = 40;
const percentage2 = 60;

const segment1 = document.getElementById("segment1");
const segment2 = document.getElementById("segment2");
const percentageLabel1 = document.getElementById("percentage1");
const percentageLabel2 = document.getElementById("percentage2");

// Calculate angles based on percentages
const angle1 = (percentage1 / 100) * 360;
const angle2 = (percentage2 / 100) * 360;

// Set the rotation angles for the segments
segment1.style.transform = `rotate(0deg)`;
segment2.style.transform = `rotate(${angle1}deg)`;

// Update the percentage labels
percentageLabel1.textContent = percentage1 + "%";
percentageLabel2.textContent = percentage2 + "%";
