

/*页面加载完成之后执行*/
window.onload = function(){
    var u = navigator.userAgent, app = navigator.appVersion;
    window.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    window.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    window.itemArr = [];
    window.chatVideo = document.querySelector('.chat_video');
    chatVideo.removeAttribute("controls");
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
	var playIconUrl = 'http://a.test.cn/wap/mobile/flashchat/image/play.png';

    var testPng = ['http://fmn.xnpic.com/fmn072/20161101/1845/xlarge_q7zE_32720000ba8f1e80.jpg', 
    'http://fmn.xnpic.com/fmn072/20161101/1845/xlarge_pr31_1ae00000a6381e84.jpg', 
    'http://fmn.xnpic.com/fmn071/20161101/1845/xlarge_VwDt_31f90000ba951e80.jpg',
    'http://fmn.rrimg.com/fmn075/20161101/1735/original_dbl3_91830000a4921e83.jpg'];

    var testPlayUrl = ['http://download.m.renren.com/download/video/101690_22756d1a4ad544a58623b9528ba1cb37_1478925268',
    'http://download.m.renren.com/download/video/101690_575bd701a6594e9d84569ba52a70b12b_1441674669',
    'http://download.m.renren.com/download/video/101690_22756d1a4ad544a58623b9528ba1cb37_1478925268',
    'http://download.m.renren.com/download/video/101690_575bd701a6594e9d84569ba52a70b12b_1441674669'];
    for (var i = 0; i < chatMsgs.length; i++) {
        chatMsgs[i].gifUrl = testPng[i%4];
        chatMsgs[i].playUrl = testPlayUrl[i%4];
    }

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
					chatVideo.poster = info.gifUrl;
					chatVideo.src = info.playUrl;					
					play();
					break;
				case 2://正在播放
					item.playType = 3;
					item.playImg.src = playIconUrl;
					play();
					break;
				case 3://暂停中					
					item.playType = 2;
					item.contentDiv.style.backgroundColor = 'rgba(0,0,0,0)';
					item.playImg.src = pauseIconUrl;
					play();					
                    break;
                case 4://播放完成
                    item.playType = 3;
                    item.playImg.src = pauseIconUrl;
                    play();
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

    itemLi.style.display = 'none';
    for (var i = 0; i < chatMsgs.length; i++) {
        // if (i===0) {
        //     var item = new Item(itemLi);
        //     item.init(chatMsgs[i]);
        //     itemArr.push(item);
        // } else {
        	var node = itemLi.cloneNode(true);
        	node.style.display = 'inline-block';
            itemUl.appendChild(node);
        	var item = new Item(node);
            item.init(chatMsgs[i]);
            itemArr.push(item);
        // } 
    }


    //init video 
    
            var progressWrap = document.getElementById("progressWrap");
            var playProgress = document.getElementById("playProgress");
            var fullScreenFlag = false;
            var progressFlag;

            function empty() {

            }
            // 原生的JavaScript事件绑定函数
            function bindEvent(ele, eventName, func){
                if(window.addEventListener){
                    ele.addEventListener(eventName, func);
                }
                else{
                    ele.attachEvent('on' + eventName, func);
                }
            }

            bindEvent(chatVideo, "click", empty);
            bindEvent(progressWrap, "mousedown", videoSeek);
            bindEvent(chatVideo, 'ended', videoEnded);

            function videoEnded() {
                currPlayItem.playType = 4;
                currPlayItem.playImg.src = playIconUrl;
            }

            // 控制video的播放
            function play(){
                if ( chatVideo.paused || chatVideo.ended ){              
                    if ( chatVideo.ended ){ 
                        chatVideo.currentTime = 0;
                    } 
                    chatVideo.play();
                    if (isiOS) {
                        setTimeout(function() {
                            chatVideo.play();
                            progressFlag = setInterval(getProgress, 60);
                        }, 100);
                    } else {
                        progressFlag = setInterval(getProgress, 60);
                    }                    
                } 
                else{ 
                    chatVideo.pause(); 
                    clearInterval(progressFlag);
                } 
            }

            // video的播放条
            function getProgress(){
                var percent = chatVideo.currentTime / chatVideo.duration;
                playProgress.style.width = percent * (progressWrap.offsetWidth/document.documentElement.clientWidth*10) + "rem";
            }
            // 鼠标在播放条上点击时进行捕获并进行处理
            function videoSeek(e){
                if(chatVideo.paused || chatVideo.ended){
                    play();
                    enhanceVideoSeek(e);
                }
                else{
                    enhanceVideoSeek(e);
                }

            }
            function enhanceVideoSeek(e){
                clearInterval(progressFlag);
                var length = e.pageX - progressWrap.offsetLeft;
                var percent = length / progressWrap.offsetWidth;
                playProgress.style.width = percent * (progressWrap.offsetWidth/document.documentElement.clientWidth*10) + "rem";
                chatVideo.currentTime = percent * chatVideo.duration;
                progressFlag = setInterval(getProgress, 60);
            }

}


