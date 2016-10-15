<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <title>开通守护</title>
    <link rel="stylesheet" href="http://s.xnimg.cn/wap/static/h5/guard/css/base.css"/>
    <link rel="stylesheet" href="http://s.xnimg.cn/wap/static/h5/guard/css/guard.css"/>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
</head>
<body>
    <div class="jd_layout">
        <div class="user_info">
            <ul>
                <li>
                    <p>开通账号：<span class="user-name-text">${guardInfo.guardName}</span>
                    </p>
                </li>
                <li>
                    <p style="text-align: right;">剩余人人果：<span class="user-guo-text">${amout}</span><img src="http://s.xnimg.cn/wap/static/h5/guard/image/renrenguo_gold_icon.png"></img>
                    </p>
                </li>
            </ul>
        </div>

        <div class="title_line_border"></div>

        <div class="anchor_info">
             <div class="anchor_head"><img class="anchor_head_img" src="${wardHeadUrl}"></div>
             <div class="anchor_head_icon"><img class="anchor_head_icon_img" src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_ward_icon.png"></div>
             <div class="anchor_name">守护的主播：${guardInfo.wardName}</div>
             <div class="anchor_id">人人号 ${wardId}</div>
             <div class="anchor_guarding"><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_icon.png"> 守护中（<span class="anchor_guarding_time"></span>到期）</div>
        </div>

        <div class="line"></div>

        <div class="title_line">守护时长</div>
        <div class="title_line_border"></div>

        <section class="guard_time_section">
            <!--内容-->
            <div class="guard_time_list_div">
                <ul class="clearfix">
                    <li>
                        <div>
                            <p><span class="price"></span><img src="http://s.xnimg.cn/wap/static/h5/guard/image/renrenguo_gold_icon.png"></img></p>
                            <p><span class="month"></span>个月</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p><span class="price"></span><img src="http://s.xnimg.cn/wap/static/h5/guard/image/renrenguo_gold_icon.png"></img></p>
                            <p><span class="month"></span>个月</p>
                        </div>
                        <div class="guard_discount"><img src="http://s.xnimg.cn/wap/static/h5/guard/image/renrenguo_gold_icon.png"></img>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p><span class="price"></span><img src="http://s.xnimg.cn/wap/static/h5/guard/image/renrenguo_gold_icon.png"></img></p>
                            <p><span class="month"></span>个月</p>
                        </div>
                        <div class="guard_discount"><img src="http://s.xnimg.cn/wap/static/h5/guard/image/renrenguo_gold_icon.png"></img>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <div class="term_validity">
            <p style="color: #a0a0a0;"><span class="term_validity_str">有效期：</span><span class="term_validity_time"></span><span class="term_validity_str1"> 至 </span><span class="term_validity_time"></span> 
            </p>
                <p style="color: #a0a0a0;">本次开通主播将获得 <span class="guard_time_guo"></span> 星光值
            </p>
        </div>
        
        <button type="">立即开通</button>
        <div class="line"></div>

        <div class="title_line">守护骑士特权</div>
        <div class="title_line_border"></div>

        <section class="guard_privilege_section">
            <!--内容-->
            <div class="guard_privilege_list_div">
                <ul class="clearfix">
                    <li>
                        <a href="#"><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_privilege_icon1.png"/></a>
                        <p>守护标识</p>
                    </li>
                    <li>
                        <a href="#"><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_privilege_icon2.png"/></a>
                        <p>专属入场特效</p>
                    </li>
                    <li>
                        <a href="#"><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_privilege_icon3.png"/></a>
                        <p>防禁言</p>
                    </li>
                    <li>
                        <a href="#"><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_privilege_icon4.png"/></a>
                        <p>入场特效</p>
                    </li>
                    <li>
                        <a href="#"><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_privilege_icon5.png"/></a>
                        <p>专属礼物</p>
                    </li>
                </ul>
            </div>
        </section>

        <div class="guard_note_div">
            <p><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_gray_icon.png">开通守护，主播将立即获得相应星光值。</p>
            <p><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_gray_icon.png">守护骑士特权仅对守护主播有效。</p>
            <p><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_gray_icon.png">开通守护即成为该主播骑士团成员。每周贡献值前四的骑士，将以此获得蔷薇骑士、鸢尾骑士、铃兰骑士和木槿骑士称号。榜单每自然周重新计算排名。 </p>
            <p><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_gray_icon.png">可同时守卫多位主播。</p>
            <p><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_gray_icon.png">针对同一主播，守护有效期最多为3年。</p>
            <p><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_gray_icon.png">VIP用户需关闭隐身查看功能，才可展示相应入场特效。</p>
            <p><img src="http://s.xnimg.cn/wap/static/h5/guard/image/guard_gray_icon.png">备注：守护时长1个月按31天计算。</p>
        </div>
    
    </div>
    <script type="text/javascript">
        var guardId = ${guardId};
        var wardId = ${wardId};
        var leftGuo = ${amout};
        window.payList = ${pay};
        var guardInfo = ${guardInfo};


    </script>
    <script src="http://s.xnimg.cn/wap/static/h5/guard/js/common.js"></script>
    <script src="http://s.xnimg.cn/wap/static/h5/guard/js/guard.js"></script>
</body>
</html>