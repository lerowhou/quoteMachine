  var next = document.getElementById('new-quote');
  var text = document.getElementById('text');
  var auth = document.getElementById('author');
  var n = data.length-1;

next.onclick = qu();
function qu(){
  var r = getRandomInt(data);
  text.innetHTML = data[r].text;
  auth.innetHTML = data[r].author;
}

function getRandomInt() {
  return Math.floor(Math.random() * (n - 0)) + 0;
}
