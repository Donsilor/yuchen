$(document).ready(function() {
	$(".CancelClick").click(function(){
		showBox("box1");
	});
	$(".loginClick").click(function(){
		showBox("box");
	});
	$(".tabChange a").click(function(){
		$(this).addClass("curr").siblings("a").removeClass("curr");
		$(".cBox").hide().eq($(this).index()).show();
	});
	$(".registerClick").click(function(){
		showBox("box");
		return $(".tabChange a").eq(1).click();
	});
	
	$(".menu .menuProduct").hover(function(){
		$(".secondMenu").stop().slideDown(500);
	});
	$(".menuProduct").mouseleave(function(){
		$(".secondMenu").slideUp();
	});
//首页banner加载切换
	var index_i=0,func=setInterval(Scroll, 3000);
	function Scroll(){
		$(".banner_background li").eq(index_i).fadeIn(1000).siblings("li").fadeOut(1000);
		$(".switch_box li").eq(index_i).addClass("cur").siblings("li").removeClass("cur");
		index_i=index_i+1>$(".banner_background li").length-1 ? 0:index_i+1
		}
	$(".switch_box a").click(function(){
		clearInterval(func);
		index_i=$(this).parent().index();
		Scroll();
		});
	$(".switch_box li").mouseleave(function(){
		func=setInterval(Scroll, 3000)
		});
	$(".switch_box li").mouseover(function(){
		clearInterval(func);
		});
		
	//滚动效果
	$(".img_con ul").width($(".img_con ul li").length*$(".img_con ul li").width())//设置ul的宽度 
	function DY_scroll(wraper,prev,next,img,speed,or)
	 { 
	  var wraper = $(wraper);
	  var prev = $(prev);
	  var next = $(next);
	  var img = $(img).find('ul');
	  var w = img.find('li').outerWidth(true);
	  var s = speed;
	  next.click(function()
		   {
			img.animate({'margin-left':-w},function()
					  {
					   img.find('li').eq(0).appendTo(img);
					   img.css({'margin-left':0});
					   });
			});
	  prev.click(function()
		   {
			img.find('li:last').prependTo(img);
			img.css({'margin-left':-w});
			img.animate({'margin-left':0});
			});
	  if (or == true)
	  {
	   ad = setInterval(function() { next.click();},s*1000);
	   wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});
	
	  }
	 }
	DY_scroll('.detail_con1','.pre','.next','.img_con',4,true);// true为自动播放，不加此参数或false就默认不自动


/*选项卡*/
var $pLi=$(".procon_T p");
$pLi.click(function(){
$(this).addClass("active").siblings().removeClass("active");
var index=$pLi.index(this);
$(".procon_m .procon_m1").eq(index).show().siblings(".procon_m1").hide();
});

/*选项卡*/
var $aLi=$(".serpro_R11 a");
$aLi.click(function(){
$(this).addClass("ativ").siblings().removeClass("ativ");
var index=$aLi.index(this);
$(".serpro_B .serpro_B1").eq(index).show().siblings(".serpro_B1").hide();
});

/*详情页选中*/
var $bLi=$(".pro_R401");
$bLi.click(function(){
$(this).addClass("fucu").siblings().removeClass("fucu");
});	

/*处理中订单选项卡切换*/
var $cLi=$(".billR_Tm li");
$cLi.click(function(){
$(this).addClass("choice").siblings().removeClass("choice");
var index=$cLi.index(this);
$(".billR_m .billR_m1").eq(index).show().siblings(".billR_m1").hide();
});

/*消息中心选项卡切换*/
var $dLi=$(".infocla a");
$dLi.click(function(){
$(this).addClass("reads").siblings().removeClass("reads");
var index=$dLi.index(this);
$(".newtitle .newcent_M").eq(index).show().siblings(".newcent_M").hide();
});


	
});
	/*弹窗*/
	function showBox(boxID){
	  closeBox();
	  var bodyheight = document.body.clientHeight,
		  windowheight = document.documentElement.clientHeight,
		  openbox = $('#'+boxID),
		  mask = $('.mask');
	  
	  mask.css('height',(bodyheight<windowheight ? windowheight : bodyheight).toString()+'px').show();
	  openbox.show();
	  
	  var boxTop = (windowheight - openbox.height())/2,
	  boxLeft = (document.documentElement.clientWidth - openbox.width())/2;
	  
	  boxTop = boxTop>0 ? boxTop : 0;
	  boxLeft = boxLeft>0 ? boxLeft : 0;
	
	  
	  var scrollTop=document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop,
		  boxTop = boxTop + scrollTop;
	   
	  openbox.css({'top':boxTop + 'px','left':boxLeft + 'px'});
	}
	
	/*关闭弹窗*/
	function closeBox(boxID){
	  $('.mask').hide(); 
	  if(boxID){
		$('#'+boxID).hide();
	  }else{
		$('.wbox').hide();
		$('.Cancelbox').hide();
		
	  }
	}


function openes(id){
document.getElementById("upmore").style.display="none";
document.getElementById("down").style.display="block";	
var a=document.getElementById("tr"+id).style.display;
if(a=='none'){
document.getElementById("tr"+id).style.display="block";
}
else{
	document.getElementById("tr"+id).style.display="none";
	}
}
function openes1(id){
document.getElementById("upmore").style.display="block";
document.getElementById("down").style.display="none";
var b=document.getElementById("tr"+id).style.display;
if(b=='none'){
document.getElementById("tr"+id).style.display="block";
}
else{
	document.getElementById("tr"+id).style.display="none";
	}
}


/*产品详情增加减少*/
var a = 1;
function add() {
	a++;
	document.getElementById("txt").value = a;
}
function sub() {
	a--;
	document.getElementById("txt").value = a;
}	


