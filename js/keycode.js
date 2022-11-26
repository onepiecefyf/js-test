window.onload = function () {
  var div1 = document.getElementById("div1");
  document.onkeydown = function (event) {
    event = event || window.event;

    var speed = 100;
    switch (event.key) {
      case "ArrowRight":
        div1.style.left = div1.offsetLeft + speed + "px";
        break;
      case "ArrowLeft":
        div1.style.left = div1.offsetLeft - speed + "px";
        break;
      case "ArrowUp":
        div1.style.top = div1.offsetTop - speed + "px";
        break;
      case "ArrowDown":
        div1.style.top = div1.offsetTop + speed + "px";
        break;
      default:
        alert("不支持");
        break;
    }
  };
};
