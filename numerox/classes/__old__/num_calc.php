<?php
setlocale (LC_ALL, array ('ru_RU.utf-8', 'rus_RUS.utf-8'));

class letters2nums
{
   var $name;

/*
Конвертация - буквы в цифры
*/
   function cnv2nums($name, $clr_bool)
   {
        if($name!=NULL)
        {
        $search_eng  = array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
        $replace_eng = array('1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8',
        '1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8');
        $search_rus =  array('А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я',
        'а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я');
        $replace_rus = array('1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6',
        '1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6');
        $name = str_replace($search_eng, $replace_eng, $name);
        $name = str_replace($search_rus, $replace_rus, $name);
        }
        /*  Очистка от лишних символов  */
        $name = $this->clear($name,$clr_bool);
        return $name;
   }

/*
Сумма всех чисел в строке
*/
   function summ_nm($chislo)
   {
    $num = $chislo;
    $num = strval($num);
    $summ = 0;
    for ($i=0,$cnt = strlen($num); $i<$cnt; $i++)
        { $summ += $num[$i]; }
    return $summ;
   }

/*
Определение кармических и старших чисел: 13, 14, 16, 19, 11, 22, 33
*/
   function sum_nums_2($schislo)
   {
        $nm1 = $this->cnv2nums($schislo,2);
        $nm1 = $this->summ_nm($nm1);

       if(strlen($nm1)>='3'){$nm2 = $this->summ_nm($nm1);} else {$nm2 = $nm1;}

       if(strlen($nm2)>'1')
       {
            if($nm2=='13' xor  $nm2=='14' xor  $nm2=='16' xor $nm2=='19')
              {$nm2 = 'Кармическое число';}
            elseif($nm2=='11' xor $nm2=='22' xor  $nm2=='33')
              {$nm2 = 'Управляющее число';}
            else{$nm2 = $this->summ_nm($nm2);}
       }
       echo $nm1.' ('.$nm2.')';
   }


/*
Суммирование числа до 1-го знака, исключая числа: 13, 14, 16, 19, 11, 22, 33
*/
   function sum_nums($schislo,$abool)
    {
    $nm1 = $this->cnv2nums($schislo,2);
    $nm2 = $nm1;

     switch ($abool)
        {
        case 0: /* Суммирование числа до 1-го знака (учитываются: 13, 14, 16, 19, 11, 22, 33) */
            while(strlen($nm2)>'1' xor $nm2=='13' xor  $nm2=='14' xor  $nm2=='16' xor $nm2=='19' xor $nm2=='11' xor $nm2=='22' xor  $nm2=='33')
            { $nm2 = $this->summ_nm($nm2); }
        break;
        case 1:  /* Суммирование всех чисел до 1-го знака (без исключений) */
            while(strlen($nm2)>'1') { $nm2 = $this->summ_nm($nm2); }
            break;
        case 2: /* Суммирование числа до 1-го знака (учитываются: 11, 22, 33) */
            while(strlen($nm2)>'1' xor $nm2=='11' xor $nm2=='22' xor  $nm2=='33')
            { $nm2 = $this->summ_nm($nm2); }
            break;
        }
    return $nm2;
    }


/*
Очистка от лишних символов
*/
   function clear($clrword, $clrbool)
   {
        switch ($clrbool)
        {
        case 0:
            break;
        case 1: /* оставляем пробелы */
            $clrword = preg_replace("#[^A-Za-z0-9А-Яа-яЁё ]#iu", "", $clrword);
            break;
        case 2: /* удаляем пробелы */
            $clrword = preg_replace("#[^A-Za-z0-9А-Яа-яЁё]#iu", "", $clrword);
            break;
        case 3: /* удаляем все кроме цифр */
            $clrword = preg_replace("#[^0-9]#iu", "", $clrword);
            break;
        }
        return $clrword;
   }

/*
Разбор слова на числа
*/

    function break_word($br_word)
    {
      $wsize = strlen($br_word);
      $br_word = $this->clear($br_word,1);

      $in = preg_split('//u', $br_word, -1, PREG_SPLIT_NO_EMPTY);

      echo '<table border=1 cellpadding=5><tr>';
      for ($i=0, $cnt = count($in); $i<$cnt; $i++)
      { echo '<td>'.$in[$i].'</td>'; }

      echo '</tr><tr>';

      $numz = $this->cnv2nums($br_word,1);
      for ($i=0, $cnt = strlen($numz); $i<$cnt; $i++)
      { echo '<td>'.$numz[$i].'</td>'; }

      echo '</tr></table>';
    }


/*
Извлечь гласные/согласные буквы из строки
*/
    function vowels($word_vovels,$vov_bool,$metod_bool)
    {
    switch ($vov_bool)
        {
        case 0: /* извлекаем гласные - Душевное побуждение */
            $word_vovels = preg_replace("#[^AEIOUYaeiouyауоыиэяюёеАУОЫИЭЯЮЁЕ]#iu", "", $word_vovels);
            $word_vovels = $this->cnv2nums($word_vovels,2);
            $word_vovels = $this->sum_nums($word_vovels,$metod_bool);
            break;
        case 1: /* извлекаем согласные - Число личности */
            $word_vovels = preg_replace("#[^BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxzбвгджзйклмнпрстфхцчшщБВГДЖЗЙКЛМНПРСТФХЦЧШЩ]#iu", "", $word_vovels);
            $word_vovels = $this->cnv2nums($word_vovels,2);
            $word_vovels = $this->sum_nums($word_vovels,$metod_bool);
            break;
        }
    return $word_vovels;
    }

/*
Главные годы
*/
    function main_years($m_year,$vbool)
    {
        switch ($vbool)
        {
        case 0: /* вариант  1 (дает результаты, расположенные близко друг к другу) */
          for ($i=1; $i<=15; $i++)
          {
            $m_year+=$this->sum_nums($m_year,1);
              echo $m_year.'<br>';
          }
          break;
        case 1: /* вариант  2 (Прогрессивный ряд)*/
          for ($i=1; $i<=10; $i++)
          {
            $m_year+=$this->summ_nm($m_year);
              echo $m_year.'<br>';
          }
          break;
        case 2: /* вариант  3 (Повторяющийся ряд) */
          $yr = $this->summ_nm($m_year);
          for ($i=1; $i<=10; $i++)
          {
            $m_year+=$yr;
              echo $m_year.'<br>';
          }
          break;
        }
    }


/*
Из большего отнять меньшее
*/
function most($num1,$num2)
    {
      if($num1>$num2) { return $num1-$num2; }
      else { return $num2-$num1;}
    }


/*
Число Равновесия
*/
function num_balance($fullname)
    {
    return $this->sum_nums(strlen($fullname),1);
    }

/*
Число роста
*/
function ch_rosta($name)
{
    return $this->sum_nums($name,2);
}

/*
Спектр имени
*/
function spectr_name($spname1,$spname2,$spname3,$pbool)
    {
      $spname = $spname1.$spname2.$spname3;
      $c[1] = preg_replace("#[^АаAaИиJjСсSsЪъ]#iu", "", $spname);
      $c[2] = preg_replace("#[^БбBbЙйKkТтTtЫы]#iu", "", $spname);
      $c[3] = preg_replace("#[^ВвCcКкLlУуUuЬь]#iu", "", $spname);
      $c[4] = preg_replace("#[^ГгDdЛлMmФфVvЭэ]#iu", "", $spname);
      $c[5] = preg_replace("#[^ДдEeМмNnХхWwЮю]#iu", "", $spname);
      $c[6] = preg_replace("#[^ЕеFfНнOoЦцXxЯя]#iu", "", $spname);
      $c[7] = preg_replace("#[^ЁёGgОоPpЧчYy]#iu", "", $spname);
      $c[8] = preg_replace("#[^ЖжHhПпQqШшZz]#iu", "", $spname);
      $c[9] = preg_replace("#[^ЗзIiРрRrЩщ]#iu", "", $spname);

      switch ($pbool)
        {
        case 0: /* создать массив всех чисел спектра имени */
          for ($i=1; $i<10; $i++) { $c[$i] = strlen($c[$i]); }
          return $c; break;
        case 1: /* найти числа кармических уроков */
          for ($i=1; $i<10; $i++)
              {
                if(strlen($c[$i])=='0') { echo $i.'; '; }
              }
              break;
        case 2: /* найти число скрытой страсти */
          for ($i=1; $i<10; $i++) {$c[$i] = strlen($c[$i]);}
          return array_search(max($c),$c);
          break;
        }
    }


} ?>