<?php

require_once "classes/main.php";

?>
<!DOCTYPE HTML><html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <title>2222Astro-calc</title>
</head>

<body>

<h1>Калькулятор</h1>


<form action="">
    <p><b>Введите ваш номер телефона:</b><br />
     <input type="text" name="numer" /></p>
   
    <p><b>Введите ваше имя:</b><br>
     <input type="text" name="name1"></p>

     <p><b>Введите вашу фамилию:</b><br>
     <input type="text" name="name2"></p>

     <p><b>Введите ваше отчество:</b><br>
     <input type="text" name="name3"></p>

     <p><b>Введите дату рождения:</b><br>
     <input type="text" name="bdate1" maxlength="2" style="width: 20px">&nbsp;-&nbsp;<input type="text" name="bdate2" maxlength="2" style="width: 20px">&nbsp;-&nbsp;<input type="text" name="bdate3" maxlength="4" style="width: 36px"></p>

     <p><b>(Главные годы) дата рождения:</b><br>
     <input type="text" name="myear" maxlength="4" style="width: 36px">

     <p><input type="submit" name="submit1" value="Отправить"></p>
</form>

 <?php

$nums = new numerox();

if (!empty($_GET["name1"])) # if(isset($_GET['submit']))
{
    $numer = $_GET["numer"];
    $name1 = $_GET["name1"];
    $name2 = $_GET["name2"];
    $name3 = $_GET["name3"];
    $bdate1 = $_GET["bdate1"];
    $bdate2 = $_GET["bdate2"];
    $bdate3 = $_GET["bdate3"];
    $myear = $_GET["myear"];

    $fullname = $name1 . $name2 . $name3;


    
    
    
    $numer = $nums->summ_nm($numer);
    $numer2 = $nums->sum_nums($numer);
    echo '<br /><hr />НОМЕР ТЕЛЕФОНА: '.$numer.'('.$numer2.')';
    echo '<br /><hr />';
    
    $nums->cnv2nums($name1, 2, 0);
    $nums->break_word($name1);
    $nums->sum_nums_2($name1);

    echo '<br><br>';
    $nums->cnv2nums($name2, 2, 0);
    $nums->break_word($name2);
    $nums->sum_nums_2($name2);

    echo '<br><br>';
    $nums->cnv2nums($name3, 2, 0);
    $nums->break_word($name3);
    $nums->sum_nums_2($name3);
    echo '<br><br>';


    $jp = $nums->sum_nums($nums->sum_nums($bdate1, 1) + $nums->sum_nums($bdate2, 1) +
        $nums->sum_nums($bdate3, 1), 0);
    echo '<h3>Жизненный путь: ' . $jp . '</h3>';

    $chs = $nums->sum_nums($nums->sum_nums($nums->cnv2nums($name1, 2, 0), 1) + $nums->
        sum_nums($nums->cnv2nums($name2, 2, 0), 1) + $nums->sum_nums($nums->cnv2nums($name3,
        2, 0), 1), 0);
    echo '<h3>Число судьбы(Экспрессия): ' . $chs . '</h3>';

    $dp = $nums->sum_nums($nums->sum_nums($nums->vowels($name1, 0, 0), 0) + $nums->
        sum_nums($nums->vowels($name2, 0, 0), 0) + $nums->sum_nums($nums->vowels($name3,
        0, 0), 0), 0);
    echo '<h3>Душевное побуждение: ' . $dp . '</h3>';

    echo '<h3>Число рождения: ' . $bdate1;

    $chl = $nums->sum_nums($nums->sum_nums($nums->vowels($name1, 1, 0), 0) + $nums->
        sum_nums($nums->vowels($name2, 1, 0), 0) + $nums->sum_nums($nums->vowels($name3,
        1, 0), 0), 0);
    echo '<h3>Число личности: ' . $chl . '</h3>';

    $chr = $nums->sum_nums($jp + $chs, 0);
    echo '<h3>Число Реализации: ' . $chr . '</h3>';

    $chrzm = $nums->sum_nums($nums->sum_nums($nums->cnv2nums($name1, 2, 0), 0) + $nums->
        sum_nums($bdate1, 0), 1);
    echo '<h3>Число Разума: ' . $chrzm . '</h3>';

    $most_pe = $nums->most($nums->sum_nums($chs, 1), $nums->sum_nums($jp, 1));
    echo '<h3>Мост (путь-экспрессия): ' . $most_pe . '</h3>';

    $most_pe2 = $nums->most($nums->sum_nums($dp, 1), $nums->sum_nums($chl, 1));
    echo '<h3>Мост (душа-личность): ' . $most_pe2 . '</h3>';

    $most_pe3 = $nums->most($nums->sum_nums($chs, 1), $nums->sum_nums($dp, 1));
    echo '<h3>Мост (Экспрессия-душа): ' . $most_pe3 . '</h3>';


    $c = $nums->spectr_name($name1, $name2, $name3, 0);

    echo '<table border=1 cellpadding=5><tr>';
    echo '<td>' . $c[1] . '</td><td>' . $c[2] . '</td><td>' . $c[3] . '</td>';
    echo '</tr><tr>';
    echo '<td>' . $c[4] . '</td><td>' . $c[5] . '</td><td>' . $c[6] . '</td>';
    echo '</tr><tr>';
    echo '<td>' . $c[7] . '</td><td>' . $c[8] . '</td><td>' . $c[9] . '</td>';
    echo '</tr><table>';


    echo '<br>Кармические уроки: ';
    $karma_lesns = $nums->spectr_name($name1, $name2, $name3, 1);

    $karma_lesns = $nums->spectr_name($name1, $name2, $name3, 2);
    echo '<br>Число скрытой страсти: ' . $karma_lesns;

    $num_balance = $nums->num_balance($fullname);
    echo '<br><br>Число равновесия: ' . $num_balance;

    $ch_rosta = $nums->ch_rosta($name1);
    echo '<br>Число роста: ';
    echo $ch_rosta;


    echo '<br><h1>Главные годы:</h1>';
    echo '<table border=1 cellspacing=0 cellpadding=5><tr>';
    echo '<td>';
    $nums->main_years($myear, 0);
    echo '</td>';
    echo '<td>';
    $nums->main_years($myear, 1);
    echo '</td>';
    echo '<td>';
    $nums->main_years($myear, 2);
    echo '</td>';
    echo '</tr></table>';

} 

?>



</body></html>