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
  var index;
  document.body.addEventListener("keydown", (event) => {
  // Now, how can we check for which specific key was pressed?
  console.log( event.key + "was pressed")
  const key = event.key
  var codeCompare = codes
  if(event.key === codeCompare[0]){
    codeCompare.shift()
    if(codeCompare === null){

    }
  }


})
}
