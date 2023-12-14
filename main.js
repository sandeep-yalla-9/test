var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var username = sandeep
  var password = welcome@1234
  var x = document.getElementsByClassName("image3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  username=sandeep
  password=welcome@1234
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
