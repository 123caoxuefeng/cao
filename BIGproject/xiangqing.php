<?php
header("Content-type:text/html;charset=utf-8");
$name = $_REQUEST["name"];
$id = $_REQUEST["fuistid"];
$url = $_REQUEST["img"];
$iddd = $_REQUEST["funum"];
$conn = mysql_connect("localhost","root","root");
mysql_select_db("cao");
$result =mysql_query("select * from list where name='$name'",$conn);
if(mysql_num_rows($result) ==1){
	echo "<script>(\"window.location.href='xiangqing.html'\");</script>";
}else{
	 mysql_query("insert into list (name,fuistid,url,funum) values('$name','$id','$url','$iddd')",$conn);
}

mysql_close($conn);
?>