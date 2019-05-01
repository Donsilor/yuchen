$(document).ready(function() {

//选项卡切换		
var $bp=$(".dd_main2 li");
$bp.click(function(){
$(this).addClass("ddpic").siblings().removeClass("ddpic");
var index=$bp.index(this);
$(".dd_main3 .dd_main3v").eq(index).show().siblings(".dd_main3v").hide();
});		


});