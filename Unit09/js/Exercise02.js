function check() {
	var checkbox = document.getElementsByName('name')
	for (var i = 0; i < checkbox.length; i++) {
		checkbox[i].checked = true
	}
}

function uncheck() {
	var checkbox = document.getElementsByName('name')
	for (var i = 0; i < checkbox.length; i++) {
		checkbox[i].checked = false
	}
}