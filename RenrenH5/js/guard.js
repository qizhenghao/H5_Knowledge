/**
 * ITCAST WEB
 * Created by zhousg on 2016/4/27.
 */


/*页面加载完成之后执行*/
window.onload = function(){
    /*解析*/
    payJson();
    
    setName();
    
};

function payJson(){
    
}

function setName(){
    // console.log(window.pay + '');
    
    // var pay = window.pay;
    var userName = document.querySelector('.user-name-text');
    userName.innerText = guardInfo.guardName;
    var anchor_name = document.querySelector('.anchor_name');
    anchor_name.innerText = '守护的主播：' + guardInfo.wardName;
    var anchor_head_img = document.querySelector('.anchor_head_img');
    anchor_head_img.src = guardInfo.wardHeadUrl;
    var leftGuoDom = document.querySelector('.user-guo-text');
    var anchor_guarding = document.querySelector('.anchor_guarding');
    var anchor_guarding_time = document.querySelector('.anchor_guarding_time');

    var validTimeArr = document.querySelectorAll('.term_validity_time');
    var term_validity_str1 = document.querySelector('.term_validity_str1');
    var selectedGuo = document.querySelector('.guard_time_guo');

    var now = 0; 
    if ("0" == guardInfo.endTime) {
        now = new Date();
    } else {
        anchor_guarding.style.display = 'block';
        anchor_guarding_time.innerText = guardInfo.endTime;
        now = new Date(guardInfo.endTime);
        validTimeArr[0].style.display = 'none';
        term_validity_str1.style.display = 'none';
        document.querySelector('.term_validity_str').innerText = '继续开通守护将延至 ';
    }
    var nowStr = now.Format("yyyy-MM-dd"); 

    // window.guardInfo = {"guardName":"张静","guardHeadUrl":"http://hdn.xnimg.cn/photos/hdn521/20160829/1520/h_tiny_dj0Q_1a170004299e1986.jpg","wardName":"张静","wardHeadUrl":"http://hdn.xnimg.cn/photos/hdn521/20160829/1520/h_tiny_dj0Q_1a170004299e1986.jpg","startTime":0,"endTime":0,"diffTime":0};

   
     var priceDomArr = document.querySelectorAll('.price');
     var monthDomArr = document.querySelectorAll('.month');
     for (var i = 0; i < payList.length ; i++) {
        priceDomArr[i].innerText = payList[i].price * payList[i].months;
        monthDomArr[i].innerText = payList[i].months;
     }
     

    function addDate(dd,dadd){
        var a = new Date(dd)
        a = a.valueOf()
        a = a + dadd * 24 * 60 * 60 * 1000
        a = new Date(a)
        return a;
    }

    var currIndex = 0;
    var lockIndex = 0;


    var selected = function(d, n) {
        currIndex = n;
        d.style.borderColor = "#fdd600";
        var dayCount = payList[n].months * 31;
        var nextDate = addDate(now, dayCount);
        var nextDateStr = nextDate.Format("yyyy-MM-dd");
        validTimeArr[1].innerText = nextDateStr;
        selectedGuo.innerText = payList[n].totalPrice * 10;
    }

    var unSelected = function(d) {
        d.style.borderColor = "#DDDEE3";
    }
     var guardDiv = document.querySelectorAll('.guard_time_list_div > ul > li >div');

     selected(guardDiv[0], 0);
     unSelected(guardDiv[1]);
     unSelected(guardDiv[2]);
     guardDiv[0].querySelector('p:first-of-type').style.textDecoration = "none";
     validTimeArr[0].innerText = nowStr;

     var a = 1;

     guardDiv[0].addEventListener('click', function(event) {
            for (var j= 0; j < guardDiv.length; j++) {
                if (j === 0) {
                    selected(guardDiv[j], j);
                } else {
                    unSelected(guardDiv[j]);
                }
            }
         } , false);
     guardDiv[1].addEventListener('click', function(event) {
            for (var j= 0; j < guardDiv.length; j++) {
                if (j === 1) {
                    selected(guardDiv[j], j);
                } else {
                    unSelected(guardDiv[j]);
                }
            }
         } , false);
     guardDiv[2].addEventListener('click', function(event) {
            for (var j= 0; j < guardDiv.length; j++) {
                if (j === 2) {
                    selected(guardDiv[j], j);
                } else {
                    unSelected(guardDiv[j]);
                }
            }
         } , false);

     var openBtn = document.querySelector('button');
     openBtn.addEventListener('click', function(event) {

        function success(resultStr) {
            var result = new Function("return" + resultStr)();
            var isInvisible = result.isInvisible
            console.log(result.msg);
            if (result.code == 0) {
                leftGuoDom.innerText = leftGuo - payList[lockIndex].totalPrice;
                var dayCount = payList[lockIndex].months * 31;
                
                if ('0' == guardInfo.endTime) {
                    anchor_guarding.style.display = 'block';
                    validTimeArr[0].style.display = 'none';
                    document.querySelector('.term_validity_str').innerText = '继续开通守护将延至 ';
                } else {
                    now = new Date(guardInfo.endTime);
                }
                guardInfo.endTime = addDate(now, dayCount).Format("yyyy-MM-dd");
                anchor_guarding_time.innerText = guardInfo.endTime;

                validTimeArr[1].innerText = addDate(new Date(guardInfo.endTime), payList[currIndex].months * 31);
                if (isInvisible) {

                }
            } else {

            }
        }

        function fail(code) {
             // new ConfirmBox({
             //        text: "主人，你的人人果数量貌似不够支付" + name +"哦～",
             //        btnInfo: [{text: "狠心离开"},{text:"跑去充值", callBack: function(){
             //            window.location.href = "renrenaction://purchase";
             //        }}]
             //    });
             
             // $.confirm({
             //        'title': "Title",
             //        'message': "Message",
             //        'buttons': {
             //            OkBtnCaption: {
             //                'class': 'blue',
             //                'action': function () { $('#' + ButtonID).click(); },
             //                'id': 'okBtn'
             //            },
             //            CancelBtnCaption: {
             //                'class': 'gray',
             //                'action': function () { },
             //                'id': 'cancelBtn'
             //            }
             //       }
             //    });
            
        }
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () { // 状态发生变化时，函数被回调
            if (request.readyState === 4) { // 成功完成
                // 判断响应结果:
                if (request.status === 200) {
                    // 成功，通过responseText拿到响应的文本:
                    return success(request.responseText);
                } else {
                    // 失败，根据响应码判断失败原因:
                    return fail(request.status);
                }
            } else {
                // HTTP请求还在继续...
            }
        }
        request.open('POST', 'http://livevip.renren.com/guardknight/payGuard');
        request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        var days = payList[currIndex].months * 31;
        var startCount = payList[currIndex].totalPrice * 10;
        var param = {guardId:guardId, wardId:wardId, days:days, price:payList[currIndex].price, startCount:startCount};
        lockIndex = currIndex;
        request.send(postDataFormat(param));
     }, false);
}
