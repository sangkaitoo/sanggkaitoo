function clickadd() {
	if ($('input')[0].value == "") {
		swal({
			title: "You need to write something before click 'Add'",
			icon: "error",
			button: "Understand!",
		});
	} else {
		if (wrapper2.innerHTML == "" || $('#wrapper2>div:last-child').attr('class').indexOf('outside1') == -1) {
			add($('input')[0].value, 'outside1')
			input.value = ""
		}
		else if ($('#wrapper2>div:last-child').attr('class').indexOf('outside1') != -1) {
			add($('input')[0].value, 'outside2')
			input.value = ""
		}
	}
}

var id = 1;
function add(text, outside) {
	wrapper2.innerHTML += `
	<div id="` + id + `" class=` + outside + `>
	<div class="content">
	<i class="fas fa-check"></i>
	<div><span title="Click" onclick="done(` + id + `)" class="text-do">` + upperCase(removeSpace(text)) + `</span></div>
	<span class="time">`+ time() +`</span>
	<span class="timeDone"></span>
	<i title="Done" class="far fa-check-circle" onclick="done(` + id + `)"></i>
	<i title="Edit" class="far fa-edit" onclick="editDo(` + id + `)"></i>
	<i title="Delete" class="far fa-trash-alt" onclick="removeDo(` + id + `)"></i>
	</div>
	</div>
	`
	id++;
}

function time() {
	var d = new Date()
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var date = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();

	m = checkTime(m);
	s = checkTime(s);
	date = checkTime(date);
	month = checkTime(month);

	return date +`/`+ month +`/`+ year + ` ` + h +`:`+ m +`:`+ s;
}

function checkTime(i) 
{
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function removeSpace(text) {
	return text.trim().replace(/\s+/g, " ");
}

function upperCase(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

function removeDo(id) {
	var n = $('.outside1').length
	var m = $('.outside2').length
	swal({
		title: "Are you sure?",
		text: "If you delete this, you can recover!",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
	.then((willDelete) => {
		if (willDelete) {
			if (n == 0 && m == 1) {
				wrapper2.innerHTML = null
			} else if (n == 1 && m == 0) {
				wrapper2.innerHTML = null
			} else {
				$('#' + id).remove()
			}
			swal("Successful deleted!", {
				icon: "success",	
			});
			editColor()
		} else {
			swal("You cancelled delete!");
		}
	});
}

function editColor() {
	// for (var i = parseInt(id) + 1; i <= wrapper2.children.length + 1; i++) {
	// 	if ($('#' + i).attr('class').indexOf('outside1') != -1) {
	// 		$('#' + i).removeClass("outside1").addClass("outside2")
	// 	} else if ($('#' + i).attr('class').indexOf('outside2') != -1) {
	// 		$('#' + i).removeClass("outside2").addClass("outside1")
	// 	}
	// }

	
	for (var i = 1; i <= $(".content").length; i++) {
		if (i % 2 == 0) {
			var content = $(".content").eq(i)
			content.parent().addClass("outside1")
			content.parent().removeClass("outside2")
		} else {
			var content = $(".content").eq(i)
			content.parent().addClass("outside2")
			content.parent().removeClass("outside1")
		}
	}
}

function editDo(id) {
	swal("Write what you want to do:", {
		content: "input",
		buttons: true,
		dangerMode: true,
	})
	.then((value) => {
		if (value == "") {
			editDo(id)
		} else if (value == null) {

		} 
		else {
			swal("Done", "", "success")
			$('#' + id + '>div>div>.text-do')[0].innerHTML = upperCase(value)
		}
	});
}

function done(id) {
	var c = $('#' + id)
	c.toggleClass("done")
	if (c.attr("class").indexOf("done") != -1) {
		$('#' + id +'>.content>.timeDone')[0].innerHTML = 'Done at : ' + time()
	}
	else {
		$('#' + id +'>.content>.timeDone')[0].innerHTML = ""
	}
	
}

function checkEnter() {
	if (event.keyCode === 13) {
		$("#button").click();
	}
}

function check() {
	if (event.keyCode == 13) {
		event.preventDefault();
	}
}