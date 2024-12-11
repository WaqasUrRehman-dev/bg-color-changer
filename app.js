const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// console.log(buttons)

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click",function(e){
    console.log(e)
    console.log(e.target.id)
    // let target = 1
    switch (e.target.id) {
        case "grey":
            body.style.backgroundColor = e.target.id
            break;
        case "blue":
            body.style.backgroundColor = e.target.id
            break;
        case "yellow":
            body.style.backgroundColor = e.target.id
            break;
        case "white":
            body.style.backgroundColor = e.target.id
            break;
    
        default:
            break;
    }
  })
});
