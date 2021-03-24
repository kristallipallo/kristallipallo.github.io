var menu= document.getElementById("menu");
var menuBtn =document.getElementById("menuBtn");
var closeMenuBtn =document.getElementById("closeMenuBtn");


//Menu button click handler
menuBtn.onclick= function (){
    menu.classList.add("open");
    console.log("amwlk")
};

closeMenuBtn.onclick= function(){
    menu.classList.remove("open");
}