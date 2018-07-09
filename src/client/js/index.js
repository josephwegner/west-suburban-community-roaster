require('bootstrap')

window.addEventListener('scroll', function () {
  var pcnt = document.body.scrollTop / document.body.scrollHeight * 3;
  document.querySelectorAll('.bg-beans')[0].style = "background-position-y: "+(pcnt * 100)+"%";
});
