var modal = document.getElementById('id01');

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

function checkname() {
	var	name = document.getElementsByName('uname')[0].value
	if (name == "" || name.length <= 8) {
		noti01.style.opacity ="1"
		return false
	} else {
		noti01.style.opacity ="0"
		return true
	}
}

function checkemail() {
	var email = document.getElementsByName('email')[0].value
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (email == "") { 
		noti03.style.opacity ="1"
		noti03.innerHTML = "Yêu cầu nhập email"
		return false
	}
	else if (!re.test(email)) { 
		noti03.style.opacity ="1"
		noti03.innerHTML = "Yêu cầu nhập đúng email"
		return false
	} 
	else {
		noti03.style.opacity ="0"
		return true
	}
}

function checkphone() {
	var phone = document.getElementsByName('number')[0].value
	var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
	if (phone == "") { 
		noti04.style.opacity ="1"
		noti04.innerHTML = "Yêu cầu nhập số điện thoại"
		return false
	}
	else if (!vnf_regex.test(phone)) { 
		noti04.style.opacity ="1"
		noti04.innerHTML = "Yêu cầu nhập đúng số điện thoại"
		return false
	} 
	else {
		noti04.style.opacity ="0"
		return true
	}
}

function checkstrong() {
	var pass = document.getElementsByName('psw')[0].value
	var strongpass = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
	var mediumpass = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
	var okpass = new RegExp("(?=.{6,}).*", "g");
	if (pass == "") {
		noti05.style.opacity ="1"
		noti05.style.color ="red"
		noti05.innerHTML = "Yêu cầu nhập mật khẩu"
		return false
	}
	else if (pass.length < 6) {
		noti05.style.opacity ="1"
		noti05.style.color ="red"
		noti05.innerHTML = "Mật khẩu phải lớn hơn 6 ký tự"
		return false
	}
	else if (strongpass.test(pass)) {
		noti05.style.opacity ="1"
		noti05.style.color ="#1000f7"
		noti05.innerHTML = "Độ mạnh bảo mật : Mạnh"
		return true
	}
	else if (mediumpass.test(pass)) {
		noti05.style.opacity ="1"
		noti05.style.color ="#6257f9"
		noti05.innerHTML = "Độ mạnh bảo mật : Trung bình"
		return true
	}
	else if (okpass.test(pass)) {
		noti05.style.opacity ="1"
		noti05.style.color ="#bfbbf9"
		noti05.innerHTML = "Độ mạnh bảo mật : Yếu"
		return true
	}
}

function checkpass() {
	var pass = document.getElementsByName('psw')[0].value
	var cfpass = document.getElementsByName('cfpsw')[0].value
	if(cfpass == "") {
		noti06.style.opacity ="1"
		return false
	}
	else if(pass !== cfpass) {
		noti06.style.opacity ="1"
		return false
	}
	else {
		noti06.style.opacity ="0"
		return true
	}
}

function check() {
	if (!checkname()) {
		alert('Mời bạn nhập lại tên')
	}
	else if (!checkemail()) {
		alert('Mời bạn nhập lại email')
	}
	else if (!checkphone()) {
		alert('Mời bạn nhập lại số điện thoại (theo đúng đầu số của các nhà mạng)')
	}
	else if (!checkstrong()) {
		alert('Mời bạn nhập lại mật khẩu')
	}
	else if (!checkpass()) {
		alert('Mời bạn xác nhận lại mật khẩu')
	}
	else {
		alert('Đăng kí thành công')
	}
}

document.getElementById('clear').addEventListener('click', function() {
	if (confirm('Bạn có chắc chắn muốn xóa hết?')) {
		document.getElementsByName('uname')[0].value = ""
		document.getElementsByName('email')[0].value = ""
		document.getElementsByName('number')[0].value = ""
		document.getElementsByName('psw')[0].value = ""
		document.getElementsByName('cfpsw')[0].value = ""
		for (var i = 0; i < 3; i++) {
			document.getElementsByName('sex')[i].checked = false
		}
	}
})