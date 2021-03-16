function myFunction(x) {
  x.classList.toggle("change");
}

window.onscroll = function() {myFunction()};


function myFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("kaart").className = "slideUp";
  }
}

function myFunction() {
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
	  document.getElementById("begin").className = "slideUp";
	}
  }

