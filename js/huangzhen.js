var imgCount = 12;
var imgLength = 7;
function getImgResize(){
	var winWidth = $(window).width();
	var content = $(".container");
	for(i = 1; i <= imgCount; i++) {
		var imgsrc = "imgs/" + i + ".jpg";
		content.append("<img src='" + imgsrc + "' width='" + ((winWidth - 40) / imgLength - 20) + "' onclick='showLoading(\"" + imgsrc + "\")' />");
	}
}

function showLoading(imgSrc){
	//图片路径
     var img = new Image();
        img.src = imgSrc;
        // 如果图片被缓存，则直接返回缓存数据
        if(img.complete){
            showBigImg(imgSrc, img.width, img.height);
        }else{
            // 完全加载完毕的事件
            img.onload = function(){
                showBigImg(imgSrc, img.width, img.height);
            }
        }
   
}
function showBigImg(imgSrc, imgw, imgh) {
	var maskHeight = $(window).height();
    var maskWidth = $(window).width();
	var width = imgw;
	if (imgw > maskWidth || imgh > maskHeight) {
		if (imgw / maskWidth > imgh / maskHeight) {
			width = maskWidth - 100;
		} else {
			width = (maskWidth * maskHeight) / imgh -100;
		}
	}
	var coverDiv = $("#allShow");
    if(coverDiv.length>0){
		coverDiv.find("img").attr("src", imgSrc).width(width);
    }else{
    	$("body").append("<div id='allShow'><div id='cover_div3' onclick='closeAlert()'></div><img src='"+imgSrc+"' width='"+width+"' class='Absolute-Center '/></div>");
    	$("#cover_div3").css({"position":"absolute","top":"0","left":"0","vertical-align":"middle",
    		"width":"100%","height":"100%","background-color":" black","z-index":"2",
    		"-moz-opacity":" 0.7","opacity":".70","filter":"alpha(opacity=70)"});
    }
    $("#allShow").show();
}
function closeAlert() {
	 $("#allShow").hide();
}
$(function(){
	getImgResize();
})