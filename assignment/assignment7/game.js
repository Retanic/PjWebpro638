window.onload = pageLoad;

function pageLoad() {
    var bottonStart = document.getElementById('start');
    bottonStart.onclick = startGame;
}

function startGame() {
	clearScreen();
    alert("Ready");
    addBox();
	timeStart();
	
}

function timeStart() {
    var TIMER_TICK = 1000;
    var timer = null;
    var min = 0.5; // 0.5 minute
    var second = min * 60;
    var x = document.getElementById('clock');

timer = setInterval(timeCount,1000);
    function timeCount() {
        var allbox = document.querySelectorAll("#squares-layer div");
		x.innerHTML = second;
		second --;
		if(second <= -1){
			alert("Timeout");
			clearInterval(timer);
			clearScreen();
		}
		if(allbox.length == 0){
			alert("Win");
			clearInterval(timer);
			clearScreen();
		}
    }
}

function addBox() {
    var numbox = document.getElementById('numbox').value; 
    var squaresLayer = document.getElementById('squares-layer') 
    var colorDrop = document.getElementById('color').value;
    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement('div');
        tempbox.className = "square";
        tempbox.id = "box" + i;
        tempbox.style.backgroundColor = colorDrop;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        //add element to HTML node
        squaresLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box) {
    let currentBoxInContainer = document.getElementById('squares-layer');
    //เมื่อกดแล้ว กล่องจะหายไป
    box.onclick = function() {
        currentBoxInContainer.removeChild(box);
    }
}



 function clearScreen(){
 	var allbox = document.querySelectorAll("#squares-layer div");
	//  var boxall = document.getElementById('squares-layer');

// 	//delete all  squares
 	for (var i=0;i<allbox.length;i++){
		// boxall.removeChild(allbox[i]);
		allbox[i].parentNode.removeChild(allbox[i]);
		
	}
 }





