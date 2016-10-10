<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <!-- meta:vp-->
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0"/>
    <title>开通守护</title>
    <link rel="stylesheet" href="css/base.css"/>
    <link rel="stylesheet" href="css/index.css"/>
</head>
<body>
    <div class="jd_layout">
    <div class="user_info">
        <p style="display: inline; color: #a0a0a0;">开通账号：<span class="user-name-text">${userInfo.name}张二狗</span>
        </p>
            <p class=" f_right" style="display: inline; color: #a0a0a0;">剩余人人果：<span class="user-guo-text">${userInfo.count}9999</span>
        </p>
    </div>

    <div class="line"></div>

    <div class="anchor_info">
        <div class="anchor_head"><img src="${anchorInfo.headUrl}"></div>
         <div class="anchor_name">守护的主播：${anchorInfo.content}</div>
         <div class="anchor_id">人人号 ${anchorInfo.id}</div>
        
    </div>

    <div class="line"></div>

    <div class="title_line">守护时长</div>

    <section class="guard_time_section">
        <!--内容-->
        <div class="guard_time_list_div">
            <ul class="clearfix">
                <li>
                    <div>
                        
                    </div>
                    <p>&yen;10.00</p>
                </li>
                <li>
                    <div>
                        
                    </div>
                    <p>&yen;10.00</p>
                </li>
                <li>
                    <div>
                        
                    </div>
                    <p>&yen;10.00</p>
                </li>
            </ul>
        </div>
    </section>
    <div class="line"></div>

    <div class="title_line">守护骑士特权</div>

    <section class="guard_privilege_section">
        <!--内容-->
        <div class="guard_privilege_list_div">
            <ul class="clearfix">
                <li>
                    <a href="#"><img src="images/detail01.jpg" alt=""/></a>
                    <p>守护标识</p>
                </li>
                <li>
                    <a href="#"><img src="images/detail02.jpg" alt=""/></a>
                    <p>专属入场特效</p>
                </li>
                <li>
                    <a href="#"><img src="images/detail01.jpg" alt=""/></a>
                    <p>防禁言</p>
                </li>
                <li>
                    <a href="#"><img src="images/detail02.jpg" alt=""/></a>
                    <p>入场特效</p>
                </li>
                <li>
                    <a href="#"><img src="images/detail01.jpg" alt=""/></a>
                    <p>专属礼物</p>
                </li>
            </ul>
        </div>
    </section>

    

        <!--轮播图-->
        <div class="jd_banner">
            <ul class="clearfix">
                <li><a href="#"><img src="images/l8.jpg" alt=""/></a></li>
                <li><a href="#"><img src="images/l1.jpg" alt=""/></a></li>
                <li><a href="#"><img src="images/l2.jpg" alt=""/></a></li>
                <li><a href="#"><img src="images/l3.jpg" alt=""/></a></li>
                <li><a href="#"><img src="images/l4.jpg" alt=""/></a></li>
                <li><a href="#"><img src="images/l5.jpg" alt=""/></a></li>
                <li><a href="#"><img src="images/l6.jpg" alt=""/></a></li>
                <li><a href="#"><img src="images/l7.jpg" alt=""/></a></li>
                <li><a href="#"><img src="images/l8.jpg" alt=""/></a></li>
                <li><a href="#"><img src="images/l1.jpg" alt=""/></a></li>
            </ul>
            <ul>
                <li class="now"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <!--导航栏-->
        <nav class="jd_nav">
            <ul class="clearfix">
                <li>
                    <a href="#">
                        <img src="images/nav0.png" alt=""/>
                        <p>分类查询</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="images/nav1.png" alt=""/>
                        <p>分类查询</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="images/nav2.png" alt=""/>
                        <p>分类查询</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="images/nav3.png" alt=""/>
                        <p>分类查询</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="images/nav4.png" alt=""/>
                        <p>分类查询</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="images/nav5.png" alt=""/>
                        <p>分类查询</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="images/nav6.png" alt=""/>
                        <p>分类查询</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="images/nav7.png" alt=""/>
                        <p>分类查询</p>
                    </a>
                </li>
            </ul>
        </nav>
        <!--商品-->
        <main class="jd_product">
            <!--商品子盒子-->
            
            <!--商品子盒子-->
            <section class="product_box">
                <!--头部-->
                <div class="product_box_tit"><h3>京东超市</h3></div>
                <!--内容-->
                <div class="product_box_con clearfix">
                    <a href="#" class="f_left w_50 b_right"><img src="images/cp1.jpg" alt=""/></a>
                    <a href="#" class="f_right w_50 b_bottom"><img src="images/cp2.jpg" alt=""/></a>
                    <a href="#" class="f_right w_50 "><img src="images/cp3.jpg" alt=""/></a>
                </div>
            </section>
            <!--商品子盒子-->
            <section class="product_box">
                <!--头部-->
                <div class="product_box_tit"><h3>京东超市</h3></div>
                <!--内容-->
                <div class="product_box_con clearfix">
                    <a href="#" class="f_right w_50 b_left"><img src="images/cp4.jpg" alt=""/></a>
                    <a href="#" class="f_left w_50 b_bottom"><img src="images/cp5.jpg" alt=""/></a>
                    <a href="#" class="f_left w_50"><img src="images/cp6.jpg" alt=""/></a>
                </div>
            </section>
            <!--商品子盒子-->
            <section class="product_box">
                <!--头部-->
                <div class="product_box_tit"><h3>京东超市</h3></div>
                <!--内容-->
                <!--内容-->
                <div class="product_box_con clearfix">
                    <a href="#" class="f_left w_50 b_right"><img src="images/cp1.jpg" alt=""/></a>
                    <a href="#" class="f_right w_50 b_bottom"><img src="images/cp2.jpg" alt=""/></a>
                    <a href="#" class="f_right w_50 "><img src="images/cp3.jpg" alt=""/></a>
                </div>
            </section>
        </main>
    </div>
    <script src="js/common.js"></script>
    <script src="js/index.js"></script>
</body>
</html>