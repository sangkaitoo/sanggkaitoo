var contentshows = document.getElementsByTagName('img')
var check = document.getElementsByTagName('input')

function showImg(id) {
  for (var i = 0; i < contentshows.length; i++) {
    contentshows[i].style.opacity = "0"
  }
  var contentshow = document.getElementById(id)
  contentshow.style.opacity = "1"
}

function after() {
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked && i != 0){
      showImg(i)
      i--
      check[i].checked = true
    }
    else if (check[i].checked && i == 0) {
      showImg('10')
      check['9'].checked = true
      break;
    }
  }
}

function before() {
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked && i != 9){
      i++
      check[i].checked = true
      i++
      showImg(i)
    }
    else if (check[i].checked && i == 9) {
      showImg('1')
      check['0'].checked = true
      break;
    }
  }
}

function auto() {
  var a = 0;
  setInterval(function(){
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked) {
        a = i
      }
    }
    a++
    check[a].checked = true
    a++
    showImg(a);
  }, 10000);
}

showImg('1');