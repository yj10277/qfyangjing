<?php
    //引入连接数据库文件
    require('../api/mysqltongyong.php');

    $username = isset($_GET['username']) ? $_GET['username']:null;
    $password = isset($_GET['password']) ? $_GET['password']:null;

    //加密密码
    $password = md5($password);

    //判断用户名是否存在  得到查询结果集
    $sql = "select * from user where name='$username' and password='$password'";
    
    //获取查询结果
    $jg = $conn->query($sql);

    if($jg->num_rows >0){
        echo 'success';
    }else{
        echo 'fail';
    }



 


?>