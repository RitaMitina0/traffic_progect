$().ready(function(){
  var overlay = document.querySelector(".overlay");
  var buttonClose = document.querySelector(".button-close");
  var button = document.querySelector(".order__button");
  buttonClose.addEventListener("click", function () {
    event.preventDefault();
    overlay.style.display="none";
})

button.addEventListener("click", function () {

  if(overlay.style.display=="block"){
    overlay.style.display="none";
    } else {
    overlay.style.display="block";
    }
})
})