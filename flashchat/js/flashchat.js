

/*页面加载完成之后执行*/
window.onload = function(){
    window.itemArr = [];
    window.chatVideo = document.querySelector('.chat_video');

    initListDom();

};

function initListDom(){

    if (typeof(chatMsgs) == "undefined" || chatMsgs.length === 0) {
        return;
    }
	var fmtDate = "MM月dd日";
	var fmtTime = "hh:mm";
    var middleDiv = document.querySelector('.list_layout');
    var itemUl = document.querySelector('.list_ul');
    var itemLi = document.querySelector('.item_li');

    // var pauseIconUrl = './image/pause.png';
	// var playIconUrl = './image/play.png';
	var pauseIconUrl = 'http://a.test.cn/wap/mobile/flashchat/image/pause.png';
	var playIconUrl = 'http://a.test.cn/wap/mobile/flashchat/image/play.png';;

	var currPlayItem;
    function Item(itemDom) {
    	this.bgImg = itemDom.querySelector('.item_img');
    	this.contentDiv = itemDom.querySelector('.item_content');
    	this.playImg = itemDom.querySelector('.item_state');
    	this.playType = 1;
    	this.nameP = itemDom.querySelector('.item_name');
    	this.dateP = itemDom.querySelector('.item_date');
    	this.timeP = itemDom.querySelector('.item_time');

    	this.setListener = function(item, info) {
    		item.contentDiv.addEventListener('click', function(event) {
			switch(item.playType) {
				case 1://未播放
					if (typeof currPlayItem != 'undefined') {
						//reset 当前播放的
						currPlayItem.playType = 1;
						currPlayItem.contentDiv.style.backgroundColor = 'rgba(0,0,0,0.6)';
						currPlayItem.playImg.src = playIconUrl;
					}					
					//set 将要播放的
					item.playType = 2;
					item.contentDiv.style.backgroundColor = 'rgba(0,0,0,0)';
					item.playImg.src = pauseIconUrl;
					//让video播放吧
					// chatVideo.poster = './image/test.png';
					chatVideo.src = info.playUrl;					
					chatVideo.play();
					break;
				case 2://正在播放
					chatVideo.pause();
					item.playType = 3;
					// item.contentDiv.style.backgroundColor = 'rgba(0,0,0,0.6)';
					item.playImg.src = playIconUrl;
				case 3://暂停中
					chatVideo.play();
					item.playType = 2;
					item.contentDiv.style.backgroundColor = 'rgba(0,0,0,0)';
					item.playImg.src = pauseIconUrl;
				break;
			}
			currPlayItem = item;
			
		});
    	}

    	this.init = function(info) {
    		this.info = info;
    		this.playImg.src = playIconUrl;
    		this.bgImg.src = info.gifUrl;
    		this.nameP.innerText = info.userName;
    		this.dateP.innerText = new Date(info.startTime).Format(fmtDate);
    		this.timeP.innerText = new Date(info.startTime).Format(fmtTime);
    		this.setListener(this, info);
    	}

    }

    for (var i = 0; i < chatMsgs.length; i++) {
        if (i===0) {
            var item = new Item(itemLi);
            item.init(chatMsgs[i]);
            itemArr.push(item);
        } else {
        	var node = itemLi.cloneNode(true);
            itemUl.appendChild(node);
        	var item = new Item(node);
            item.init(chatMsgs[i]);
            itemArr.push(item);
        } 
    }
}

