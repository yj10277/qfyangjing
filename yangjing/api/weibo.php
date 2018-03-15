<?php

    //1、读取文件
    //  * 打开文件fopen(path,model)
    //2、修改内容
    //3、重写文件内容
    
    //接受前段传过来的数据
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    //路径
    $lj = 'date/weibo.json';
    //读取文件
    $file = fopen($lj,'r');
    //文件长度
    $cd = filesize($lj);
    //读取内容
    $nl = fread($file,$cd);
    //关闭文件，优化，可写可不写
    fclose($file);

    $arr = JSON_decode($nl);
    $date;
    foreach($arr as $a){
            if($a->id == $id){
                $a->likecnt++;
                $date = $a;
            };
    };
    //从新打开
    $file = fopen($lj,'w');
    //写入
    fwrite($file,json_encode($arr,JSON_UNESCAPED_UNICODE));
    //关闭文件，优化，可写可不写
    fclose($file);


    //输出
    echo json_encode($date,JSON_UNESCAPED_UNICODE);
    // var_dump($arr);








?>