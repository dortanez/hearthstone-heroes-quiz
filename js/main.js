var heroes = [
	{
		image: "img/anduin.jpg",
		name: "anduin"
	},
	{	
		image: "img/garrosh.jpg",
		name: "garrosh"
	},
	{
		image: "img/guldan.jpg",
		name: "guldan"
	},
	{
		image: "img/jaina.jpg",
		name: "jaina"
	},
	{
		image: "img/malfurion.jpg",
		name: "malfurion"
	},
	{
		image: "img/rexxar.jpg",
		name: "rexxar"
	},
	{
		image: "img/thrall.jpg",
		name: "thrall"
	},
	{
		image: "img/uther.jpg",
		name: "uther"
	},
	{
		image: "img/valeera.jpg",
		name: "valeera"
	}

];

function submit () {

	var correct = 0;
	var wrong = 0;

	for(var i = 0; i < heroes.length; i++) {

		var answer = heroes[i].name;

		var guess = document.getElementById("answer" + [i]).value;

		var questionSpot = document.getElementById("image" + [i]);

		if(answer == guess) {

			questionSpot.className = "correct";


			correct++;

		} else {

			questionSpot.className = "wrong";
			wrong++;
		};


	};

	document.getElementById("correct").textContent = correct;
	document.getElementById("wrong").textContent = wrong;

}

