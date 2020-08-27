<?php
header("Content-type:text/html;charset=utf-8");
$_name = $_REQUEST["username"];
$_pwd = $_REQUEST["pwd"];
$conn=mysql_connect("localhost","root","root");
mysql_select_db("cao"); 
$result =mysql_query("select * from users where username='$_name'and pwd='$_pwd'",$conn);
echo mysql_error();
	
// $row =mysql_num_rows($result);
if(mysql_num_rows($result)==1){
	echo "<script>setTimeout(\"window.location.href='first.html'\");</script>";
}else{
	echo "登陆失败";
	
}
mysql_close($conn);

?>