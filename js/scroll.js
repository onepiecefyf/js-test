/**
 * 向上滚动 变短
 * 向下滚动 变长
 */

window.onload = function (event) {
  event = event || window.event;

  window.addEventListener("DOMMousecroll", function (event) {});

  var div1 = document.getElementById("div1");
  div1.onmousewheel = function () {
    alert(event.detail);
    if (event.wheelDelta > 0 || event.detail < 0) {
      alert("向上");
    }
  };
};
