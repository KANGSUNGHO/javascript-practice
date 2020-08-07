// jQuery를 사용한 방법 
/*$(onWindowLoad);
var liSelected = null;
var onTabClicked = function(){
	$(".tab-box ul li.selected").removeClass("selected");
	
	$(this).addClass("selected");
}

var onWindowLoad = function(){
	var $lis = $(".tab-box ul li");
	$lis.click(onTabClicked);
	// 한줄로 변경 $(".tab-box ul li").click(onTabClicked);
}*/

$(function(){
	$(".tab-box ul li").click(function(){
		$(".tab-box ul li.selected").removeClass("selected");
		$(this).addClass("selected");
	});
}); 