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
    var fmt = "yyyy-MM-dd";
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
    var term_validity_str = document.querySelector('.term_validity_str');
    var term_validity_str1 = document.querySelector('.term_validity_str1');
    var selectedGuo = document.querySelector('.guard_time_guo');

    var now = new Date();
    now.setFullYear(now.getFullYear()+3);
    var threeYearLater = now.Format(fmt);
    if ("0" == guardInfo.endTime) {
        now = new Date();
        document.querySelector('.anchor_info').style.paddingBottom = '0.4rem';
    } else {
        anchor_guarding.style.display = 'block';
        anchor_guarding_time.innerText = guardInfo.endTime;
        now = new Date(guardInfo.endTime);
        validTimeArr[0].style.display = 'none';
        term_validity_str1.style.display = 'none';
        term_validity_str.innerText = '继续开通守护将延至 ';
    }
    var nowStr = now.Format("yyyy-MM-dd"); 

    // window.guardInfo = {"guardName":"张静","guardHeadUrl":"http://hdn.xnimg.cn/photos/hdn521/20160829/1520/h_tiny_dj0Q_1a170004299e1986.jpg","wardName":"张静","wardHeadUrl":"http://hdn.xnimg.cn/photos/hdn521/20160829/1520/h_tiny_dj0Q_1a170004299e1986.jpg","startTime":0,"endTime":0,"diffTime":0};

   
     var priceDomArr = document.querySelectorAll('.price');
     var monthDomArr = document.querySelectorAll('.month');
     var discountArr = document.querySelectorAll('.guard_discount');
     for (var i = 0; i < payList.length ; i++) {
        priceDomArr[i].innerText = payList[i].price * payList[i].months;
        monthDomArr[i].innerText = payList[i].months;
        if (i > 0) {
            discountArr[i-1].innerText = payList[i].totalPrice;
            var img = document.createElement('img');
            img.src = 'http://s.xnimg.cn/wap/static/h5/guard/image/renrenguo_gold_icon.png';
            discountArr[i-1].appendChild(img);
        }
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
        
        var dayCount = payList[n].months * 31;
        var nextDate = addDate(now, dayCount);
        var nextDateStr = nextDate.Format("yyyy-MM-dd");
        if (compareDate(nextDateStr, threeYearLater)) {
            new Toast({context:$('body'),message:'守护同一主播最长为3年', left:'29%'}).show(); 
            selectedGuo.innerText = 0;
        } else {
            currIndex = n;
            d.style.borderColor = "#fdd600";
            validTimeArr[1].innerText = nextDateStr;
            selectedGuo.innerText = payList[n].totalPrice * 10;
        }
    }

    var unSelected = function(d) {
        d.style.borderColor = "#F2F2F2";
    }
     var guardDiv = document.querySelectorAll('.guard_time_list_div > ul > li >div:first-of-type');

     var setGuardDivGray = function(i) {
        guardDiv[i].style.backgroundColor = '#F2F2F2'
        guardDiv[i].querySelector('p > img').src = 'http://s.xnimg.cn/wap/static/h5/guard/image/renrenguo_gray_icon.png';
     }

     if (!compareDate(addDate(guardInfo.endTime, payList[0].months * 31).Format(fmt), threeYearLater)) {
        selected(guardDiv[0], 0);
     } else {
        setGuardDivGray(0);
        selectedGuo.innerText = 0;
        term_validity_str.innerText = '无法继续开通守护了, 最长守护为3年';
     }
     unSelected(guardDiv[1]);
     unSelected(guardDiv[2]);
     guardDiv[0].querySelector('p:first-of-type').style.textDecoration = "none";
     validTimeArr[0].innerText = nowStr;

     var initDiscount = function() {
        if (compareDate(addDate(guardInfo.endTime, payList[2].months * 31).Format(fmt), threeYearLater)) {
            setDiscountDomGray(discountArr[1], 2);
            if (compareDate(addDate(guardInfo.endTime, payList[1].months * 31).Format(fmt), threeYearLater)) {
                setDiscountDomGray(discountArr[0], 1);
            } 
        } 
     }
     var setDiscountDomGray = function(dom, i) {
        dom.style.backgroundImage = 'url(http://s.xnimg.cn/wap/static/h5/guard/image/select_down_gray_icon.png)';
        dom.style.color = '#C8C8C8';
        dom.querySelector('img').src = 'http://s.xnimg.cn/wap/static/h5/guard/image/renrenguo_gray_icon.png';
        setGuardDivGray(i);
     }
    initDiscount();

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

        if (compareDate(addDate(guardInfo.endTime, payList[currIndex].months * 31).Format(fmt), threeYearLater)) {
            new Toast({context:$('body'),message:'守护同一主播最长为3年', left:'29%'}).show(); 
            return;
        } 

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
                    term_validity_str.innerText = '继续开通守护将延至 ';
                } else {
                    now = new Date(guardInfo.endTime);
                }
                guardInfo.endTime = addDate(now, dayCount).Format("yyyy-MM-dd");
                anchor_guarding_time.innerText = guardInfo.endTime;
                now = new Date(guardInfo.endTime);
                validTimeArr[1].innerText = addDate(now, payList[currIndex].months * 31).Format("yyyy-MM-dd");
                document.querySelector('.anchor_info').style.paddingBottom = '0.1rem';
                if ("false" != isInvisible) {
                    window.wxc.xcConfirm("您目前已开启隐身查看直播功能，守护骑士特效无法展示，是否关闭隐身功能？", "关闭隐身", "暂不关闭", "custom", {
                        title:"温馨提示",
                        onOk:function(){
                            window.location.href = "renrenaction://purchase";
                    }});
                }
                new Toast({context:$('body'),message:'购买成功', left:'40%'}).show(); 
                initDiscount();
            } else {
                new Toast({context:$('body'),message:'未知错误', left:'40%'}).show(); 
            }
        }

        function fail(code) {
             window.wxc.xcConfirm("主人，你的人人果数量貌似不够支付这个守护哦", "跑去充值", "狠心离开", "custom", {onOk:function(){
                window.location.href = "renrenaction://purchase";
             }});
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







 /*
 * 使用说明:
 * window.wxc.Pop(popHtml, [type], [option ',' ])
 * popHtml:html字符串
 * type:window.wxc.xcConfirm.typeEnum集合中的元素
 * options:扩展对象
 * 用法:
 * 1. window.wxc.xcConfirm("我是弹窗<span>lalala</span>");
 * 2. window.wxc.xcConfirm("成功","success");
 * 3. window.wxc.xcConfirm("请输入","input",{onOk:function(){}})
 * 4. window.wxc.xcConfirm("自定义",{title:"自定义"})
 */
(function($){
    window.wxc = window.wxc || {};
    window.wxc.xcConfirm = function(popHtml, okStr, cancelStr, type, options) {
        var btnType = window.wxc.xcConfirm.btnEnum;
        var eventType = window.wxc.xcConfirm.eventEnum;
        var popType = {
            info: {
                title: "信息",
                icon: "0 0",//蓝色i
                btn: btnType.ok
            },
            success: {
                title: "成功",
                icon: "0 -48rem",//绿色对勾
                btn: btnType.ok
            },
            error: {
                title: "错误",
                icon: "-48rem -48rem",//红色叉
                btn: btnType.ok
            },
            confirm: {
                title: "提示",
                icon: "-48rem 0",//黄色问号
                btn: btnType.okcancel
            },
            warning: {
                title: "警告",
                icon: "0 -96rem",//黄色叹号
                btn: btnType.okcancel
            },
            input: {
                title: "输入",
                icon: "",
                btn: btnType.ok
            },
            custom: {
                title: "",
                icon: "",
                btn: btnType.okcancel
            }
        };
        var itype = type ? type instanceof Object ? type : popType[type] || {} : {};//格式化输入的参数:弹窗类型
        var config = $.extend(true, {
            //属性
            title: "", //自定义的标题
            icon: "", //图标
            btn: btnType.ok, //按钮,默认单按钮
            //事件
            onOk: $.noop,//点击确定的按钮回调
            onCancel: $.noop,//点击取消的按钮回调
            onClose: $.noop//弹窗关闭的回调,返回触发事件
        }, itype, options);
        
        var $txt = $("<p>").html(popHtml);//弹窗文本dom
        var $tt = $("<span>").addClass("tt").text(config.title);//标题
        var icon = config.icon;
        var $icon = icon ? $("<div>").addClass("bigIcon").css("backgroundPosition",icon) : "";
        var btn = config.btn;//按钮组生成参数
        
        var popId = creatPopId();//弹窗索引
        
        var $box = $("<div>").addClass("xcConfirm");//弹窗插件容器
        var $layer = $("<div>").addClass("xc_layer");//遮罩层
        var $popBox = $("<div>").addClass("popBox");//弹窗盒子
        var $ttBox = $("<div>").addClass("ttBox");//弹窗顶部区域
        var $txtBox = $("<div>").addClass("txtBox");//弹窗内容主体区
        var $btnArea = $("<div>").addClass("btnArea");//按钮区域
        
        var $ok = $("<a>").addClass("sgBtn").addClass("ok").text(okStr);//确定按钮
        var $cancel = $("<a>").addClass("sgBtn").addClass("cancel").text(cancelStr);//取消按钮
        var $input = $("<input>").addClass("inputBox");//输入框
        var $clsBtn = $("<a>").addClass("clsBtn");//关闭按钮
        
        //建立按钮映射关系
        var btns = {
            cancel: $cancel,
            ok: $ok
        };
        
        init();
        
        function init(){
            //处理特殊类型input
            if(popType["input"] === itype){
                $txt.append($input);
            }
            
            creatDom();
            bind();
        }
        
        function creatDom(){
            if ('' != config.title) {
                $popBox.append($ttBox.append($tt));
            }
            $popBox.append(
            //     $ttBox.append(
            //         $clsBtn
            //     ).append(
            //         $tt
            //     )
            // ).append(
                $txtBox.append($icon).append($txt)
            ).append(creatBtnGroup(btn)
            );
            $box.attr("id", popId).append($layer).append($popBox);
            $("body").append($box);
            if ('' != config.title) {
                document.querySelector('.popBox').style.height = '4rem';
                document.querySelector(".txtBox > p").style.paddingTop = '0.1rem';
            } else {
                document.querySelector('.popBox').style.height = '3.2rem';
                document.querySelector(".txtBox > p").style.paddingTop = '0.4rem';
            }
        }
        
        function bind(){
            //点击确认按钮
            $ok.click(doOk);
            
            //回车键触发确认按钮事件
            $(window).bind("keydown", function(e){
                if(e.keyCode == 13) {
                    if($("#" + popId).length == 1){
                        doOk();
                    }
                }
            });
            
            //点击取消按钮
            $cancel.click(doCancel);
            
            //点击关闭按钮
            $clsBtn.click(doClose);
        }

        //确认按钮事件
        function doOk(){
            var $o = $(this);
            var v = $.trim($input.val());
            if ($input.is(":visible"))
                config.onOk(v);
            else
                config.onOk();
            $("#" + popId).remove(); 
            config.onClose(eventType.ok);
        }
        
        //取消按钮事件
        function doCancel(){
            var $o = $(this);
            config.onCancel();
            $("#" + popId).remove(); 
            config.onClose(eventType.cancel);
        }
        
        //关闭按钮事件
        function doClose(){
            $("#" + popId).remove();
            config.onClose(eventType.close);
            $(window).unbind("keydown");
        }
        
        //生成按钮组
        function creatBtnGroup(tp){
            var $bgp = $("<div>").addClass("btnGroup");
            $.each(btns, function(i, n){
                if( btnType[i] == (tp & btnType[i]) ){
                    $bgp.append(n);
                }
            });
            return $bgp;
        }

        //重生popId,防止id重复
        function creatPopId(){
            var i = "pop_" + (new Date()).getTime()+parseInt(Math.random()*100000);//弹窗索引
            if($("#" + i).length > 0){
                return creatPopId();
            }else{
                return i;
            }
        }
    };
    
    //按钮类型
    window.wxc.xcConfirm.btnEnum = {
        ok: parseInt("0001",2), //确定按钮
        cancel: parseInt("0010",2), //取消按钮
        okcancel: parseInt("0011",2) //确定&&取消
    };
    
    //触发事件类型
    window.wxc.xcConfirm.eventEnum = {
        ok: 1,
        cancel: 2,
        close: 3
    };
    
    //弹窗类型
    window.wxc.xcConfirm.typeEnum = {
        info: "info",
        success: "success",
        error:"error",
        confirm: "confirm",
        warning: "warning",
        input: "input",
        custom: "custom"
    };

})(jQuery);

}
