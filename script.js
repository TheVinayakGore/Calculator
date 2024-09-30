const toggled = document.getElementById("toggleLight");
const body = document.querySelector("body");

toggled.addEventListener("click", function () {
  this.classList.toggle("fa-moon");
  if (this.classList.toggle("fa-mountain-sun")) {
    body.style.backgroundColor = "rgb(1, 0, 31)";
    body.style.color = "white";
    body.style.transition = "1s";
  } else {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "1s";
  }
});

let outPutScreen = document.getElementById("outPutScreen");

function display(num) {
    outPutScreen.value += num; 
}

function Calculate() {
    try {
        outPutScreen.value = eval(outPutScreen.value);
    } catch (err) {
        alert("Invalid")
    }
}

function Clear() {
    outPutScreen.value = " ";
}

function del() {
    outPutScreen.value = outPutScreen.value.slice(0,-1);
}



