window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("change").className = "wit";
  } else {
    document.getElementById("change").className = "";
  }
}

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

