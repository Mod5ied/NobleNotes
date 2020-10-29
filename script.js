 /* JavaScript to toggle between showing and hiding accordion panel and assigning background color to the accordion buttons:*/
 var acc = document.getElementsByClassName("drop-btn");
 var i;
 
     for (i = 0; i < acc.length; i++) {
         acc[i].onclick = function(){
             this.classList. toggle("active");
             this.nextElementSibling.classList.toggle("show");
     }
 }