var gridSize;

$(document).ready(function(){
  gridSize = 16;
  $(document.body).append("<div id='container'></div>");
  createGrid();
});

function createGrid(){
  for(var i = 0; i < gridSize; i++){
    for(var j = 0; j < gridSize; j++){
      $("#container").append("<div class='sketchgrid'></div>");
    }
    $("#container").append("<div class='clearboth'></div>");
  }

  $("div.sketchgrid").bind("mouseenter",function(){
    var oldColor = $(this).css("color");
    alert(oldColor);
  });

  var squareDim = (480/(gridSize));

  $("div.sketchgrid").css({"height":squareDim,"width":squareDim});
}

function resetGrid(){
  gridSize = parseInt(prompt("How many squares wide do you want the grid?","16"));
  $("#container").empty();
  createGrid();
}
