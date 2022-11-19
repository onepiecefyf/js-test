var cssDivDoc = document.getElementById("cssDiv");
cssDivDoc.style.width = "300Px";
cssDivDoc.style.height = "300px";
cssDivDoc.style.background = "wihte";
cssDivDoc.style.color = "#FFF";
cssDivDoc.style.opacity = "0.2";
cssDivDoc.style.filter = "alpha(opacity=20)";

cssDivDoc.onmouseover = function () {
  cssDivDoc.style.width = "300Px";
  cssDivDoc.style.height = "300px";
  cssDivDoc.style.background = "yellow";
  cssDivDoc.style.color = "#FFF";
  cssDivDoc.style.opacity = "0.2";
  cssDivDoc.style.filter = "alpha(opacity=20)";
  // cssDivDoc.innerHTML = "这是一个DIV";
};

cssDivDoc.onmouseleave = function () {
  cssDivDoc.style.width = "300Px";
  cssDivDoc.style.height = "300px";
  cssDivDoc.style.background = "green";
  cssDivDoc.style.color = "#FFF";
  cssDivDoc.style.opacity = "0.2";
  cssDivDoc.style.filter = "alpha(opacity=20)";
  // cssDivDoc.innerHTML = "这是一个DIV";
};

cssDivDoc.onclick = function () {
  cssDivDoc.style.width = "300Px";
  cssDivDoc.style.height = "300px";
  cssDivDoc.style.background = "pink";
  cssDivDoc.style.color = "#FFF";
  cssDivDoc.style.opacity = "0.2";
  cssDivDoc.style.filter = "alpha(opacity=20)";
  // cssDivDoc.innerHTML = "这是一个DIV";
};
