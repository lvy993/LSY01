$(".logo").on("click", function() {
	window.open("b-Home.html", "_self")
})
$(".a_content .a_left .person>span ").on("click", function() {
	window.open("c-14.html", "_self")
})

$(".on li:nth-child(2)").on("click", function() {
	window.open("c-14.html", "_self");
})
$(".on li:nth-child(3)").on("click", function() {
	window.open("a-order.html", "_self");
})
$(".on li:nth-child(4)").on("click", function() {
	window.open("c-15.html", "_self");
})
$(".on li:nth-child(5)").on("click", function() {
	window.open("a-yihe.html", "_self");
})
$(".on li:nth-child(7)").on("click", function() {
	window.open("a-peerson.html", "_self");
})
$(".on li:nth-child(8)").on("click", function() {
	window.open("a-address.html", "_self");
})
$(".on li:nth-child(9)").on("click", function() {
	window.open("b-my-collection.html", "_self");
})
$(".on li:nth-child(10)").on("click", function() {
	window.open("c-16.html", "_self");
})
$(".on li:nth-child(11)").on("click", function() {
	window.open("a-binding.html", "_self");
})
$(".on li:nth-child(13)").on("click", function() {
	window.open("a-myMessage.html", "_self");
})

$(".a-box button").on("click", function() {
	let tt = $(this).text()
	if(tt == "取消订单") {
		$(this).parent().parent().remove();
	}
});
$(".a-box button").on("click", function() {
	let tt = $(this).text()
	if(tt == "删除订单") {
		$(this).parent().parent().remove();
	}
});
$(".a-box button").on("click", function() {
	var tt = $(this).text();
	if(tt == "申请退款") {
		window.open("b-404.html", "_self");
	}
});
$(".a-box button").on("click", function() {
	let tt = $(this).text()
	if(tt == "去支付") {
		window.open("c-8.html", "_self");
	}
});