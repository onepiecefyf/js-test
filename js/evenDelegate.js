/**
 * 事件的委派机制
 *     事件的委派机制由事件的冒泡机制引入
 */
window.onload = function () {
  /**
   * 在最后一个超链接下追加超链接
   */
  var button = document.getElementById("button");
  button.onclick = function () {
    var ul = document.getElementById("ul");
    var li = document.createElement("li");
    li.innerHTML =
      "<li><a href='javascript:;' class='link'>新增加的超链接</a></li>";
    ul.appendChild(li);
  };

  /**
   * 最简单、当然也是最浪费资源的方式 并且之后再添加的话，不会触发单击事件
   * 为所有的超链接绑定单击响应事件
   *    1、获取所有的超链接
   *    2、 循环绑定单击响应事件
   */
  //   var aList = document.getElementsByTagName("a");
  //   for (var i = 0; i < aList.length; i++) {
  //     aList[i].onclick = function () {
  //       alert("这是一个超链接点击事件");
  //     };
  //   }

  document.getElementById("ul").onclick = function (event) {
    event = event || window.event;
    alert(event.target);
  };
};
