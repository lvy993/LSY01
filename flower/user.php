<?php
include_once "DB.php";
$act = $_GET["act"];//请求标示
switch($act){
	case "get":
		$sql1="SELECT * FROM user";
         $sql1=mysqli_query($link,$sql1);
        $sql1=mysqli_fetch_all($sql1);
       $insertId = mysqli_affected_rows($link);
        if ($insertId>0) {
	     $arr = array("msg"=>$sql1);
	      echo json_encode($arr);
       } else {
	     $arr = array("msg" => "获取用户数据失败");
	      echo json_encode($arr);
       }
	   break;
	case "post":
		$user= $_GET["user"];
        $pass= $_GET["pass"];
        $name= $_GET["name"];
        $sql = "INSERT INTO user(zhanghao,pass,name) VALUES('{$user}','{$pass}','{$name}')";
         mysqli_query($link, $sql);
        $insertId = mysqli_affected_rows($link);
         if ($insertId>0) {
	     $arr = array("msg" => "注册成功");
	    echo json_encode($arr);
         } else {
	       $arr = array("msg" => "注册失败");
	     echo json_encode($arr);
         }
		
		break;
}


?>