"use strict";
const getTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const message = hours < 12 ? "Good morning" : "Good afternoon";
  document.getElementById("time").innerHTML = currentTime;
  document.getElementById("message").innerHTML = message;
}

document.getElementById("getTime").addEventListener("click", getTime);

  
  
// Function to return a greeting message based on the time of day
function getGreeting() {
    return function (user) {
      const currentTime = new Date();
      let message;
      if (currentTime.getHours() < 12) {
        message = "Good morning, " + user;
      } else {
        message = "Good afternoon, " + user;
      }
      return message;
    };
  }
  
  // Get references to the button, input field, and the div
  const greetingButton = document.getElementById("greeting-button");
  const userNameInput = document.getElementById("user-name");
  const greetingDisplay = document.getElementById("greeting-display");
  
  // Add an event listener to the button to call the getGreeting function when clicked
  greetingButton.addEventListener("click", function () {
    const userName = userNameInput.value;
    greetingDisplay.innerHTML = getGreeting()(userName);
  });
  