<?php
    /*
        爬取ip138.com的ip地址
     */
    $content = file_get_contents('http://2017.ip138.com/ic.asp');


    // 转换编码
    $content = iconv('gb2312','utf-8',$content);

    // 提取ip地址
    preg_match('/\[((?:\d{1,3}\.?){4})\]/',$content,$ip);

    // var_dump($ip);

    // 输出
    echo $ip[1];

?>