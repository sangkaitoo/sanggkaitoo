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
	<span onclick="done(` + id + `)" class="text-do">` + upperCase(removeSpace(text)) + `</span>
	<span class="time">`+ time() +`</span>
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
	if (id == 1) {
		$('#' + id).remove()
		wrapper2 = ""
	} else {
		$('#' + id).remove()
	}
}

function editDo(id) {
	swal("Write what you want to do:", {
		content: "input",
	})
	.then((value) => {
		swal("Done", "", "success")
		$('#' + id + '>div>.text-do')[0].innerHTML = upperCase(value)
	});
}

function done(id) {
	$('#' + id).toggleClass("done")
}