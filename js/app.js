//Get the button:
mybutton = document.getElementById("myBtn");
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function hasClass(ele, cls) {
	return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}


document.getElementById("sun").addEventListener("click", function () {
	var r = document.querySelector(':root');
	// Get the styles (properties and values) for the root
	var rs = getComputedStyle(r);
	console.log(rs)
	const btn = document.getElementById('sun')
	const body = document.getElementById('body')
	const title = document.getElementById('title')

	console.log(title.style.backgroundColor = 'black')
	btn.classList.toggle('fa-sun');
	btn.classList.toggle('fa-moon');
	body.classList.toggle('bg-dark');
	body.classList.toggle('bg-light');
	body.classList.toggle('text-dark');
	body.classList.toggle('text-light');

});