
var r = 500;

init();

function init() {
	var blocks = document.getElementsByClassName('block');
	var count = 2 * Math.PI * r / blocks.length;

	[].forEach.call(blocks, function (el) {
		el.style.backgroundColor = getRandomColor();
		el.style.transform = 'rotateY(' + 45 + 'deg)'
	})
}

function getRandomColor() {
	return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
}