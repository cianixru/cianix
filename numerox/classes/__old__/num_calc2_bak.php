<?php
#setlocale(LC_ALL, 'ru_RU.UTF-8', 'ru.UTF-8', 'rus.UTF-8', 'ru_RU', 'ru', 'rus');







class letters2nums
{
   var $name;

/*
����������� - ����� � �����
*/
   function cnv2nums($name, $clr_bool)
   {
        if($name!=NULL)
        {
        $search_eng  = array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
        $replace_eng = array('1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8',
        '1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8');
        $replace_rus = array('1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6',
        '1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6');
        $search_rus =  array('�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�',
        '�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�');
        $name = str_replace($search_eng, $replace_eng, $name);
        $name = str_replace($search_rus, $replace_rus, $name);
        $this->name = $name;
        }
        /*  ������� �� ������ ��������  */
        $this->clear($clr_bool);
   }

/*
����� ���� ����� � ������
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
����������� ����������� � ������� �����: 13, 14, 16, 19, 11, 22, 33
*/
   function sum_nums_2()
   {
        $nm1 = $this->summ_nm($this->name);

       if(strlen($nm1)>='3'){$nm2 = $this->summ_nm($nm1);} else {$nm2 = $nm1;}

       if(strlen($nm2)>'1')
       {
            if($nm2=='13' xor  $nm2=='14' xor  $nm2=='16' xor $nm2=='19')
              {$nm2 = '����������� �����';}
            elseif($nm2=='11' xor $nm2=='22' xor  $nm2=='33')
              {$nm2 = '����������� �����';}
            else{$nm2 = $this->summ_nm($nm2);}
       }
       echo $nm1.' ('.$nm2.')';
   }

/*
������� �� ������ ��������
*/
   function clear($clrbool)
   {
        switch ($clrbool)
        {
        case 0:
            break;
        case 1: /* ��������� ������� */
            $this->name = preg_replace("/[^A-Za-z0-9�-��-� ]/", "", $this->name);
            break;
        case 2: /* ������� ������� */
            $this->name = preg_replace("/[^A-Za-z0-9�-��-�]/", "", $this->name);
            break;
        }
   }

/*
������ ����� �� �����   strlen
*/
    function break_word($br_word)
    {
        $wsize = strlen($br_word);
        echo '=>>>>'.$br_word[1];

    #for ($i=0, $cnt = strlen($br_word); $i<$cnt; $i++)
      # { echo '='.iconv("cp1251", "UTF-8", $br_word[$i]); }

    }


/*
����� �� ����� ����������
*/
   function print_nums()
   {
        echo '<h2>'.$this->name.'</h2>';
   }

}


?>