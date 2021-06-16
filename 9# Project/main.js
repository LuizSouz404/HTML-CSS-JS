var results = '';

function myFunction() {
  var x, i;
  x = document.querySelectorAll(".date");
  for (i = 0; i < x.length; i++) {
    results = `${results} ${x[i].value}`;
  }
  return results
};

var x = setInterval(function setCount(result) {
  var test = results
  
  
  if(results=='') {
    return document.getElementById('result').innerText = 'Waiting for a date';
  }
  
  var countdown = new Date(test).getTime()

  var now = new Date().getTime();

  var count = countdown - now

  var days = Math.floor(count / (1000 * 60 * 60 * 24))
  var hours = Math.floor((count % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
  var minutes = Math.floor((count % (1000 * 60 * 60))/(1000 * 60))
  var seconds = Math.floor((count % (1000 * 60 ))/(1000 ))

  var result = (`D ${days} H ${hours} M ${minutes} S ${seconds}`)

  document.getElementById("result").innerText = result
}, 1000)
