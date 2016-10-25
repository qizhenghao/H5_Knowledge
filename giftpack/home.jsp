<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <title>百变南瓜趴“鬼”混万圣节</title>
    <link rel="stylesheet" href="http://s.xnimg.cn/wap/mobile/giftpack/css/base.css"/>
    <link rel="stylesheet" href="http://s.xnimg.cn/wap/mobile/giftpack/css/pack.css"/>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
</head>
<body>
    <div class="giftpack_layout">
       <div class="top_div"><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/giftpack_top_bg.jpg">
            <div class="active_div"></div>
       </div>
       <div class="middle_div">
            <ul class="item_ul clearfix" style="background-image: url('http://a.xnimg.cn/wap/mobile/giftpack/image/giftpack_item_bg.jpg');">
                <li class="item_li">
                    <ul class="item_user_info">
                        <li><img class="item_head_img"></li>
                        <li>
                            <p class="item_name"></p>
                            <p class="tao"><span class="item_ranking_num"></span> 套</p>
                        </li>
                    </ul>
                    <ul class="item_gift_list">
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/skeleton_hand_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/skeleton.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/bat_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/cat_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/pumpkin_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/candy_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/gharry_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/castle_icon.png"><span></span></li>
                    </ul>

                </li>

                <li class="item_li">
                    <ul class="item_user_info">
                        <li><img class="item_head_img"></li>
                        <li>
                            <p class="item_name"></p>
                            <p class="tao"><span class="item_ranking_num"></span> 套</p>
                        </li>
                    </ul>
                    <ul class="item_gift_list">
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/skeleton_hand_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/skeleton.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/bat_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/cat_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/pumpkin_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/candy_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/gharry_icon.png"><span></span></li>
                        <li><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/castle_icon.png"><span></span></li>
                    </ul>
                </li>
            </ul>

        </div>
        <div class="bottom_div"><img src="http://a.xnimg.cn/wap/mobile/giftpack/image/giftpack_bottom_btn_bg.jpg"></div>
    </div>
    <script type="text/javascript">
    var halloweenInfo = ${halloweenInfo};
//         var halloweenInfo = [{"username":"麻辣酸奶","userHeadUrl":"http://hdn.xnimg.cn/photos/hdn521/20161019/0935/h_tiny_3lwJ_a67b00000c26195a.jpg","userid":473148987,"count":171,"rankNumber":1,
// "giftDetailInfo":[{"giftId":"155","giftName":"僵尸之手","giftUrl":"http://fmn.rrimg.com/fmn078/20161021/1905/original_QXAc_3f7f000307b91e83.png","giftCount":"291"},
// {"giftId":"157","giftName":"2号","giftUrl":"http://fmn.rrimg.com/fmn078/20161017/1430/original_omxK_e9390002aeb41e80.png","giftCount":"287"},
// {"giftId":"159","giftName":"3号","giftUrl":"http://fmn.rrimg.com/fmn074/20161017/1430/original_BLCG_069d0002ac341e80.png","giftCount":"296"},
// {"giftId":"161","giftName":"黑猫熔炉","giftUrl":"http://fmn.rrimg.com/fmn072/20161021/1905/original_TJMg_2c1e000dfc8b1e84.png","giftCount":"301"},
// {"giftId":"163","giftName":"5号","giftUrl":"http://fmn.rrimg.com/fmn078/20161017/1430/original_NTyF_8b260005ecf31e80.png","giftCount":"287"},
// {"giftId":"165","giftName":"6号","giftUrl":"http://fmn.rrimg.com/fmn076/20161017/1430/original_bEHY_1ed8000065331e83.png","giftCount":"259"},
// {"giftId":"167","giftName":"7号","giftUrl":"http://fmn.rrimg.com/fmn076/20161017/1430/original_Byqc_8aef0005ecac1e80.png","giftCount":"820"},
// {"giftId":"169","giftName":"黑暗古堡","giftUrl":"http://fmn.rrimg.com/fmn071/20161021/1905/original_hWt7_1ed80000c1c41e83.png","giftCount":"171"}]}, {"username":"小严谨","userHeadUrl":"http://hdn.xnimg.cn/photos/hdn221/20161008/1640/h_tiny_f0q4_fd9c0005aae2195a.jpg","userid":899845728,"count":135,"rankNumber":2,
// "giftDetailInfo":[{"giftId":"155","giftName":"僵尸之手","giftUrl":"http://fmn.rrimg.com/fmn078/20161021/1905/original_QXAc_3f7f000307b91e83.png","giftCount":"224"},
// {"giftId":"157","giftName":"2号","giftUrl":"http://fmn.rrimg.com/fmn078/20161017/1430/original_omxK_e9390002aeb41e80.png","giftCount":"224"},
// {"giftId":"159","giftName":"3号","giftUrl":"http://fmn.rrimg.com/fmn074/20161017/1430/original_BLCG_069d0002ac341e80.png","giftCount":"251"},
// {"giftId":"161","giftName":"黑猫熔炉","giftUrl":"http://fmn.rrimg.com/fmn072/20161021/1905/original_TJMg_2c1e000dfc8b1e84.png","giftCount":"237"},
// {"giftId":"163","giftName":"5号","giftUrl":"http://fmn.rrimg.com/fmn078/20161017/1430/original_NTyF_8b260005ecf31e80.png","giftCount":"240"},
// {"giftId":"165","giftName":"6号","giftUrl":"http://fmn.rrimg.com/fmn076/20161017/1430/original_bEHY_1ed8000065331e83.png","giftCount":"236"},
// {"giftId":"167","giftName":"7号","giftUrl":"http://fmn.rrimg.com/fmn076/20161017/1430/original_Byqc_8aef0005ecac1e80.png","giftCount":"700"},
// {"giftId":"169","giftName":"黑暗古堡","giftUrl":"http://fmn.rrimg.com/fmn071/20161021/1905/original_hWt7_1ed80000c1c41e83.png","giftCount":"135"}]},
// {"username":"仓鼠妹妹_","userHeadUrl":"http://hdn.xnimg.cn/photos/hdn321/20161017/0035/h_tiny_5czJ_7c260004af2d195a.jpg","userid":448179777,"count":120,"rankNumber":3,
// "giftDetailInfo":
// [{"giftId":"155","giftName":"僵尸之手","giftUrl":"http://fmn.rrimg.com/fmn078/20161021/1905/original_QXAc_3f7f000307b91e83.png","giftCount":"197"},
// {"giftId":"157","giftName":"2号","giftUrl":"http://fmn.rrimg.com/fmn078/20161017/1430/original_omxK_e9390002aeb41e80.png","giftCount":"229"},
// {"giftId":"159","giftName":"3号","giftUrl":"http://fmn.rrimg.com/fmn074/20161017/1430/original_BLCG_069d0002ac341e80.png","giftCount":"210"},
// {"giftId":"161","giftName":"黑猫熔炉","giftUrl":"http://fmn.rrimg.com/fmn072/20161021/1905/original_TJMg_2c1e000dfc8b1e84.png","giftCount":"182"},
// {"giftId":"163","giftName":"5号","giftUrl":"http://fmn.rrimg.com/fmn078/20161017/1430/original_NTyF_8b260005ecf31e80.png","giftCount":"218"},
// {"giftId":"165","giftName":"6号","giftUrl":"http://fmn.rrimg.com/fmn076/20161017/1430/original_bEHY_1ed8000065331e83.png","giftCount":"195"},
// {"giftId":"167","giftName":"7号","giftUrl":"http://fmn.rrimg.com/fmn076/20161017/1430/original_Byqc_8aef0005ecac1e80.png","giftCount":"631"},
// {"giftId":"169","giftName":"黑暗古堡","giftUrl":"http://fmn.rrimg.com/fmn071/20161021/1905/original_hWt7_1ed80000c1c41e83.png","giftCount":"120"}]},
// {"username":"丘丘","userHeadUrl":"http://hdn.xnimg.cn/photos/hdn321/20160928/1445/h_tiny_foeq_01c8000500ee1986.jpg","userid":905858319,"count":69,"rankNumber":4,
// "giftDetailInfo":
// [{"giftId":"155","giftName":"僵尸之手","giftUrl":"http://fmn.rrimg.com/fmn078/20161021/1905/original_QXAc_3f7f000307b91e83.png","giftCount":"141"},
// {"giftId":"157","giftName":"2号","giftUrl":"http://fmn.rrimg.com/fmn078/20161017/1430/original_omxK_e9390002aeb41e80.png","giftCount":"154"},
// {"giftId":"159","giftName":"3号","giftUrl":"http://fmn.rrimg.com/fmn074/20161017/1430/original_BLCG_069d0002ac341e80.png","giftCount":"125"},
// {"giftId":"161","giftName":"黑猫熔炉","giftUrl":"http://fmn.rrimg.com/fmn072/20161021/1905/original_TJMg_2c1e000dfc8b1e84.png","giftCount":"88"},
// {"giftId":"163","giftName":"5号","giftUrl":"http://fmn.rrimg.com/fmn078/20161017/1430/original_NTyF_8b260005ecf31e80.png","giftCount":"102"},
// {"giftId":"165","giftName":"6号","giftUrl":"http://fmn.rrimg.com/fmn076/20161017/1430/original_bEHY_1ed8000065331e83.png","giftCount":"105"},
// {"giftId":"167","giftName":"7号","giftUrl":"http://fmn.rrimg.com/fmn076/20161017/1430/original_Byqc_8aef0005ecac1e80.png","giftCount":"186"},
// {"giftId":"169","giftName":"黑暗古堡","giftUrl":"http://fmn.rrimg.com/fmn071/20161021/1905/original_hWt7_1ed80000c1c41e83.png","giftCount":"69"}]}, {"username":"麻辣酸奶","userHeadUrl":"http://hdn.xnimg.cn/photos/hdn521/20161019/0935/h_tiny_3lwJ_a67b00000c26195a.jpg","userid":473148987,"count":171,"rankNumber":1,
// "giftDetailInfo":[{"giftId":"155","giftName":"僵尸之手","giftUrl":"http://fmn.rrimg.com/fmn078/20161021/1905/original_QXAc_3f7f000307b91e83.png","giftCount":"291"},
// {"giftId":"157","giftName":"2号","giftUrl":"http://fmn.rrimg.com/fmn078/20161017/1430/original_omxK_e9390002aeb41e80.png","giftCount":"287"},
// {"giftId":"159","giftName":"3号","giftUrl":"http://fmn.rrimg.com/fmn074/20161017/1430/original_BLCG_069d0002ac341e80.png","giftCount":"296"},
// {"giftId":"161","giftName":"黑猫熔炉","giftUrl":"http://fmn.rrimg.com/fmn072/20161021/1905/original_TJMg_2c1e000dfc8b1e84.png","giftCount":"301"},
// {"giftId":"163","giftName":"5号","giftUrl":"http://fmn.rrimg.com/fmn078/20161017/1430/original_NTyF_8b260005ecf31e80.png","giftCount":"287"},
// {"giftId":"165","giftName":"6号","giftUrl":"http://fmn.rrimg.com/fmn076/20161017/1430/original_bEHY_1ed8000065331e83.png","giftCount":"259"},
// {"giftId":"167","giftName":"7号","giftUrl":"http://fmn.rrimg.com/fmn076/20161017/1430/original_Byqc_8aef0005ecac1e80.png","giftCount":"820"},
// {"giftId":"169","giftName":"黑暗古堡","giftUrl":"http://fmn.rrimg.com/fmn071/20161021/1905/original_hWt7_1ed80000c1c41e83.png","giftCount":"171"}]}];

    </script>
    <script src="http://s.xnimg.cn/wap/mobile/giftpack/js/common.js"></script>
    <script src="http://s.xnimg.cn/wap/mobile/giftpack/js/pack.js"></script>
</body>
</html>