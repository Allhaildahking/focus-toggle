const toggle = document.querySelector("#focusToggle");
const title = document.querySelector("#title");
const message = document.querySelector("#message");
const status = document.querySelector("#status");
const toggleText = document.querySelector("#toggleText");

const savedMode = localStorage.getItem("focusMode") === "true";

function setFocusMode(enabled) {
  document.body.classList.toggle("focus-mode", enabled);
  toggle.setAttribute("aria-pressed", enabled);

  if (enabled) {
    title.textContent = "Focus mode.";
    message.textContent = "The noise can wait. This is your time to work.";
    status.textContent = "Focus mode is on.";
    toggleText.textContent = "Exit Focus";
  } else {
    title.textContent = "Ready to focus?";
    message.textContent = "Remove the noise. Get one thing done.";
    status.textContent = "Focus mode is off.";
    toggleText.textContent = "Focus Mode";
  }

  localStorage.setItem("focusMode", enabled);
}

setFocusMode(savedMode);

toggle.addEventListener("click", () => {
  const isEnabled = document.body.classList.contains("focus-mode");
  setFocusMode(!isEnabled);
});
