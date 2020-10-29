 /* JavaScript to toggle between showing and hiding accordion panel and assigning background color to the accordion buttons:*/
 var acc = document.getElementsByClassName("accordion");
 var i;
 
     for (i = 0; i < acc.length; i++) {
         acc[i].onclick = function(){
             this.classList. toggle("active");
             this.nextElementSibling.classList.toggle("show");
     }
 }