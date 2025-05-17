
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

window.addEventListener('scroll', function(){

    let scroll_Up = document.getElementById('scroll_up'); 

    if (window.pageYOffset >= 500) {

        scroll_Up.classList.remove('scroll_btn'); ///// for add class 
    }else{
        scroll_Up.classList.add('scroll_btn'); //// for remove class
        
    }
});