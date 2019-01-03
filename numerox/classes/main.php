<?php
/*
Подключение настроек
*/
require_once 'ini.php';

/*
Авто-подгрузка классов
*/
class load 
{
    public static function _init() 
    {
        ini_set('unserialize_callback_func', 'spl_autoload_call');
        spl_autoload_register(array(new self, 'autoload'));
    }
    protected static function autoload($class)
    {
        $pathname = CLASS_DIR . '/';
        $pathname .= str_replace("\\", "/", $class);
        $pathname .= ".class.php";
        if(is_readable($pathname))
            require_once($pathname);
    }
}
load::_init();

/*
Авторизация

require_once ROOT_NAME.'/login/dbc.php';
page_protect();
*/

/* 
Защита от взлома 

// if(!stristr($_SERVER["DOCUMENT_ROOT"], ROOT_NAME) || !stristr($_SERVER["HTTP_HOST"], HOST_NAME) ) die();
*/

/*
Отчет об ошибках
*/
error_reporting(E_ALL);
ini_set("display_errors", 1);


/*
Очистка строки от лищних символов
*/
function str_clear($cstring, $bl_mtd=0)
{
    switch ($bl_mtd)
    {
        case 0:  // одинарные и двойные ковычки преобразовываются в html
            return trim(mysql_real_escape_string(stripslashes(htmlspecialchars($cstring, ENT_QUOTES, 'utf-8'))));  break;
        case 1: // одинарные и двойные ковычки экранируются html-теги удаляются
            return trim(mysql_real_escape_string(stripslashes(strip_tags($cstring))));  break;
        case 2: // одинарные и двойные ковычки экранируются (addslashes) html-теги удаляются
            return trim(addslashes(strip_tags($cstring)));  break;
        case 3:  // Для логина и пароля (вырезается все лишнее)
            $cstring =  preg_replace("#[^-.\w\d\s]#iu", "", $cstring);  
            return trim($cstring);  break;
    }      
}

 ?>