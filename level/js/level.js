/**
 * ITCAST WEB
 * Created by zhousg on 2016/4/27.
 */


/*页面加载完成之后执行*/
window.onload = function(){
    
    init();
    
};

function init() {
    var nameDom = document.querySelector('.name');
    var levelSpans = document.querySelectorAll('.level_span');
    var levelDiffSpans = document.querySelectorAll('.level_diff_span');
    var totalExpSpans = document.querySelectorAll('.total_exp_span');
    nameDom.innerText = info.name;
    levelSpans[0].innerText = info.accountLevel;
    levelSpans[1].innerText = info.charmLevel;
    levelDiffSpans[0].innerText = info.nextAccountLevel;
    levelDiffSpans[1].innerText = info.nextCharmLevel;
    totalExpSpans[0].innerText  = info.accountTotalExp;
    totalExpSpans[1].innerText  = info.totalCharmExp;
}
