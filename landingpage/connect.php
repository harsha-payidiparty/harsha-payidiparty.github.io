<?php

$con = mysql_connect("database-1.cysks68jdy9n.us-east-2.rds.amazonaws.com","admin","haRsha1997");

if (!$con)

  {

  die('Could not connect: ' . mysql_error());

  }

 

mysql_select_db("aws-db-1", $con);

 

$sql="INSERT INTO signup_users (fname, email)

VALUES

('$_POST[fname]','$_POST[email]')";

 

if (!mysql_query($sql,$con))

  {

  die('Error: ' . mysql_error());

  }

echo "1 record added";

 

mysql_close($con)

?>