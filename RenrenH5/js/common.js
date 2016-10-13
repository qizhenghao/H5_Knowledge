/**
 * Created by zhenghao.qi on 2016/10/10.
 */
/*定义一个全局变量*/
window.renren = {};


(function (doc, win) {
            var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = (clientWidth / 10) + 'px';
            };
            if (!doc.addEventListener) 
                return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
            })(document, window);

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


 // post请求 
 // 格式化post 传递的数据 
 function postDataFormat(obj){     
    if(typeof obj != "object" ) {         
        alert("输入的参数必须是对象");
          return;
      }
  
      // 支持有FormData的浏览器（Firefox 4+ , Safari 5+, Chrome和Android 3+版的Webkit）
      // if(typeof FormData == "function") {
      //     var data = new FormData();
      //     for(var attr in obj) {
      //       var o = obj[attr];
      //         data.append(attr,obj[attr]);
      //     }
      //     return data;
      // }else {
          // 不支持FormData的浏览器的处理 
          var arr = new Array();
          var i = 0;
          for(var attr in obj) {
              arr[i] = encodeURIComponent(attr) + "=" + encodeURIComponent(obj[attr]);
             i++;
        }
        return arr.join("&");
    // }
 }

