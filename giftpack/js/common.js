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


//埋点
function dataStatistic(biz,view,opt,data) {
    $.ajax({
    url: "http://huodong.renren.com/config/st/ajax/statistic/" +biz+"/"+view+"/"+ opt,
    type: "POST",
    dataType: 'json',
    data: data,
    error: function() {
        console.log('error');
    },
    success: function(data) {
                console.log(data);
            }
    });
}
