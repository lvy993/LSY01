<?php
	header("Content-type:text/html;charset=utf8");
	date_default_timezone_set("PRC");
	$link = mysqli_connect("localhost","root","","user");
	mysqli_query($link, "set names utf8");

	
	
?>