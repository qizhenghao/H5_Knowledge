
window.onload = function(){
    initDom();
    
};

function initDom(){
    // console.log(window.pay + '');
    var userName = document.querySelector('.anchor_name');
    userName.innerText = giftInfo.userName;

    var head = document.querySelector('.anchor_head_img');
    head.src = giftInfo.userHeadUrl;
    head.style.display = 'block';
 
    var getGiftCount = document.querySelector('.gfit_get_count');
    var sendGiftCount = document.querySelector('.gfit_send_count');
    getGiftCount.innerText = giftInfo.giftGetInfo[8].setCount;
    sendGiftCount.innerText = giftInfo.giftSendInfo.giftCount;
    
    var giftItems = document.querySelectorAll('.get_gift_list_item_gift_count');
    giftItems[0].innerText = giftInfo.giftGetInfo[0].giftCount;
    giftItems[1].innerText = giftInfo.giftGetInfo[1].giftCount;
    giftItems[2].innerText = giftInfo.giftGetInfo[2].giftCount;
    giftItems[3].innerText = giftInfo.giftGetInfo[3].giftCount;
    giftItems[4].innerText = giftInfo.giftGetInfo[4].giftCount;
    giftItems[5].innerText = giftInfo.giftGetInfo[5].giftCount;
    giftItems[6].innerText = giftInfo.giftGetInfo[6].giftCount;
    giftItems[7].innerText = giftInfo.giftGetInfo[7].giftCount;
    
}
