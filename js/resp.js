burger =document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.right-nav');


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class')
    navlist.classList.toggle('v-class')
    navbar.classList.toggle('h-nav');
    
})

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("email");
  
    /* Select the text field */
    copyText.select();
     /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
   
  }
    



