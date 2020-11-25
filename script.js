/* JavaScript to toggle between showing and hiding accordion panel and assigning background color to the accordion buttons:*/
var acc = document.getElementsByClassName("drop-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}
/* JavaScript to toggle between showing and hiding the scrollable notes section*/
/*let hideFunction = () => {
  let toggle = document.getElementById("toggle");
  let content = document.getElementById("content");
  toggle.addEventListener("click", function () {
    content.classList.toggle("show");
  });
  toggle2.addEventListener("click", function () {
    content2.classList.toggle("show");
  });
};*/
let hideFunction = () => {
  let toggle = document.getElementById("toggle");
  let content = document.getElementById("content");
  if (toggle) {
    toggle.addEventListener("click", function () {
        content.classList.toggle("show");
    });
  }else if(toggle2){
    toggle2.addEventListener("click", function () {
        content2.classList.toggle("show");
    });
  }
};

