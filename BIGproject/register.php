<?php
header("Content-type:text/html;charset=utf-8");
$name = $_REQUEST["usersname"];
 $pwd = $_REQUEST["pwd"];
 $cpwd = $_REQUEST["cpwd"];
 $email = $_REQUEST["email"];
$conn = mysql_connect("localhost","root","root");

mysql_select_db("cao"); 
$result =mysql_query("select * from users where username='$name'",$conn);
// $row =mysql_num_rows($result);
if(mysql_num_rows($result) ==1 ){
	echo "注册失败";
	
}else{
	 mysql_query("insert into users (username,pwd) values ('$name','$pwd')",$conn);
	echo "<script>setTimeout(\"window.location.href='login.html'\");</script>";
	 // header("location:login.html")
}

mysql_close($conn);

?>