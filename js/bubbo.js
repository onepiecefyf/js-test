/**
 * 事件的冒泡
 *  - 事件向上传导、后代的事件被触发，祖先事件也会被触发
 */
window.onload = function () {
  /**
   * 为span绑定单击响应事件
   */
  var s1 = document.getElementById("s1");
  /**
   * event.cancelBubble = true;
   * 取消事件冒泡 event
   */
  s1.onclick = function (event) {
    event = event || window.event;
    alert("我是span单击响应事件");
    event.cancelBubble = true;
  };

  /**
   * 为box绑定单击响应事件
   */
  var box1 = document.getElementById("box1");
  box1.onclick = function () {
    alert("我是box1单击响应事件");
  };

  /**
   * 为body绑定单击响应事件
   */
  document.body.onclick = function () {
    alert("我是body单击响应事件");
  };
};
