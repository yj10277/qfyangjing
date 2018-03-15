<?php
        //引入文件
        require('mysqltongyong.php');
        //sql语句（select * from goods的意思是拿出yangjing里面全部数据）
        $sql = 'select * from user';
        //得到查询数据集合（对象）
        $res = $conn->query($sql);
        //转换成数组
        $row = $res->fetch_all(MYSQLI_ASSOC);

        echo json_encode($row,JSON_UNESCAPED_UNICODE);




?>