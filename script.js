let heart = document.getElementById("heart");
let answer = document.getElementById("answer");
let button = document.getElementById("button");
let crush = document.getElementById("crush");

let answers = [
  "Not tonight, but it's worth the wait.",
  "You're cute, but need to put a little more work in...keep trying.",
  "Poor WiFi connection, tonigh't future is unclear.",
  "Not in that outfit, go change!",
  "You wish!",
  "Outlook is good...clean up your room!",
  "Tonight your GETTIN' LUCKY!",
  "It's a surprise...you'll just have to wait and see.",
  "I can't know that, I'm only a dumb computer.",
];

let counter = 0;

button.addEventListener("click", function () {
  counter++;
  if (counter === 3) {
    return "No luck tonight!";
  } else if (crush.value.length < 1) {
    alert("Please enter the name of your crush.");
  } else {
    heart.innerText = "";
    for (let i = 0; i < 9; i++) {
      let answer = answers[Math.floor(Math.random() * answers.length)];
      document.getElementById("answer").innerHTML = answer;
    }
  }
});
