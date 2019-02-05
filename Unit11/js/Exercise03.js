function showHide(id) {
	for (var i = 0; i < $('.content').length; i++) {
		if ((i+1) == id) {
		} else {
			$('.content').eq(i).hide('normal');
			$('#' + (i+1)).removeClass('active');
		}
		$('#' + (i+1) + '>span').eq(0).css("display", "inline-block")
		$('#' + (i+1) + '>span').eq(1).css("opacity", "0")
	}
	$('#content' + id).toggle('normal')
	$('#' + id).toggleClass("active")
	$('#' + id + '>span').eq(0).css("display", "none")
	$('#' + id + '>span').eq(1).css("opacity", "1")
	Expanded()
}	

function Expanded() {
	if (!$('button').hasClass('active')) {
		for (var i = 0; i < $('.content').length; i++) {
			$('#' + (i+1) + '>span').eq(0).css("display", "inline-block")
			$('#' + (i+1) + '>span').eq(1).css("opacity", "0")
		}
	}
}