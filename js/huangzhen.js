var imgCount = 12;
var imgWidth = 250;
function getImgResize(){
	var content = $("#container");
	for(i = 1; i <= imgCount; i++) {
		content.append("<img src='imgs/" + i + ".jpg' width='" + imgWidth + "'  />");
	}
}
$(function(){
	getImgResize();
})