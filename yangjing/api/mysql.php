<?php
        // 连接mysql
        $conn = new mysqli('localhost', 'root', '', 'yangjing');
        // 设置字符集(防止中文乱码)
        $conn->set_charset('utf8');
        //获取全部的数据（结果集）
        $result = $conn->query('select * from goods');
        
        //使用查询结果集,得到数组
        $row = $result->fetch_all(MYSQLI_ASSOC);
        echo(json_encode($row,JSON_UNESCAPED_UNICODE));


    


?>