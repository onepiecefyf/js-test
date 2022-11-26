/**
 * BOM对象
 *   Window: 代表整个浏览器窗口 全局对象
 *   Navigator: 代表当前浏览器的信息
 *   Location: 获取地址栏信息，获取跳转的对象
 *   History: 获取当前浏览器的历史记录、由于隐私的原因，不能获取具体的历史记录，只可以操作当前浏览器向前或者向后
 *   Screen: 获取屏幕信息 显示器的相关信息
 */

var navigator = Navigator.name;
//   alert(navigator)

var userAgent = navigator.userAgent;
//   alert(userAgent)
