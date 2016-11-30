<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <title>翁玉其和米米卡的闪聊</title>
    <link rel="stylesheet" href="http://s.test.cn/wap/mobile/flashchat/css/base.css"/>
    <!-- <link rel="stylesheet" href="./css/base.css"/> -->
    <link rel="stylesheet" href="http://s.test.cn/wap/mobile/flashchat/css/flashchat.css"/>
    <!-- <link rel="stylesheet" href="./css/flashchat.css"/> -->
</head>
<body>
    <div class="video_layout">
      <div class="video_content">
          <video class="chat_video" src="http://download.m.renren.com/download/video/101690_575bd701a6594e9d84569ba52a70b12b_1441674669" data-owner="477301324" data-ugc="517708" webkit-playsinline="true" preload="none" poster="http://a.test.cn/wap/mobile/flashchat/image/test.png" x-webkit-airplay="allow" class="loaded"></video>
      </div>

      <div class="video_bottom_bg">   
      </div>

      <div id="progressWrap">  
          <div id="playProgress"> </div>
      </div>
    </div>

    <div class="list_layout">
        <ul class="list_ul">
            <li class="item_li">
                <img class="item_img"></img>
                <div class="item_content">
                    <img class="item_state" src="http://a.test.cn/wap/mobile/flashchat/image/play.png">
                    <p class="item_name"></p>
                    <p class="item_date"></p>
                    <p class="item_time"></p>
                </div>  
            </li>
        </ul>

    </div>
        
    <footer>
        <div class="logo-show">上人人，加入我们玩转闪聊</div>
        <a class="down-button download banner open" id="download">下载APP</a>
    </footer>

    <script type="text/javascript" charset="utf-8">
        var chatMsgs = ${msgList};
    </script>
    <script src="http://s.test.cn/wap/mobile/flashchat/js/common.js"></script>
    <!-- <script src="./js/common.js"></script> -->
    <script src="http://s.test.cn/wap/mobile/flashchat/js/flashchat.js"></script>
    <!-- <script src="./js/flashchat.js"></script> -->
</body>
</html>
