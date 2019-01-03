<?php
/*
Класс подключения к MySQL
*/
class connect_mysqli extends mysqli
{
    public function __construct($bdbool=0) /* Параметры: 0-не подключать БД, 1-подключить БД */
    {
      switch ($bdbool)
        {
        case 0:  /* 0-не подключать DATABASE_NAME */
          parent::__construct($host=DATABASE_HOST, $user=DATABASE_USERNAME, $pass=DATABASE_PASSWORD);
          break;
        case 1:  /* 1-подключить DATABASE_NAME */
          parent::__construct($host=DATABASE_HOST, $user=DATABASE_USERNAME, $pass=DATABASE_PASSWORD, $db=DATABASE_NAME);
          break;
        }
        if (mysqli_connect_error()) { die('Ошибка подключения к MySQL (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); }
        $this->set_charset("utf8");
    }
}
?>