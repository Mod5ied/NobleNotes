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
  if (toggle2) {
    toggle2.addEventListener("click", () => {
      content2.classList.toggle("show");
    });
  }
};
/* Javascript function to switch between show and hide for the dropdown*/
let dropHome = () => {
  let toggle = document.getElementById("home-btn");
  let content = document.getElementById("drop-content");

  toggle.addEventListener("click", () => {
    content.classList.toggle("hide");
  });
};


//Toggle "show/hide" component
Vue.component("toggler", {
  methods: {
    
  }
});
//Vue instance one
const App1 = new Vue({
  el: "#Vueapp1",
  methods: {},
});

//Vue instance two
const App1 = new Vue({
  el: "#Vueapp1",
  methods: {},
});

//Vue instance three
const App1 = new Vue({
  el: "#Vueapp1",
  methods: {},
});
