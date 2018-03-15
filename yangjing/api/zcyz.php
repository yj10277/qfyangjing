<?php
    /*
        判断用户名是否存在
            存在：no
            不存在：yes
     */

    $arr = array('张三','李四','杨靖');
    
    $name = isset($_GET['name']) ? $_GET['name']:null;
    
    if(in_array($name,$arr)){
            echo 'no';
    }else{
        echo 'yes';
    }
    
        






?>