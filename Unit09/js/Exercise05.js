var S = 0;

for(var i = 0; i < 10; i++ ){
	S += 2*i;
}

var text = document.getElementById('text')
text.innerHTML += `Tổng của 10 số chẵn đầu tiên là : ` + S