<?php

    // 商品信息
    $sp = array(
        "biaoti" => "小苹果",
        "img" => "../images/004.jpg",
        "price" => "8989",
    );
    $goods = array(
             "id" => "001",
             "name" => "苹果",
             "price" => 9999,
             "img" => "../images/001.jpg",
             "nickname" => "小苹果"
        );


    echo json_encode($sp,JSON_UNESCAPED_UNICODE);
    // echo json_encode($goods);
    







?>