<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>座驾商城</title>
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no"/>
    <script src = "http://s.xnimg.cn/a86583/wap/static/h5/carshop/libs.js"></script>
    <link rel="stylesheet" href="carshop.css"/>
</head>
<body>
    <div class="header">
        <div class="left">
            <span>剩余</span>
            <i class="renrenguo"></i>
            <span class="total">${count}</span>
        </div>
        <div class="right">
            <div class="recharge">充值</div>
            <div class="sig">
            </div>
        </div>
    </div>
    <div class="carlist-containner">
            
    </div>
</body>
<script>
    window.carListdata = [];
    // window.carlistPreformat = ${data};
    window.carlistPreformat = [{"id":9,"name":"龙的名字","description":"此处是龙的描述区，限时经验翻倍~","showUrl":"http://fmn.rrimg.com/fmn072/attachment/20160927/1420/a_TUDd_06e10000d2121e80.png","showGif":"http://fmn.rrimg.com/fmn080/attachment/20160927/1225/a_iDCG_77af00040f431e83.gif","tokenCount":300,"dayCount":31,"type":5,"activityDes":"创想活动第一名获得","buttonDes":"活动获得","accessType":3,"speedPercent":0,"originalTokenCount":0,"isOwn":0,"currentUse":0,"timeDiff":0},{"id":9,"name":"“极速”蜗牛","description":"骑着萌萌哒的小蜗牛，再也不用步行进入直播间咯！","showUrl":"http://fmn.rrimg.com/fmn072/attachment/20160927/1420/a_TUDd_06e10000d2121e80.png","showGif":"http://fmn.rrimg.com/fmn080/attachment/20160927/1225/a_iDCG_77af00040f431e83.gif","tokenCount":300,"dayCount":31,"type":3,"accessType":3,"speedPercent":0,"originalTokenCount":0,"isOwn":0,"currentUse":0,"timeDiff":0},{"id":11,"name":"羊驼驼","description":"lalala~♪我~是~呆~呆~的~羊~驼~驼~","showUrl":"http://fmn.rrimg.com/fmn073/attachment/20160927/1420/a_b7zn_38670000d47e1e7f.png","showGif":"http://fmn.rrimg.com/fmn080/attachment/20160928/2005/a_X6c0_8a9d0004312e1e80.gif","tokenCount":799,"dayCount":31,"type":1,"accessType":0,"speedPercent":0,"originalTokenCount":1080,"isOwn":0,"currentUse":0,"timeDiff":0},{"id":13,"name":"独角兽","description":"要圣光不要污，人家可是正经的独角兽！","showUrl":"http://fmn.rrimg.com/fmn076/attachment/20160927/1415/a_dbvb_7783000411b31e83.png","showGif":"http://fmn.rrimg.com/fmn080/attachment/20160927/1230/a_lXj9_d4d60006cc8f1e84.gif","tokenCount":1799,"dayCount":31,"type":1,"accessType":0,"speedPercent":0,"originalTokenCount":1799,"isOwn":0,"currentUse":0,"timeDiff":0},{"id":19,"name":"阿拉丁魔毯","description":"我来自波斯。不是印度～不是印度～不是印度～","showUrl":"http://fmn.rrimg.com/fmn078/attachment/20160927/1555/a_dHMl_7783000413cb1e83.png","showGif":"http://fmn.rrimg.com/fmn080/attachment/20160927/1540/a_EPWa_8b260004144a1e80.gif","tokenCount":3699,"dayCount":31,"type":1,"accessType":0,"speedPercent":5,"originalTokenCount":3699,"isOwn":0,"currentUse":0,"timeDiff":0},{"id":15,"name":"自由之翼","description":"高傲的灵魂，从不停下追逐自由的脚步。","showUrl":"http://fmn.rrimg.com/fmn072/attachment/20160927/1420/a_sFfW_06470000d1fa1e80.png","showGif":"http://fmn.rrimg.com/fmn080/attachment/20161108/1405/a_7aqh_920200017d191e83.gif","tokenCount":6799,"dayCount":31,"type":1,"accessType":0,"speedPercent":8,"originalTokenCount":6799,"isOwn":0,"currentUse":0,"timeDiff":0},{"id":17,"name":"私人游艇","description":"土豪的人生，不需要解释。","showUrl":"http://fmn.rrimg.com/fmn073/attachment/20160927/1415/a_qRzn_2c12000bc6801e84.png","showGif":"http://fmn.rrimg.com/fmn080/attachment/20161108/1405/a_T71c_1b2200017d841e84.gif","tokenCount":8888,"dayCount":31,"type":1,"accessType":0,"speedPercent":10,"originalTokenCount":16800,"isOwn":0,"currentUse":0,"timeDiff":0}];
    window.vipcarList = [];
    window.useCar = [];
    window.isVip = {"isVip":0};
    // window.isVip = ${vipInfo};

    //暂时写死

    var priceText = {11: 1080, 17: 16800};
    
    carlistPreformat.forEach(function(e,i){
        if (priceText[e.id]){
            e.costPrice = priceText[e.id];
        }
    })

    ~function(){
        for(var ki = 0; ki < carlistPreformat.length; ki++)
        {
            if (carlistPreformat[ki].currentUse == 1){
                useCar.push(carlistPreformat.splice(ki,1)[0]);;
                ki--;
                continue;
            }
            if (carlistPreformat[ki].accessType == 3){
                vipcarList.push(carlistPreformat.splice(ki,1)[0]);
                ki--;
                continue;
            }
            if (carlistPreformat[ki].isOwn){
                var item = carlistPreformat.splice(ki,1)[0];
                ki--;
                if(!carListdata.length){
                    carListdata.push(item);
                }
                else{
                    var clength = carListdata.length;
                    carListdata.forEach(function(e,i){
                        if (carListdata.length > clength){

                        }
                        else if(e.tokenCount < item.tokenCount){
                            carListdata.splice(i,0,item);
                        }
                    })
                }
            }
        }
    }()

    window.carListdata = useCar.concat(window.carListdata,  window.vipcarList,  window.carlistPreformat);

</script>
<script src = "carshop.js"></script>
</html>
