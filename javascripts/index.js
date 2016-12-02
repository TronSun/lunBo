$(function () {
    var wealthBigImgs = [
        "./images/img1.png",
        "./images/img2.png",
        "./images/img3.png",
        "./images/img1.png",
        "./images/img2.png",
        "./images/img3.png"
    ];
    var wealthSmallImgs = [
        "./images/sma1.png",
        "./images/sma2.png",
        "./images/sma3.png",
        "./images/sma1.png",
        "./images/sma2.png",
        "./images/sma3.png"
    ];
    for(var i =0;i < wealthBigImgs.length;i++){
        $(".wealthBigImg ul").find('li').eq(i).find('img').attr('src',wealthBigImgs[i])
    }
    for(var j =0;j < wealthSmallImgs.length;j++){
        $(".wealthSmallImg ul").append($("<li>").append($("<span>")).append($("<img>").attr("src",wealthSmallImgs[j])))
    }
});