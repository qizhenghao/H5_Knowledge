<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <title>等级说明</title>
    <link rel="stylesheet" href="./css/base.css"/>
    <link rel="stylesheet" href="./css/level.css"/>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
</head>
<body>
    <div class="level_layout">
       <div class="info_div">
            <div class="name_div">Hi, <span class="name"></span></div>
            <div class="level_div">
                <ul class="item_ul clearfix">
                    <li class="item_li">
                        <div>
                            <div class="level_title_div">
                                <img src="./image/level_1_icon.png">
                                <p>账号等级</p>
                            </div>
                            <div class="level_count_div"><span class="level_span"></span>级</div>
                            <div class="level_diff_div">距离升级还差 <span class="level_diff_span"></span></div>
                            <div class="total_exp_div">累计经验值 <span class="total_exp_span"></span></div>
                        </div>
                    </li>

                    <li class="item_li">
                        <div>
                            <div class="level_title_div">
                                <img src="./image/level_2_icon.png">
                                <p style="color: #ffffff;">魅力等级</p>
                            </div>
                            <div class="level_count_div"><span class="level_span"></span>级</div>
                            <div class="level_diff_div">距离升级还差 <span class="level_diff_span"></span></div>
                            <div class="total_exp_div">累计魅力值 <span class="total_exp_span"></span></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="line_div"></div>
        <div class="account_div">
            <div class="title_line_div">账户等级</div>
            <div class="line_div"></div>
            <ol>
              <li>等级越高图标越闪耀，万千观众你最瞩目！</li>
              <li>等级越高地位越高，尊贵身份一眼可见，主播更加青睐！</li>
              <li>给主播送礼是最快的升级方法，送礼越多升级越快。</li>
              <li>送礼还可获得主播更多关注，跻身土豪榜以及更高等级，一箭三雕！</li>
            </ol>
        </div>

        <div class="charm_div">
            <div class="line_div"></div>
            <div class="title_line_div">魅力等级</div>
            <div class="line_div"></div>
            <ol>
              <li>等级越高图标越华丽，万千主播你最尊贵！</li>
              <li>收获礼物、召集守护骑士是最快的升级方法。</li>
              <li>获得星光值越多，等级越高！</li>
            </ol>
        </div>
    </div>
      
    <script type="text/javascript">
    // var info = ${info};
    var info = {name:"琪琪",accountLevel:10,charmLevel:14,nextAccountLevel:10909,accountTotalExp:2222000,nextCharmLevel:2220,totalCharmExp:3329929};

    </script>
    <script src="./js/common.js"></script>
    <script src="./js/level.js"></script>
</body>
</html>