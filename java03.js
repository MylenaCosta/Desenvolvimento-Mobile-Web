function altera(cor){
  switch (cor) {
  case "1":
    /**console.log("Goldenrod");**/
    var obj=document.getElementById('cor-background');
    obj.className='Goldenrod';
    break;
  case "2":
    /**console.log("MediumSlateBlue");**/
    var obj=document.getElementById('cor-background');
    obj.className='MediumSlateBlue';
    break;
  case "3":
    /**console.log("Violet");**/
    var obj=document.getElementById('cor-background');
    obj.className='Violet';
    break;
  case "4":
    /**console.log("LawnGreen");**/
    var obj=document.getElementById('cor-background');
    obj.className='LawnGreen';
    break;
  default:
    /**console.log("Opção inválida!");**/
    var obj=document.getElementById('cor-background');
    obj.className='Nulo';
}
}