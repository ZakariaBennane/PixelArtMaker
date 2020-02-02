// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

var heightValue, widthValue, colorValue;

document.getElementById("inputHeight").addEventListener("change", function() {
      heightValue = document.getElementById("inputHeight").value;
});
document.getElementById("inputWidth").addEventListener("change", function() {
      widthValue = document.getElementById("inputWidth").value;
});
document.getElementById("colorPicker").addEventListener("click", function() {
      colorValue = document.getElementById("colorPicker").value;
});

document.querySelector("table").onclick = function(event) {
  let target = event.target; // where was the click?

  if (target.tagName != 'TD') return; // not on TD? Then we're not interested

  highlight(target); // highlight it
};


function makeGrid() {
  $( "tr" ).remove();
  	for (var i = 0; i < heightValue ; i++) {
         var tableR = document.createElement("tr");
         var table = document.getElementById("pixelCanvas");
         table.appendChild(tableR);
        for (var j = 0; j < widthValue ; j++) {
    	     var grid = document.createElement("td");
    		 tableR.appendChild(grid);
    	}
    }
}

function highlight (target) {
   $(target).css("background-color", colorValue);
}


