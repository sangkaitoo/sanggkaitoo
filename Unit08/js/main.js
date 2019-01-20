var content = document.getElementById('text')

for (var i = 1; i <= 10; i++) {
	for (var j = 1; j < i; j++) {
		text.innerHTML += `*`
	}
	text.innerHTML += `<br>`
}