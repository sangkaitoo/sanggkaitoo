var button = document.getElementsByClassName('tab')
var contentshows = document.getElementsByClassName('text')

function showContent(id) {
	for (var i = 0; i < contentshows.length; i++) {
		// contentshows[i].style.display = "none"
		contentshows[i].style.opacity = "0"
	}
	var contentshow = document.getElementById(id)
	// contentshow.style.display = "block"
	contentshow.style.opacity = "1"
}

for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function(){
		var id = this.textContent.replace(" ", "");
		for (var i = 0; i < button.length; i++) {
			button[i].classList.remove("active")
		}
		this.className += " active"
		showContent(id)
	})
}

showContent('Tab1');