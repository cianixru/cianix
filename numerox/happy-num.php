<!DOCTYPE html>
<html lang="ru">
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<head>
	<title>Таблица счастливых чисел для 6</title>
</head>
<body>

    <form action="#" method="get">
		<select   name="num">
			<option disabled>Число</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6" selected>6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
		</select>
		
        <input type="text" maxlength="9" name="mynum" />
        <input type="submit" value="Отправить" />
      </form>


<?php
   $num = $_GET["num"];
   $mynum = $_GET["mynum"];

 $i=$num;
 //$br=0;
 $result = "не подходит";
  while ($i<999999999)
	{
		/* 
		if($br<10)
		{ 
			$br++;	
		}
		else
		{
			echo "<br>";
			$br=0;
			$br++;
		}
		*/

		$i=$i+9;
		// echo $i.", "; 

		
		if($i <= $mynum)
		{
			if($i == $mynum)
			{
				$result = "подходит!";
				break;
			}
		}
		else break;
	}
	echo "Для ".$num." число ".$mynum." ".$result;
?>

</body></html>