let i =0;
let time ;
$(function(){
	//自动播放
function imgAuto(boole){
	if(".slide-pics[a]").hide().eq(i).fadeIn(2000);//当前图片的隐藏于显示
	$(".item").css({background:"red"}).eq(i).css({background:"green"});
	
	if(boole=="r"){
		i++;
		if(i==$(".slide-pics[a]").length){//如果轮播到最后一张，就变成第一张
			i=0;
		}else if(boole=="l"){
			i--;
			if(i<0){
				i=$(".slide-pics[a]").length-1;
			}
		}
	}
	var move = setInterval(function(){
		imgAuto("r");
	},2000);
	
	//手动轮播
	
	$(".item").click(function(){
		//点击现编的小圆点时
		let index = $(this).index();//小圆圈的下标
		$(".slide-pics[a]").hide().eq(index).show();//隐藏图片，点击图片的下标的那张显示
		$(".item").css({background:"#666"}).eq(index).css({background:"#99ffff"});
		i=index;
	});
	
	//鼠标移入、移出事件
	//hover 跟两个事件，一个划入，一个划出
	$(".slide").hover(function(){
		clearInterval(move);
	},function(){
		move = setInterval(function(){
			imgAuto("r");
		},1000)
	});
	//左右两个按钮的点击
	$(".btn-prev").click(function(){
		imgAuto("l");
	})
	$(".btn-next").click(function(){
		imgAuto("r");
	})
	
}

})