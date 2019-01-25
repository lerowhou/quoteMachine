  var next = document.getElementById('new-quote');
  var text = document.getElementById('text');
  var auth = document.getElementById('author');


function getRandomInt() {
  return Math.floor(Math.random() * (57 - 0)) + 0;
}

function quote(){
  r = getRandomInt();
  text.innerHTML = data[r].text;
  auth.innerHTML = data[r].author;
}
window.onload=function(){
  setInterval(quote,3000);
}
