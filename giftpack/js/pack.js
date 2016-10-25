/**
 * ITCAST WEB
 * Created by zhousg on 2016/4/27.
 */


/*页面加载完成之后执行*/
window.onload = function(){
    
    initActiveBtn();

    initList();
    
    initBottomBtn();
    
};

function initActiveBtn() {
    var dialogId = 'dialogId_' + (new Date()).getDate();
    var $dialog = null;
    document.querySelector('.active_div').addEventListener('click', function(event) {
        if ($dialog == null) {
            $dialog = $("<div>").addClass("dialog_window");//弹窗插件容器
            var $dialog_layer = $("<div>").addClass("dialog_layer");//遮罩层
            var $dialog_box = $("<div>").addClass("dialog_box");//弹窗盒子
            var $dialog_box_img = $("<img>").addClass("dialog_box_img");
            var $cls_btn = $("<a>").addClass("cls_btn");//关闭按钮
            $dialog_box_img.attr('src', 'http://a.xnimg.cn/wap/mobile/giftpack/image/giftpack_dialog_bg.jpg');
            $dialog.attr("id", dialogId).append($dialog_layer).append($dialog_box.append($dialog_box_img).append($cls_btn));
            $("body").append($dialog);
            $dialog.fadeIn(300);
            $cls_btn.click(function() {
                $dialog.fadeOut();
            });
        } else {
            $dialog.fadeIn(300);
        }
    });
}

function initList(){

    if (typeof(halloweenInfo) == "undefined" || halloweenInfo.length === 0) {
        return;
    }

    var middleDiv = document.querySelector('.middle_div');
    var itemUl = document.querySelector('.item_ul');
    var itemLiArr = document.querySelectorAll('.item_li');

    function Item(itemDom) {
    this.name = itemDom.querySelector('.item_name');
    this.head = itemDom.querySelector('.item_head_img');
    this.totalNum = itemDom.querySelector('.item_ranking_num');
    this.giftNumList = itemDom.querySelectorAll('.item_gift_list > li > span');
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
        }
    }

    for (var i = 0; i < halloweenInfo.length; i++) {
        if (i!==0 && i%2===0) {
            var node = itemUl.cloneNode(true);
            middleDiv.appendChild(node);
            // itemLiArr.concat(node.querySelectorAll('.item_li'));
            itemLiArr = document.querySelectorAll('.item_li');
        }
        var itemLi = new Item(itemLiArr[i]);
        var itemInfo = halloweenInfo[i];
        itemLi.name.innerText = itemInfo.username;
        itemLi.head.src = itemInfo.userHeadUrl;
        itemLi.totalNum.innerText = itemInfo.count;
        for(var j = 0; j < itemInfo.giftDetailInfo.length; j++) {
            itemLi.giftNumList[j].innerText = itemInfo.giftDetailInfo[j].giftCount;
        }
    }
}

function initBottomBtn(){
    document.querySelector('.bottom_div').addEventListener('click', function(event) {
        window.location.href = "http://livevip.renren.com/giftpack/showGet";
    });
}

