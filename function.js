function myFunction() {
    var x = document.getElementById("navBarDisplay");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }
  