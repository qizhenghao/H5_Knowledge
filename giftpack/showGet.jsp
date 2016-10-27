<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <title>百变南瓜趴 “鬼”混万圣节</title>
    <link rel="stylesheet" href="http://a.xnimg.cn/wap/mobile/giftpack/css/base.css"/>
    <link rel="stylesheet" href="http://a.xnimg.cn/wap/mobile/giftpack/css/halloween.css"/>
    <!-- <script src="//code.jquery.com/jquery-1.11.3.min.js"></script> -->
</head>
<body>
         
         <div  class="top_pictrue_info">
            <div ><img class="top_pictrue_img" src="http://a.xnimg.cn/wap/mobile/giftpack/image/halloween_top_bg.jpg"></div>
         </div>
   
        <div class="anchor_info">
             <img class="anchor_head_img" src=""></img>        
             <span class="anchor_name"></span>       
        </div> 
		
		
        <input class="bottom_button_info" name="submit" type="image" value=" " src="http://a.xnimg.cn/wap/mobile/giftpack/image/halloween_bottom_bar.jpg"  onclick="history.go(-1)" />

        <div  class="get_gift_info">
                <p class="get_gfit_info_text">共送出 <span class="gfit_send_count">0</span> 个宝箱    &nbsp; &nbsp; &nbsp; &nbsp;共收到 <span class="gfit_get_count" >0</span> 套礼物
                </p>
        </div>
        
       <div class="get_gfit_list_info">
            <ul>
                <li>
                     <p>
                       <img class="get_gift_list_item_img" src="http://a.xnimg.cn/wap/mobile/giftpack/image/skeleton_hand_icon.png"></img>
                       <span class="get_gift_list_item_gift_count"></span>  
                     </p>
                </li>
                
                  <li>
                     <p>
                       <img class="get_gift_list_item_img" src="http://a.xnimg.cn/wap/mobile/giftpack/image/skeleton.png"></img>
                       <span class="get_gift_list_item_gift_count"></span>
                     </p>
                </li>
                  
                <li>
                    <p>
                       <img class="get_gift_list_item_img" src="http://a.xnimg.cn/wap/mobile/giftpack/image/bat_icon.png"></img>
                       <span class="get_gift_list_item_gift_count"></span>
                     </p>  
                </li>
                
                  <li>
                    <p>
                       <img class="get_gift_list_item_img" src="http://a.xnimg.cn/wap/mobile/giftpack/image/cat_icon.png"></img>
                       <span class="get_gift_list_item_gift_count"></span>
                     </p>
                </li>
                
           </ul>
		   
            <ul>    
                
                  <li>
                     <p>
                       <img class="get_gift_list_item_img" src="http://a.xnimg.cn/wap/mobile/giftpack/image/pumpkin_icon.png"></img>
                       <span class="get_gift_list_item_gift_count"></span>
                     </p>
                </li>
                
				 <li>
                     <p>
                       <img class="get_gift_list_item_img" src="http://a.xnimg.cn/wap/mobile/giftpack/image/candy_icon.png"></img>
                       <span class="get_gift_list_item_gift_count"></span>
                     </p>
                </li>
				
                <li>
                    <p>
                       <img class="get_gift_list_item_img" src="http://a.xnimg.cn/wap/mobile/giftpack/image/gharry_icon.png"></img>
                       <span class="get_gift_list_item_gift_count"></span>
                     </p>
                </li>
               
                  <li>
                    <p>
                       <img class="get_gift_list_item_img" src="http://a.xnimg.cn/wap/mobile/giftpack/image/castle_icon.png"></img>
                       <span class="get_gift_list_item_gift_count"></span>
                     </p>
                </li>
                
           </ul>
        </div>
    <script type="text/javascript">
    	var giftInfo =${data};
    </script>    
        
        
     <script src="http://a.xnimg.cn/wap/mobile/giftpack/js/common.js"></script> 
    <script src="http://a.xnimg.cn/wap/mobile/giftpack/js/halloween.js"></script>
</body>
</html>
