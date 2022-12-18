

function func() {
  var target = document.getElementById("filesss");
  var check=document.getElementById("flexCheckDefault1");
  if (check.checked===true) {
    target.style.display = "block";
  }
  else {
    target.style.display = "none";

  }
}

function da(){
  var element = document.body;
   element.classList.toggle("darkmode");
}
