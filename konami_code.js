const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  
  document.body.addEventListener("keydown", (event) => {
  // Now, how can we check for which specific key was pressed?
  alert("Hurray!" + event.key + "was pressed")
})
}
