$(document).ready(function(){
  //function to print each result  
  function printResult (title,description,link){
    $("#results").append('<a class="link"href=#><div class="result"><h2></h2><p></p></div></a>');
    $("h2:last").text(title);
    $("p:last").text(description);
    $(".link:last").attr("href",link);
    $(".result").addClass("animated fadeIn")
  }
  
  //make search
  $("#search").click(function(){
    $(".alert").css("display","none"); //removes posible alert
    $(".result").remove(); //removes past results
    var input=$("#input").val(); 
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search="+input;
    $.getJSON(url,function(json){ //calls wikipedia api
      if (json[1][0]==undefined){$(".alert").css("display","block").addClass("animated fadeIn");}
      for (var i=0;i<10;i++){
        printResult(json[1][i],json[2][i],json[3][i]);
      }
       
    });
    
  });
  
  //close no results alert
  $(".alert").click(function(){
    $(".alert").css("display","none");
  });
  
});