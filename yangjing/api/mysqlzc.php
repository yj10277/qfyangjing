<?php
    //引入连接数据库文件
    require('../api/mysqltongyong.php');

    $username = isset($_GET['username']) ? $_GET['username']:null;
    $password = isset($_GET['password']) ? $_GET['password']:null;

    //判断用户名是否存在  得到查询结果集
    $data = $conn->query("select * from user where name='$username'");
    
    //如果不存在 写入数据库
    if($data->num_rows == 0){
            //加密密码
            $password = md5("$password");
            

            $sql = "insert into user(name,password) values('$username','$password')";
            $res = $conn->query($sql);
            //成功写入 输出success 失败输出fail
            if($res){
                echo "success";
            }else{
                echo "fail";
            }
    }



 


?>