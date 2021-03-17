/* Toggle between adding and removing the "responsive" class to
topnav when the user clicks on the icon */
/*function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}*/

/*Changes the display of the menu*/
function myFunction() {
    var x = document.getElementById("myLinks");
    /*var y= document.getElementById("body");*/
    if (x.style.display === "block" &&  screen.width < 1200) {
      x.style.display = "none";
    } 
    else if (screen.width >=1200){
      x.style.display = "block";
    }
    else {
      x.style.display="block";
    }
    
}

/*  
    
    if (y.width >= "1026px")
    }*/

