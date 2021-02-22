/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  timeString = timeString.split(":")
 let int = parseInt(timeString)
  if (int < 12) {
    return "Good Morning"
  } else if (int > 12 && int < 17) {
    return "Good Afternoon"
  } else if (int > 17) {
    return "Good Evening"
  }
};

function displayMessage(msg){
  let h1 = document.getElementById("greeting")
  h1.innerText = msg
};