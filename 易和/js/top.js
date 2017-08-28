//商品商家
$(".top2 .goods .fenlei span").on("click",function(){
	$(".top2 .goods .fenlei span").attr("class","");
	$(this).attr("class","select");
	if ($(this).index() == 0) {
		var hot = $('<a href="###">酒店</a>'+
					'<a href="###">洗车</a>'+
					'<a href="###">餐饮</a>'+
					'<a href="###">进口</a>'+
					'<a href="###">旅游</a>'+
					'<a href="###">如家</a>');
	}else if ($(this).index() == 1) {
		var hot = $('<a href="###">雪碧</a>'+
					'<a href="###">红牛</a>'+
					'<a href="###">可口可乐</a>');
	}	
	$(".top2 .goods .hot a").remove();
	$(".top2 .goods .hot").append(hot);	
});


var classes = ["手机商家","电脑及配件","厨房电器件","智能生活","显示器"];
//行业分类
$(".top2 .nav .trade .menu li").on("mouseenter",function(){
	$(".nav .trade .menu .menu-det .detail").empty();
	for (var i = 0;i<classes.length;i++) {
		var name = getRandom(0,4);
		var detail = $('<a href="###">'+classes[name]+'</a>');
		$(".nav .trade .menu .menu-det .detail").append(detail);
	}
});
//随机数
function getRandom(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}


$("#citys").on("click",function(){
	window.location.href = "a-Switch_City.html";
});

$(".top2-mid .search .goods .sousuo span").on("click",function(){
	if ($(".top2-mid .search .goods .fenlei .select").index() == 0) {
		window.open("a-Merchant_search.html","_self");
	} else{
		window.open("a-Commodity_search.html","_self");
	}
});
//
$(".top .top2 .nav .trade .menu ul li a").on("click",function(){
	window.location.href = "b-stores.html";
});

$(".top2-mid .search .goods .hot a").on("click",function(){
	if ($(".top2-mid .search .goods .fenlei .select").index() == 0) {
		window.location.href = "c-5.html";
	}
});

$(".top1 .top1-mid .mt-infor span:nth-child(5)").on("click",function(){
	window.location.href = "b-404.html";
});




//---------------------
$(".top .top2 .top2-mid .search h1 a").attr("href","b-Home.html");
$(".top1 .top1-mid .mt-infor>span:nth-child(1) a").attr("href","c-14.html");
$(".top .top2 .top2-mid .search .mine>a:first-child").attr("href","c-14.html");
$(".top .top2 .top2-mid .search .mine>a:nth-child(2)").attr("href","c-6.html");
$(".foot .f2-mid>dl:nth-child(4) dd:nth-child(2) a").attr("href","b-new-user.html");
$(".top1 .top1-mid .mt-infor>span:nth-child(2) a").attr("href","a-load.html");
$(".top1 .top1-mid .mt-infor>span:nth-child(3) a").attr("href","a-order.html");
$(".top .top2 .nav>a:nth-child(6)").attr("href","b-join.html");
$(".top1 .top1-mid .mt-infor>span:nth-child(4) a").attr("href","a-myMessage.html");
$(".top .top2 .nav>a:nth-of-type(1)").attr("href","b-Home.html");
$(".top .top2 .nav>a:nth-of-type(2)").attr("href","a-branda.html");
$(".top .top2 .nav>a:nth-of-type(3)").attr("href","c-3.html");
$(".top .top2 .nav>a:nth-of-type(4)").attr("href","c-2.html");

function carTip(){
	if (localStorage.getItem("a1")) {
		var goodsTip = JSON.parse(localStorage.getItem("a1"));
		$(".top .top2 .top2-mid .search .mine .tip").html(goodsTip.length);
	}	
}
carTip();
function city(){
	var city1 = localStorage.getItem("city");
	$("#citys").html(city1);
}
city();

