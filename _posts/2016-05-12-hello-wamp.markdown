---
layout:     post
title:      "Wamp3修改默认www目录及数据库存储目录"
subtitle:   " \"Hello Wamp, Hello World.\" "
date:       2016-05-12
author:     "Bglky" 
tags:
    - 服务器
---


> 假设： Wamp3 安装在 C:\wamp64 ，www目录要改为 E:/wamp/www ，数据库存储目录要改为 E:/wamp/data

### 修改默认`www`目录

1. 修改 Apache 默认 www目录
    
    打开 C:\wamp64\bin\apache\apache2.4.17\conf\httpd.conf
	
        DocumentRoot "C:/wamp64/www/"
        修改为
        DocumentRoot "E:/wamp/www/"
        	
        <Directory "C:/wamp64/www/">
        修改为
        <Directory "E:/wamp/www/">

2. 修改 Wamp 配置

    打开 C:\wamp64\scripts\config.inc.php
	
        $wwwDir = $c_installDir.'/www';
        修改为
        $wwwDir = 'E:/wamp/www';
	
    打开 C:\wamp64\wampmanager.ini
	
        Type: item; Caption: "www directory"; Action: shellexecute; FileName: "C:/wamm64/www"; Glyph: 2
        修改为
        Type: item; Caption: "www directory"; Action: shellexecute; FileName: "E:/wamp/www"; Glyph: 2
        
    由于 C:\wamp64\wampmanager.tpl 里引用的是变量 `$wwwDir` ,如下
    
        Type: item; Caption: "${w_wwwDirectory}"; Action: shellexecute; FileName: "${wwwDir}"; Glyph: 2
    
    > 变量 `$wwwDir` 在 C:\wamp64\scripts\config.inc.php 中已修改过了，所以 C:\wamp64\wampmanager.tpl 文件可以不用修改，当然也可以手动将 "`${wwwDir}`" 改为 "E:/wamp/www"


### 修改 Mysql 默认 `data`目录（数据库存储目录）

1. 打开 C:\wamp64\bin\mysql\mysql5.7.9\my.ini
	
        datadir="C:/wamp64/bin/mysql/mysql5.7.9/data"
        修改为
        datadir="E:/wamp/data"

2. 复制 C:/wamp64/bin/mysql/mysql5.7.9/data/ 目录下的数据到 E:/wamp/data/


### 附：如果把 C:/wamp64/www/ 目录下的文件及文件夹复制到 E:/wamp/www/ 下,      浏览器打开 localhost 可能会出错
    	
1. 打开 E:\wamp\www\index.php

		$server_dir = "../";
		修改为
		$server_dir = "C:/wamp64/";
	
2. 打开 E:\wamp\www\add_vhost.php

		$server_dir = "../";
		修改为
		$server_dir = "C:/wamp64/";
	
3. 还要打开 C:\wamp64\scripts\config.inc.php
	
        $wampConf = @parse_ini_file($configurationFile);
        修改为
        $wampConf = @parse_ini_file('C:/wamp64/wampmanager.conf');//相对目录改为绝对目录,因为www路径已经改了,require后，还用相对路径的话会找不到wampmanager.conf文件

