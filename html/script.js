window.onscroll = function() {myFunction()};




function myFunction() {
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
	  document.getElementById("begin").className = "slideUp";
	}
  }

