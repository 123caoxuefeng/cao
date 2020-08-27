<?php
header("Content-type:text/html;charset=utf-8");
$conn = mysql_connect("localhost","root","root");
mysql_select_db("cao");
$result =mysql_query("select * from list ",$conn);
$cao = array();
while ($a1 =  mysql_fetch_assoc($result ))
{
	$cao[] = $a1;
}

echo json_encode($cao);

mysql_close($conn);
?>


















?>