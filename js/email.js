/**
 * email格式
 * cafebabyfeng@gmail.com.cn
 * cafebaby.feng@gmail.com.cn
 */
// var emailRexp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// console.log(emailRexp.test("cafegmail.co"));

/**
 * 找出所有电话号码
 * 13487699283
 */

var str = "jidgbiubgdasf935859918614046495oi8ytihtirhgi97909186140474980809inb";
var phoneRexp =
  "/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])d{8}$/";
phoneRexp = "/18614046495/g";
console.log(phoneRexp.match(str));
