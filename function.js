function navFunction() {
  var x = document.getElementById("navBarDisplay");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

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
