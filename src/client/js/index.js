require('bootstrap')

var beansSearch = document.querySelectorAll('.bg-beans');
if(beansSearch.length) {
  window.addEventListener('scroll', function () {
    var pcnt = document.body.scrollTop / document.body.scrollHeight * 3;
    beansSearch[0].style = "background-position-y: "+(pcnt * 100)+"%";
  })
}

var footerNewsletter = document.querySelectorAll('.footer-newsletter')
if (footerNewsletter.length) {
  footerNewsletter[0].addEventListener('submit', function() {
    setTimeout(function() {
      var success = document.createElement('h4')
      success.className = 'h2 text-center text-success my-5'
      success.innerText = "Thanks! We'll let you know when there's coffee available!"

      footerNewsletter[0].replaceWith(success)
    })

    return true
  })
}

var headerNewsletter = document.querySelectorAll('.header-newsletter')
if (footerNewsletter.length) {
  headerNewsletter[0].addEventListener('submit', function() {
    setTimeout(function() {
      var success = document.createElement('h4')
      success.className = 'h2 text-center text-white my-5'
      success.innerText = "Thanks! We'll let you know when there's coffee available!"

      headerNewsletter[0].replaceWith(success)
    })

    return true
  })
}
