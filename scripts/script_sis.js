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

