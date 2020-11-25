
/* JavaScript to toggle between showing and hiding the scrollable notes section*/

let hideFunction = () => {
  let toggle = document.getElementById("toggle");
  let content = document.getElementById("content");
  let toggle2 = document.getElementById("toggle2");
  let content2 = document.getElementById("content2");
  if (toggle) {
    toggle.addEventListener("click", () => {
        content.classList.toggle("show");
    });
  }
  if(toggle2){
    toggle2.addEventListener("click", () => {
        content2.classList.toggle("show");
    });
  }
};

