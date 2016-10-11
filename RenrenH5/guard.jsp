<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <!-- meta:vp-->
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <title>开通守护</title>
    <link rel="stylesheet" href="css/base.css"/>
    <link rel="stylesheet" href="css/index.css"/>
</head>
<body>
    <div class="jd_layout">
        <div class="user_info">
            <ul>
                <li>
                    <p>开通账号：<span class="user-name-text">${userInfo.name}张二狗</span>
                    </p>
                </li>
                <li>
                    <p style="text-align: right;">剩余人人果：<span class="user-guo-text">${userInfo.count}9999</span>
                    </p>
                </li>
            </ul>
        </div>

        <div class="line"></div>

        <div class="anchor_info">
            <!-- <div class="anchor_head"><img src="${anchorInfo.headUrl}"></div> -->
            <div class="anchor_head"><img src="image/guard_privilege_icon2.png"></div>
             <div class="anchor_name">守护的主播：二狗子${anchorInfo.content}</div>
             <div class="anchor_id">人人号 zhangergou ${anchorInfo.id}</div>
            
        </div>

        <div class="line"></div>

        <div class="title_line">守护时长</div>

        <section class="guard_time_section">
            <!--内容-->
            <div class="guard_time_list_div">
                <ul class="clearfix">
                    <li>
                        <div>
                            <p>8888<img src="image/renrenguo_gold_icon.png"></img></p>
                            <p>1个月</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>26640<img src="image/renrenguo_gold_icon.png"></img></p>
                            <p>3个月</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>50600<img src="image/renrenguo_gold_icon.png"></img></p>
                            <p>6个月</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <div class="term_validity">
            <p style="color: #a0a0a0;">有效期：<span class="term_validity_time">${time1}2016-10-10</span> 至 <span class="term_validity_time">${time2}2016-11-10</span> 
            </p>
                <p style="color: #a0a0a0;">本次开通主播将获得 <span class="guard_time_guo">${userInfo.count}99990</span> 星光值
            </p>
        </div>
            
        <div class="line"></div>

        <div class="title_line">守护骑士特权</div>

        <section class="guard_privilege_section">
            <!--内容-->
            <div class="guard_privilege_list_div">
                <ul class="clearfix">
                    <li>
                        <a href="#"><img src="image/guard_privilege_icon1.png" alt=""/></a>
                        <p>守护标识</p>
                    </li>
                    <li>
                        <a href="#"><img src="image/guard_privilege_icon2.png" alt=""/></a>
                        <p>专属入场特效</p>
                    </li>
                    <li>
                        <a href="#"><img src="image/guard_privilege_icon3.png" alt=""/></a>
                        <p>防禁言</p>
                    </li>
                    <li>
                        <a href="#"><img src="image/guard_privilege_icon4.png" alt=""/></a>
                        <p>入场特效</p>
                    </li>
                    <li>
                        <a href="#"><img src="image/guard_privilege_icon5.png" alt=""/></a>
                        <p>专属礼物</p>
                    </li>
                </ul>
            </div>
        </section>

        <div class="guard_note_div">
            <p><img src="image/guard_gray_icon.png">开通守护，主播将立即获得相应星光值。</p>
            <p><img src="image/guard_gray_icon.png">守护骑士特权仅对守护主播有效。</p>
            <p><img src="image/guard_gray_icon.png">开通守护即成为该主播骑士团成员。每周贡献值前四的骑士，将以此获得蔷薇骑士、鸢尾骑士、铃兰骑士和木槿骑士称号。榜单每自然周重新计算排名。 </p>
            <p><img src="image/guard_gray_icon.png">可同时守卫多位主播。</p>
            <p><img src="image/guard_gray_icon.png">针对同一主播，守护有效期最多为3年。</p>
            <p><img src="image/guard_gray_icon.png">VIP用户需关闭隐身查看功能，才可展示相应入场特效。</p>
            <p><img src="image/guard_gray_icon.png">备注：守护时长1个月按31天计算。</p>
        </div>
    
    </div>
    <!-- <script src="js/common.js"></script> -->
    <!-- <script src="js/index.js"></script> -->
    <script type="text/javascript">
        (function (doc, win) {
            var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = (clientWidth / 10) + 'px';
            };
            if (!doc.addEventListener) 
                return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
            })(document, window);
    </script>
</body>
</html>