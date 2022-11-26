window.onload = function () {
  /**
   * 当鼠标在areaDiv移动的时候在showMessage中显示移动的鼠标
   */
  var areaDiv = document.getElementById("areaDiv");
  var showMessage = document.getElementById("showMessage");

  /**
   * 鼠标移动的时候触发
   */
  areaDiv.onmousemove = function () {
    alert("我动了");
  };
};
