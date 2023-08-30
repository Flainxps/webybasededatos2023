$(document).ready(function (){
  $("boton1").on("cilck",function(){
    $("#texto").html("new soup MMMMMMMMM");
  });
  
  $("texto1").hover(function(){
    $(this).css("background-color", "cyan");
    $(this).css("font-size", "50px");

  },function(){
    
  }
  )
})