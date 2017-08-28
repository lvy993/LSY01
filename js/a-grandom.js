var num, num0, num1, num2, num3, num4, num5, num6, num7,nu,nu1;
var a = num0,
	b = num2,
	c = num3;
	d = true;
$("#phone").on("input", function() {
	num = $("#phone").val();
	var txt = /^1(3|4|5|7|8)\d{9}$/
	if(txt.test(num) == true) {
		$(".warning").animate({
			opacity: '0'
		}, 20);
		$("#chacke").show();
	} else {
		$(".warning").animate({
			opacity: '1'
		}, 20);
		$("#chacke").hide();
	}
})
//$("button").on("click", function() {
//	nu = $("#phone").val();
//	var txt = /(a-z|0-9|A-Z)\d[6,16]$/
//	if(txt.test(nu) == true) {
//		
//	} else {
//		alert("密码错误")
//	}
//})
$("#phone").on("input", function() {
	if(!$("#phone").val()) {
		$(".warning").animate({
			opacity: '0'
		}, 20);
	}
})

function random() {
	num0 = Math.floor(Math.random() * 9);
	num1 = Math.floor(Math.random() * 25);
	num2 = Math.floor(Math.random() * 25 + 26);
	num3 = Math.floor(Math.random() * 25 + 51);
	num4 = String.fromCharCode(65 + num1);
	num5 = String.fromCharCode(72 + num2);
	num6 = String.fromCharCode(47 + num3);
	num7 = num6 + num5 + num0 + num4;
	return num7;
}
random();
$("#yzm").val(num7);
$("strong").on("mousedown", function(e) {
	e.preventDefault();
	random();
	$("#yzm").val(num7);
})
$("#yzm").on("mousedown", function(e) {
	e.preventDefault();
	random();
	$("#yzm").val(num7);
})

$(".clicks").on("click", function() {
	nu=$(".validation>input:nth-child(1)").val();
	nu1=$("#yzm").val();
	nu=nu.toUpperCase();
	nu1=nu1.toUpperCase();
	if(nu == nu1) {
		$(".menban").animate({
			opacity: '1'
		}, 20);
		d=false;
	} else {
		alert("验证失败")
		d= true
	}
})