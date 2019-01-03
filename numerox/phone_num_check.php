<?php
require_once "classes/main.php";

$nums = new numerox();
$lock=0;

if (!empty($_GET["phone_num_1"])) {$phone_num_1 = $nums->clear($_GET["phone_num_1"],3); } else{$lock=1; $phone_num_1='';}
if (!empty($_GET["ccode"])) { $ccode = $nums->clear($_GET["ccode"],3); } else{$lock=1; $ccode=7;}

?>

<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>Анализ номера телефона</title>
</head>

<body>

<form action="">
    <p><b>Введите номер телефона:</b><br />
    +<input type="text" name="ccode" maxlength="2" size="1"  value="<?=$ccode?>" /> - <input type="text" name="phone_num_1" value="<?=$phone_num_1?>" /></p>

    <p><input type="submit" value="Отправить" /></p>
</form>

</body>
</html>




<?php



if ($lock==0)
{
 $phone_num_1 = $nums->clear($_GET["phone_num_1"],3);
 $ccode = $nums->clear($_GET["ccode"],3);
 
 $fullnum = $ccode.$phone_num_1; 

 $result1 = $nums->summ_nm($fullnum);  // сумма полного номера с 7-кой
 $result2 = $nums->summ_nm($phone_num_1); // сумма полного номера без 7-ки
 $result3 = $nums->summ_nm(substr($phone_num_1, -7)); // сумма последних 7 цифр
 $result4 = $nums->summ_nm(substr($phone_num_1, -4)); // сумма последних 4 цифр
 $result5 = $nums->summ_nm(substr($phone_num_1, -2)); // сумма последних 2 цифр
 
 
 echo '<br /><hr />';
 echo '<br />Число полного номера: '.$result1.'('.$nums->sum_nums($result1,0).')';
 echo '<br />Число без кода страны: '.$result2.'('.$nums->sum_nums($result2,0).')';
 echo '<br />Число последних 7 цифр номера: '.$result3.'('.$nums->sum_nums($result3,0).')';
 echo '<br />Число последних 4 цифр номера: '.$result4.'('.$nums->sum_nums($result4,0).')';
 echo '<br />Число последних 2 цифр номера: '.$result5.'('.$nums->sum_nums($result5,0).')';
}
else
{
    echo "Не введены данные";
}
?>