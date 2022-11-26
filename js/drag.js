window.onload = function () {
  /**
   * 鼠标按下开始拖拽
   * 鼠标移动的时候拖拽的元素开始移动
   * 鼠标松开 拖拽的元素不再移动
   *
   * 全选带有文字会有错误
   */
  var div1 = document.getElementById("div1");

  //  鼠标按下开始拖拽;
  div1.onmousedown = function (event) {
    event = event || window.event;

    /**
     * 解决在div內、点击点总是在左上角的事故
     * div的偏移量 鼠标.clientX - 元素.offsetLeft
     */
    var oleft = event.clientX - div1.offsetLeft;
    var otop = event.clientY - div1.offsetTop;

    // 鼠标移动的时候拖拽的元素开始移动
    document.onmousemove = function (event) {
      event = event || window.event;
      var left = event.clientX - oleft;
      var top = event.clientY - otop;
      div1.style.left = left + "px";
      div1.style.top = top + "px";
    };

    /**
     * 存在一个问题就是：假如存在一个和我这个一模一样的div,就会导致我的按键松开之后，松开的事件处理没有生效
     */
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
};
