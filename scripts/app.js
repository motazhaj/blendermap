const feedbackText = document.getElementById("feedback");
const feedbackCounterValue = document.getElementById("feedbackCounter");

function calculateFeedbackCounter() {
  //get feedback text current length
  // when limit - current = 10 warning
  // when limit = current stop input
  const limit = feedbackText.getAttribute("maxLength");

  const textCounter = feedbackText.textLength;
  if (textCounter > limit - 11) {
    feedbackCounterValue.style.color = "red";
  } else {
    feedbackCounterValue.style.color = "white";
  }
  feedbackCounterValue.textContent = textCounter + "/" + limit;
}

feedbackText.addEventListener("input", calculateFeedbackCounter);
