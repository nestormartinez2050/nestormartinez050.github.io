const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

boton2.addEventListener("mouseover", function(){
  boton1.style.backgroundColor = "red";
});

boton2.addEventListener("mouseout", function(){
  boton1.style.backgroundColor = "";
});
