var text = document.getElementById('text')
		function simple() {
			text.style.fontSize = "1em"
		}

		function bigger() {
			var size = parseFloat(document.getElementById('text').style.fontSize.replace("em",""))
			text.style.fontSize = size*1.4 + "em"
		}

		function smaller() {
			var size = parseFloat(document.getElementById('text').style.fontSize.replace("em",""))
			text.style.fontSize = size*0.6 + "em"
		}