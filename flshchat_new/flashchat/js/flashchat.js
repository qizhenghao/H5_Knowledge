

/*页面加载完成之后执行*/
window.onload = function(){
    var u = navigator.userAgent, app = navigator.appVersion;
    window.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    window.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    window.itemArr = [];
  
    initListDom();

    initFooter();
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

    var testPlayUrl = ['http://renren.hlslive.ks-cdn.com/live/20161130130828684710/index.m3u8',
    'http://renren.hlslive.ks-cdn.com/live/20161130130828684710/index.m3u8',
    'http://renren.hlslive.ks-cdn.com/live/20161130130828684710/index.m3u8',
    'http://renren.hlslive.ks-cdn.com/live/20161130130828684710/index.m3u8'];
    for (var i = 0; i < chatMsgs.length; i++) {
        // chatMsgs[i].gifUrl = testPng[i%4];
        // chatMsgs[i].playUrl = testPlayUrl[i%4];
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

    	this.setListener = function(item) {
    		item.contentDiv.addEventListener('click', function(event) {
			switch(item.playType) {
				case 1://当前未播放，进行播放操作
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
                    rtmpUrl = item.info.playUrl;
                    hlsUrl = item.info.playUrl;
                    chatVideo.currentTime = 0;
                    reloadVideo();//已经执行了内部play方法
                    play(false);//所以此处不再需要执行内部play方法
					break;
				case 2://当前正在播放，进行暂停操作
					item.playType = 3;
					item.playImg.src = playIconUrl;
                    pause();
					break;
				case 3://当前暂停中，进行播放操作				
					item.playType = 2;
					item.contentDiv.style.backgroundColor = 'rgba(0,0,0,0)';
					item.playImg.src = pauseIconUrl;	
                    play(true);			
                    break;
                case 4://当前播放完成，进行播放操作
                    item.playType = 2;
                    item.playImg.src = pauseIconUrl;
                    play(true);
                    break;
			}
			currPlayItem = item;
			
		});
    	}

    	this.init = function(info, videoParam) {
    		this.info = info;
            this.videoParam = videoParam;
    		this.playImg.src = playIconUrl;
    		this.bgImg.src = info.gifUrl;
    		this.nameP.innerText = info.userName;
    		this.dateP.innerText = new Date(info.startTime).Format(fmtDate);
    		this.timeP.innerText = new Date(info.startTime).Format(fmtTime);
    		this.setListener(this);
    	}

    }

    itemLi.style.display = 'none';
    for (var i = 0; i < chatMsgs.length; i++) {
    	var node = itemLi.cloneNode(true);
    	node.style.display = 'inline-block';
        itemUl.appendChild(node);
        var videoParam = {
            idContainer:"flashchat_video", //div容器id
            hlsUrl: chatMsgs[i].playUrl, //rtmp播放地址
            posterImg:"", //封面图片地址
            callbackInit:videoInitCallback, //回调函数
            callbackPlay:videoPlayCallback,//播放开始回调
            callbackEnd:videoEndCallback, //播放结束函数
            callbackTime:cc, //当前播放时长
            callbackReturnList:closeWin,//视频源出问题事件
            isLive:0, //是否直播模式
            isDebug:0, //是否开启debug
            liveTimeNow:chatMsgs[i].startTime, //直播播放时长
            isFull:0,//0~正常尺寸 1~铺满
            isResize:1//0~不跟随窗口变化大小 1~变化大小
        };
    	var item = new Item(node);
        item.init(chatMsgs[i], videoParam);
        itemArr.push(item);
        if (i === chatMsgs.length-1) {
            loadScript(videoParam);
        }
    }

var playProgress = document.getElementById("playProgress");
    function cc(e){
        // playProgress.innerHTML=e;
    }
    function videoInitCallback() {
        console.log("videoInitCallback") ;
    }
    function videoPlayCallback() {
        console.log("videoPlayCallback") ;
    }
    function videoEndCallback() {
        console.log("videoEndCallback") ;
    }
    function closeWin(){
        console.log("播放源出问题!");
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

            setTimeout(function() {
                window.chatVideo = document.querySelector('video');
                bindEvent(chatVideo, "click", empty);
                bindEvent(progressWrap, "mousedown", videoSeek);
                bindEvent(chatVideo, 'ended', videoEnded);
                bindEvent(chatVideo, 'paused', videoPaused);
                itemArr[0].contentDiv.click();               
            }, 3000);
            
            function videoPaused() {
                currPlayItem.playType = 3;
                currPlayItem.playImg.src = playIconUrl;
            }

            function videoEnded() {
                currPlayItem.playType = 4;
                currPlayItem.playImg.src = playIconUrl;
            }

            // 控制video的播放
            function play(isPlay){
                // if ( chatVideo.paused || chatVideo.ended ){              
                    if ( chatVideo.ended ){ 
                        chatVideo.currentTime = 0;
                    } 
                    if (isPlay) {
                        // chatVideo.play();
                        player.play();
                    }
                    
                    // if (isiOS) {
                    //     setTimeout(function() {
                    //         chatVideo.play();
                    //         progressFlag = setInterval(getProgress, 60);
                    //     }, 100);
                    // } else {
                        progressFlag = setInterval(getProgress, 60);
                    // }                    
                // } 
            }

            function pause() {
                chatVideo.pause(); 
                clearInterval(progressFlag);
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

function initFooter() {
    var ua = window.navigator['userAgent'].toLowerCase(),
        IsAndroid = /Android|HTC/i.test(ua),
        IsIOS = !IsAndroid && /iPod|iPad|iPhone/i.test(ua),
        isWechat = ua.match(/MicroMessenger/i)=="micromessenger",
        isWeibo = ua.match(/weibo/i)=="weibo",
        isQQ = (ua.match(/qq/i)=="qq"),
        isChrome = ua.toLowerCase().match(/chrome/),
        scheme = {
            android: "renrenweb://2015.renren.com",   
            ios: "renrenapi://"  
        },
        download = {
            android: "http://3g.renren.com/ep.do?c=9100210",
            ios: "http://itunes.apple.com/cn/app/id316709252?mt=8",
            tencent: "http://a.app.qq.com/o/simple.jsp?pkgname=com.renren.mobile.android"
        };

    var downDom = document.querySelector('#download');
    downDom.addEventListener('click', function(){
        if(ua.match(/MicroMessenger/i)=="micromessenger"){
            window.location.href = download.tencent;
        }else if(ua.match(/weibo/i)=="weibo"&&IsIOS){
            window.location.href = download.tencent;
        }else{
            if(IsAndroid){
                window.location.href = download.android;
            }else if(IsIOS){
                window.location.href = download.ios;
            }else{
                window.location.href = download.tencent;
            }
        }
    });
}


