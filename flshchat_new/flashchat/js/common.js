
/**
 * Created by zhenghao.qi on 2016/10/10.
 */
/*定义一个全局变量*/
window.renren = {};

renren.commonLibArr = [];

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

/*加载libArr*/
// (function () {
//     var Loader = function () { }
//     Loader.prototype = {
//         require: function (scripts, callback) {
//             if (scripts.length === 0)
//                 return;
//             this.loadCount      = 0;
//             this.totalRequired  = scripts.length;
//             this.callback       = callback;
//             this.url = scripts;
//             this.writeScript(scripts[this.loadCount]);
//         },
//         loaded: function (e) {
//             this.loadCount++;
//             if(this.loadCount != this.totalRequired){
//                 this.writeScript(this.url[this.loadCount]);
//             }
//             if (this.loadCount == this.totalRequired && typeof this.callback == "function") this.callback.call();
//         },
//         writeScript: function (src) {
//             var self = this;
//             var s = document.createElement("script");
//             s.type = "text/javascript";
//             s.async = true;
//             s.src = src;
//             s.addEventListener("load", function (e) { self.loaded(e); }, false);
//             var head = document.getElementsByTagName("head")[0];
//             head.appendChild(s);
//         }
//     }
//     var l = new Loader();
//     l.require(libArr, function() { console.log("all scripts loaded");});
// })();

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
