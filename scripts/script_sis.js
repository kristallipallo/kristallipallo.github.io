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

/*Korjaan tätä koko ajan, tähän tulee torstaina illalla lisää muutoksia.
Tän menun saisi tehtyä myös laittamalla eventlistenerin tai lisäämällä html:ään "onresize"-listenerin.
Testaan sitä lisää torstaina 18.3.*/

function myFunction() {
    var x = document.getElementById("myLinks");
    /*var y= document.getElementById("body");*/
    if (x.style.display="block" && screen.width<1000) {
      x.style.display = "none";
      console.log("Feck");
    } 
    else if (screen.width >=1000){
      x.style.display = "block";
      console.log("Fuck");
    }
   else {
     x.style.display="initial";
     console.log("hell");
   }
}
