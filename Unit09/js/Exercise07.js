	function check1() {
		var n = document.getElementById('number').value
		var m = document.getElementById('number1').value
		var noti = document.getElementById('notification1')

		if (parseInt(m) <= parseInt(n)) {
			noti.innerHTML = "Bạn phải nhập số > " + n
		} else 
		noti.innerHTML = ""
	}

	function check2() {
		var n = document.getElementById('number').value
		var m = document.getElementById('number1').value
		var k = document.getElementById('number2').value
		var noti = document.getElementById('notification2')
		if (parseInt(k) <= parseInt(n) || parseInt(k) >= parseInt(m)) {
			noti.innerHTML = "Bạn phải nhập số trong khoảng " + n + " đến " + m + "!"
		}
		else {
			noti.innerHTML = ""
		}
	}
	function answer() {
		var n = parseInt(document.getElementById('number').value)
		var m = parseInt(document.getElementById('number1').value)
		var k = parseInt(document.getElementById('number2').value)
		var s = 0;
		if (m <= n) {
			alert('Bạn phải nhập m lớn hơn n')
		} else if (k <= n || k >= m) {
			alert('Bạn phải nhập k trong khoảng ' + n + " đến " + m + "!")
		} else {
			for (var i = n+1; i < m; i++) {
				if (i % k == 0) {
					s += i;
				}
			}
			alert('Tổng các số chia hết cho ' + k + ' trong khoảng ' + n + ' đến ' + m + ' là : ' + s)
		}
	}
