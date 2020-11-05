var player1draws = 0;
var player2draws = 0;
var player2cardsArray = []
var player1cardsArray = [];
PID("start").addEventListener("click", function () {
	
	PID("draw").style.display = "block";
	PID("startingscreen").style.display = "none";
	// draw begining 7 cards for players

	var times = 0
	var startingDraw = setInterval(function () {
		player1cardsArray.push(randomUnoCard(CardNames, "add", PID("player1cards"), "height:200px", 1, 1,true)[0])
		player2cardsArray.push(randomUnoCard(CardNames, "add", PID("player2cards"), "height:200px", 1, 2,true)[0])
		times++;
		if (times > 6) {
			clearInterval(startingDraw);
		}
	}, 400)
	setTimeout(function(){flipCards(2,false)},4000)
	//draw current card
	setTimeout(function () {
		curcard = randomUnoCard(CardNames, "replace", PID("middle"), "height:300px", 1, 0,true)
	}, 100);

})

function cardclicked(id){
	var idfiltered= id.replace("player","");
	var player = parseInt(idfiltered.charAt(0));
	var number= parseInt(idfiltered.substring(1));
	useCard(parseCard(player,number),player);
}

function draw() {
	if (parseInt(PID("curplayerholder").innerHTML) === 1) {

		if (player1draws < 3) {
			player1cardsArray.push(randomUnoCard(CardNames, "add", PID("player1cards"), "height:200px", 1, 1)[0])
			player1draws++;
			if (player1draws > 2) {
				PID("curplayerholder").innerHTML = 2 + "";
				flipCards(1,true)
			}
		}
	} else {
		if (player2draws < 3) {
			player2cardsArray.push(randomUnoCard(CardNames, "add", PID("player2cards"), "height:200px", 1, 2)[0])
			player2draws++;
			if (player2draws > 2) {
				PID("curplayerholder").innerHTML = 1 + "";
				flipCards(2,true)
			}
		}

	}

}
