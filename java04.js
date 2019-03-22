var start;

function ocultar(){
  /**console.log("Deu certo!");**/
  if (start == true) {
    document.getElementById("texto").style.display = "block";
    start = false;
  } else{
    document.getElementById("texto").style.display = "none";
    start = true;
  }
}


