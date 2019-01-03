<?php
include "class/num_calc.php";

$username = $HTTP_GET_VARS["username"];
?>


<!DOCTYPE HTML><html>
<head>
  <title>Astro-calc</title>
</head>

<body>

<h1>Калькулятор</h1>

<?php




  if ($username!='') {
    echo $username.'<br>';
  }
  else {
?>

<form action="">
    <p><b>Введите ваше имя:</b><br>
     <input type="text" name="username"></p>

     <p><input type="submit" value="Отправить"></p>
</form>

 <?php
  }
?>


<?php




$object = new letters2nums;
$object->cnv2nums($username, 2);
$object->print_nums();
$object->sum_nums_2();
$object->break_word($username);
?>


</body></html>