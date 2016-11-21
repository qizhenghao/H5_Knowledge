/******/ (function(modules) { // webpackBootstrap
/******/    // The module cache
/******/    var installedModules = {};

/******/    // The require function
/******/    function __webpack_require__(moduleId) {

/******/        // Check if module is in cache
/******/        if(installedModules[moduleId])
/******/            return installedModules[moduleId].exports;

/******/        // Create a new module (and put it into the cache)
/******/        var module = installedModules[moduleId] = {
/******/            exports: {},
/******/            id: moduleId,
/******/            loaded: false
/******/        };

/******/        // Execute the module function
/******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/        // Flag the module as loaded
/******/        module.loaded = true;

/******/        // Return the exports of the module
/******/        return module.exports;
/******/    }


/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;

/******/    // expose the module cache
/******/    __webpack_require__.c = installedModules;

/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "http://a.xnimg.cn/wap/static/h5/carshop/";

/******/    // Load entry module and return exports
/******/    return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

    __webpack_require__(2)     //gennerate by pms , don't delete
    var makeCarList = __webpack_require__(6);

    $(function(){
        $('.carlist-containner').html(makeCarList(window.carListdata));
        $('.img-containner img').on('load', function(){
            $(this).addClass('img-loaded');
        })

        $('.carlist-containner').on('click', '.use', function(e){
            var $this = $(this);
            var carId = $(this).closest('.car-item-containner').data('id');
            $.ajax({
                url: 'setUseCar',
                data: {carId: carId},
                dataType: 'json',
                type: 'POST',
                success: function(res){
                    if (res.result == 0){
                        if ($('.carlist-containner .stop').length){
                            $('.carlist-containner .stop').removeClass('stop').addClass('use').html('启用');
                        }
                        $('.useicon').remove();
                        $this.parents('.car-item-containner').append($('<div class="useicon"></div>'))
                        $this.removeClass('use');
                        $this.addClass('stop');
                        $this.html('停用');
                        toastfun(res.msg, 500);
                    }
                }
            })
        })

        $('.carlist-containner').on('click', '.stop', function(e){
            var $this = $(this);
            var carId = $(this).closest('.car-item-containner').data('id');
            var name =  $(this).parents('.car-item-containner').find('.title')[0].childNodes[0].nodeValue;

            new ConfirmBox({text:['主人, 你真的要停用', name, '嘛?'].join(''),btnInfo:[{text:"继续使用"},{text:"确认停用",callBack:function(){
                $.ajax({
                    url: 'setUseCar',
                    data: {carId: carId, specialState: 1},
                    dataType: 'json',
                    type: 'POST',
                    success: function(res){
                        if (res.result == 0){
                                $('.useicon').remove();
                                $this.removeClass('stop');
                                $this.addClass('use');
                                $this.html('启用');
                                toastfun(res.msg, 500);
                            }
                        }
                    })
                 }}]
            })
        })

        $('.recharge').on('click', function(){
            window.location.href = "renrenaction://purchase";
        })

        $('.carlist-containner').on('click', '.buy', function(e){
            var $btn = $(this);
            var carId = $(this).closest('.car-item-containner').data('id');
            var myCount = parseInt($('.header .total').html());
            var price = parseInt($(this).parents('.car-item-containner').find('.price').html());
            var $title = $(this).parents('.car-item-containner').find('.title');
            var diffTime = $(this).parents('.car-item-containner').data('difftime');
            var name = $(this).parents('.car-item-containner').find('.title')[0].childNodes[0].nodeValue;

            if(price > myCount){
                new ConfirmBox({
                    text: "主人，你的人人果数量貌似不够支付" + name +"哦～",
                    btnInfo: [{text: "狠心离开"},{text:"跑去充值", callBack: function(){
                        window.location.href = "renrenaction://purchase";
                    }}]
                })
            }
            else{
                new ConfirmBox({
                    text: ['花费',price,'果即可获得', name, '哦～'].join(''),
                    btnInfo: [{text:"我再想想"}, {text:'当然要买', callBack:function(){
                        if ($(this).hasClass('forbidden')){
                            return;
                        }
                        $this = $(this);
                        $this.addClass('forbidden');
                        $this.html('购买中');

                        $.ajax({
                            url: 'buyCar',
                            type: 'post',
                            dataType: 'json',
                            data: {carId: carId},
                            success: function(res){

                                $this.removeClass('forbidden');
                                switch(res.result){
                                    case 0:
                                        $('.header .total').html($('.header .total').html()-price);
                                        $title[0].outerHTML = makeCarTitle(1, diffTime + 31*24*60*60, $title[0].childNodes[0].nodeValue);
                                        $btn = $btn.parents('.action-btn-containner');
                                        $btn.html('<div class="btn xufei">续费</div><div class="btn use">启用</div>');
                                         $btn.parents('.car-item-containner').attr('data-difftime', 31*24*60*60);
                                        $('#confirmBoxContainer .content').html('购买成功');
                                        $('#confirmBoxContainer .btn')[0].innerHTML = '暂不使用';
                                        $('#confirmBoxContainer .btn')[1].innerHTML = '立即使用';
                                        $('#confirmBoxContainer .btn')[1].onclick = function(){
                                            $.ajax({
                                                url: 'setUseCar',
                                                data: {carId: carId},
                                                dataType: 'json',
                                                type: 'POST',
                                                success: function(res){
                                                    if (res.result == 0){
                                                        if ($('.carlist-containner .stop').length){
                                                            $('.carlist-containner .stop').removeClass('stop').addClass('use').html('停用');
                                                        }
                                                        $('.useicon').remove();
                                                        $btn.parents('.car-item-containner').append($('<div class="useicon"></div>'))
                                                        $btn.find('.use').removeClass('use').addClass('stop').html('停用');
                                                        toastfun(res.msg, 500);
                                                        $('#confirmBoxContainer').remove();
                                                    }
                                                }
                                            })
                                        }
                                        break;
                                    case 4:
                                        $('.header .total').html($('.header .total').html()-price);
                                        $btn = $btn.parents('.action-btn-containner');
                                        $('#confirmBoxContainer').remove();
                                        $btn.html('<div class="btn xufei">续费</div><div class="btn stop">停用</div>');
                                        toastfun("购买成功", 500);
                                        $('.useicon').remove();
                                        $btn.parents('.car-item-containner').append($('<div class="useicon"></div>'));

                                        $title[0].outerHTML = makeCarTitle(1, diffTime + 31*24*60*60, $title[0].childNodes[0].nodeValue);
                                        break;

                                    case 2,3:
                                         toastfun("服务器错误，错误代码：(" + res.result + ")", 500);
                                }
                            }
                        })
                    }}]
                })
            }
        })


        $('.carlist-containner').on('click', '.vipOwn', function(){
             new ConfirmBox({text:"开通直播会员即可免费获得该座驾", btnInfo:[{},{text:"成为会员", callBack:function(){
                window.location.href = "renrenaction://liveRoomVipForH5";
             }}]})
        })

        $('.carlist-containner').on('click', '.xufei', function(){
            var $btn = $(this);
            var carId = $(this).closest('.car-item-containner').data('id');
            var myCount = parseInt($('.header .total').html());
            var price = parseInt($(this).parents('.car-item-containner').find('.price').html());
            var $title = $(this).parents('.car-item-containner').find('.title');
            var diffTime = $(this).parents('.car-item-containner').data('difftime');
            var name = $(this).parents('.car-item-containner').find('.title')[0].childNodes[0].nodeValue;
            
            if(price > myCount){
                new ConfirmBox({
                    text: "主人，你的人人果数量貌似不够支付这个座驾哦～",
                    btnInfo: [{text: "狠心离开"},{text:"跑去充值", callBack: function(){
                        window.location.href = "renrenaction://purchase";
                    }}]
                })
            }
            else{
                new ConfirmBox({
                    text: ["花费",price,"果即可为", name, "续费哦～"].join(''),
                    btnInfo: [{text:"我再想想"}, {text:"马上续费", callBack:function(){
                        $this = $(this);
                        $this.addClass('forbidden');
                        $this.html('购买中');
                        $.ajax({
                            url: 'buyCar',
                            type: 'post',
                            dataType: 'json',
                            data: {carId: carId},
                            success: function(res){
                                if (res.result == 0){
                                    toastfun("续费成功", 500);
                                    $('#confirmBoxContainer').remove();
                                    $title[0].outerHTML = makeCarTitle(1, diffTime + 31*24*60*60, $title[0].childNodes[0].nodeValue);
                                    $btn.parents('.car-item-containner').attr('data-difftime', diffTime + 31*24*60*60);
                                }
                                else if (res.result == 2 || res.result == 3){
                                    toastfun("服务器错误，错误代码：(" + res.result + ")", 500);
                                }
                            }
                        })
                    }}]
                })
            }
        })
    })


    function makeCarTitle(isown, timeDiff, name, isCustome){
        if (isCustome) return ['<p class="title">', name, "</p>"].join('');

        if (timeDiff && timeDiff > 60*60*24){
            timeDiff = Math.floor(timeDiff/(60*60*24)) + "天";
        }
        else if(timeDiff && timeDiff < 60*60*24){
            timeDiff = "不足一天";
        }

        return isown ? ['<p class="title">', name, "<span>剩余 " , timeDiff ,"</span>" ,"</p>"].join('') : ['<p class="title">', name, "</p>"].join('');
    }

/***/ },
/* 2 */
/***/ function(module, exports) {

    // removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

    function makeCarList(data, isCustome){

        var listHTML = '';
        for (var i = 0; i < data.length; i++){
            listHTML += '<div class="car-item-containner" data-id="' + data[i].id + '"" data-difftime="' + data[i].timeDiff + '">';
            listHTML += makeCarImg(data[i].showUrl);
            listHTML += makeCarTitle(data[i].isOwn, data[i].timeDiff, data[i].name, data[i].accessType);
            listHTML += makeCarPrice(data[i].originalTokenCount, data[i].tokenCount, data[i].dayCount, data[i].accessType, window.isVip.isVip, data[i].type, data[i].activityDes);
            listHTML += makeCarDes(data[i].description);
            if (!isCustome) listHTML += makeBtnArea(window.isVip, data[i].isOwn, data[i].currentUse, data[i].accessType, data[i].type, data[i].buttonDes);
            listHTML += makeicon(data[i].type);
            listHTML += makeuseIcon(data[i].currentUse);
            listHTML += makeExprice(data[i].speedPercent);
            listHTML += "</div>";
        }
        return listHTML;
    }

    function makeCarImg(imgUrl){
        return ['<div class="img-containner"><img src = "', imgUrl , '"></div>'].join('');
    }

    function makeCarTitle(isown, timeDiff, name, isCustome){
        if (isCustome == 3) return ['<p class="title">', name, "</p>"].join('');

        if (timeDiff && timeDiff > 60*60*24){
            timeDiff = Math.floor(timeDiff/(60*60*24)) + "天";
        }
        else if(timeDiff && timeDiff < 60*60*24){
            timeDiff = "不足一天";
        }

        return isown ? ['<p class="title">', name, "<span>剩余 " , timeDiff ,"</span>" ,"</p>"].join('') : ['<p class="title">', name, "</p>"].join('');
    }

    function makeCarDes(des){
        return ['<p class="des">', des, '</p>'].join('');
    }

    function makeBtnArea(isVip, isOwn, currentUse, accessType, type, buttonDes){

        var btnAreaHTML = '<div class= "action-btn-containner">';

        if(type != 5) {
            if(accessType == 0){
                if (!isOwn){
                    return [btnAreaHTML, '<div class="btn-large buy">购买</div>', "</div>"].join('');
                }
                else{
                    return currentUse ? [btnAreaHTML, '<div class="btn xufei">续费</div><div class="btn stop">停用</div>', "</div>"].join('') : [btnAreaHTML, '<div class="btn xufei">续费</div><div class="btn use">启用</div>', "</div>"].join('');
                }
            }
            else if (accessType == 3){
                if (!isOwn){
                    return [btnAreaHTML, '<div class="btn-large vipOwn">会员专属</div>', "</div>"].join('');
                }
                else{
                    return currentUse ? [btnAreaHTML, '<div class="btn-large stop">停用</div>', "</div>"].join('') : [btnAreaHTML, '<div class="btn-large use">启用</div>', "</div>"].join('');
                }
            }
        }else {
            if (!isOwn){
                return [btnAreaHTML, '<div class="btn-large limitedOwn">', buttonDes, '</div>', "</div>"].join('');
            }
            else{
                return currentUse ? [btnAreaHTML, '<div class="btn-large stop">停用</div>', "</div>"].join('') : [btnAreaHTML, '<div class="btn-large use">启用</div>', "</div>"].join('');
            }
        }
    }

    function makeicon(type){
        //1普通 2高级 3会员 4双11 5限定
        switch(type){
            case 5:
                return '<div class="typeicon limited"></div>';
            case 4:
                return '<div class="typeicon doubleEleven"></div>';
            case 3: 
                return '<div class="typeicon vipicon"></div>';
                break;
            case 2:
                return '<div class="typeicon senior"></div>';
            case 1:
                return '';
                break;
        }
    }

    function makeExprice(exprice){
        return exprice ? ['<div class="exprice"><span>经验加成</span><i>', exprice ,'%</i></div>'].join('') : '';
    }

    function makeuseIcon(use){
        return use ? '<div class="useicon"></div>' : '';
    }

    function makeCarPrice(origin, price, count, accessType, isVip, type, activityDes){

        if(type != 5) {
            var origin = origin == price ? '' : "原价" + origin;

            if (accessType == 3){
                return isVip ? '<p class="price-count vip">会员专属</p>' : '<p class="price-count vip">开通会员即可获得</p>';
            }

            switch (count){
                case 31:
                    count = "月";
            }

            return ['<p class="price-count"><span class="price">', price, '</span>果/', count, '<span class="origin">', origin,'</span></p>'].join('');
        } else {
            return ['<p class="activityDes">', activityDes, '</p>'].join('');
        }
        
    }

    module.exports = makeCarList;

/***/ }
/******/ ]);