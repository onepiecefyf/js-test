var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].onfocus = function () {
    this.style.border = "2px solid red";
    this.style.backgroundColor = "#ccc";
  };

  lis[i].onblur = function () {
    this.style.border = "";
    this.style.backgroundColor = "";
  };
}
