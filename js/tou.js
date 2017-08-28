$(".daohangwenzi .you a:nth-of-type(1)").attr("href","c-14.html");
$(".daohangwenzi .you a:nth-of-type(2)").attr("href","a-load.html");
$(".daohangwenzi .you a:nth-of-type(3)").attr("href","a-order.html");
$(".daohangwenzi .you a:nth-of-type(4)").attr("href","a-myMessage.html");
function city(){
	var city1 = localStorage.getItem("city");
	$(".daohangtiao .daohangwenzi .zuo span a").html(city1);
}
city();
