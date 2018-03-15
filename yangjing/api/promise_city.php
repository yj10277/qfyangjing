<?php
    /*
        根据ip地址获取城市
        * 参数
            * ip
            * http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=27.46.236.176
     */
    

    // 接收ip地址
    $ip = isset($_GET['ip']) ? $_GET['ip'] : '';


    $res = file_get_contents("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=$ip");//得到一个json字符串


    // 转成关联数组/对象
    $res = json_decode($res);//得到一个对象

    // $res = json_decode($res,true);//得到一个关联数组

    // var_dump($res);

    echo $res->city;

?>