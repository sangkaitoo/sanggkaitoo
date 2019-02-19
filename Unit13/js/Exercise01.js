$(window).scroll(function() {
	if (window.scrollY > 72) {
		$('.navbar').eq(0).css("background", "#fff")
		$('.navbar').eq(0).css("box-shadow", "0 5px 20px #222")
		$('.navbar-brand').eq(0).css("color", "#222")
		$('.nav-link').eq(0).css("color", "#222")
		$('.nav-link').eq(1).css("color", "#222")
		$('.nav-link').eq(2).css("color", "#222")
		$('.nav-link').eq(3).css("color", "#222")
		$('#task-bar').removeClass('bar-white')
		$('#task-bar').addClass('bar-red')
	} else {
		$('.navbar').eq(0).css("background", "none")
		$('.navbar').eq(0).css("box-shadow", "none")
		$('.navbar-brand').eq(0).css("color", "rgba(255,255,255,.7)")
		$('.nav-link').eq(0).css("color", "rgba(255,255,255,.7)")
		$('.nav-link').eq(1).css("color", "rgba(255,255,255,.7)")
		$('.nav-link').eq(2).css("color", "rgba(255,255,255,.7)")
		$('.nav-link').eq(3).css("color", "rgba(255,255,255,.7)")
		$('#task-bar').addClass('bar-white')
		$('#task-bar').removeClass('bar-red')
	}
});

$(window).scroll(function() {
	if (window.scrollY >= 571 && window.scrollY < 1026) {
		for (var i = 0; i < $('.bar1').length; i++) {

			$('.bar1').eq(i).removeClass('active')
		}

		$('.bar1').eq(0).addClass('active')

	} else if (window.scrollY >= 1026 && window.scrollY < 1531) {

		for (var i = 0; i < $('.bar1').length; i++) {
			$('.bar1').eq(i).removeClass('active')
		}

		$('.bar1').eq(1).addClass('active')

	} else if (window.scrollY >= 1531 && window.scrollY < 2361) {

		for (var i = 0; i < $('.bar1').length; i++) {
			$('.bar1').eq(i).removeClass('active')
		}

		$('.bar1').eq(2).addClass('active')

	} else if (window.scrollY >= 2361) {

		for (var i = 0; i < $('.bar1').length; i++) {
			$('.bar1').eq(i).removeClass('active')
		}

		$('.bar1').eq(3).addClass('active')

	} else {

		for (var i = 0; i < $('.bar1').length; i++) {
			$('.bar1').eq(i).removeClass('active')
		}

	}
})