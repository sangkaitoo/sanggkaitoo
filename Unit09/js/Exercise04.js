for (var i = 1; i <= 7; i++) {
	for (var j = 1; j <= i; j++) {
		text1.innerHTML += `*`
	}
	text1.innerHTML += `<br>`
}
for (var i = 1; i <= 7; i++) {
	for (var j = 1; j <= 7; j++) {
		text2.innerHTML += `*`
	}
	text2.innerHTML += `<br>`
}

for (var i = 1; i <= 7; i++) {
	if (i == 1 || i == 7) {
		text3.innerHTML += `*******`
		text3.innerHTML += `<br>`
	}
	else {
		text3.innerHTML += `* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *`
		text3.innerHTML += `<br>`
	}
}

for (var i = 8; i >= 1; i--) {
	for (var j = 1; j < i; j++) {
		text4.innerHTML += `*`
	}
	text4.innerHTML += `<br>`
}