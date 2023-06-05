// responsiv nav bar function
function navFunction() {
  var x = document.getElementById("navBarDisplay");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

// read more function with read less collapse 
function myFunction() {
  var cut = document.getElementById("cut");
  var moreText = document.getElementById("extra");
  var btnText = document.getElementById("read-btn");

  if (cut.style.display === "none") {
    cut.style.display = "inline";
    btnText.innerHTML = "read more";
    moreText.style.display = "none";
  } else {
    cut.style.display = "none";
    btnText.innerHTML = "read less";
    moreText.style.display = "inline";
  }
}

// pop-up message function after adding item to cart
function added() {
  var message = document.getElementById("added-message");
  var overlay = document.getElementById("dimmer");
  message.classList.add("show");
  overlay.classList.add("show");

  var closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener("click", function () {
    message.classList.remove("show");
    overlay.classList.remove("show");
  });
}

// pop-up message function after placing order in check out 
function orderPlaced() {
  var message = document.getElementById("added-message");
  var overlay = document.getElementById("dimmer");
  message.classList.add("show");
  overlay.classList.add("show");

  var closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener("click", function () {
    message.classList.remove("show");
    overlay.classList.remove("show");
  });
}

