---
layout:     post
title:      "jekyll安装--window环境下"
#subtitle:   " \"Hello World, Hello Blog\""
date:       2016-05-09 1:00:00
author:     "bglky"
header-img: "img/post-bg-2015.jpg"
tags:
    - 博客
---


### 依赖环境安装

 1. 下载 [Ruby 和 Ruby Development][1] 安装包（**注意系统位数以及 ruby 和 devkit 的版本对应**，我的是 rubyinstaller-2.3.0-x64.exe 和 DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe ）
 2. 安装Ruby（我的是安装到 C:\Ruby23-x64 ，**注意安装路径不能有空格**）（安装时记住勾上  Add Ruby executables to your PATH 添加到环境变量），`ruby -v` 检查是否安装成功
 3. 解压Ruby Development Kit 安装包（我的是解压到 C:\RubyDevKit ）
 4. cd 到 Ruby Development Kit 的解压目录，我的是 `cd C:\RubyDevkit`
 5. `ruby dk.rb init`
 6. `ruby dk.rb install`
 
（至此可以使用`gem -v`查看版本，至此jekyll的依赖环境安装完成）


### jekyll安装

 1.  `gem install jekyll`（国内可能会被墙，可换淘宝镜像，请自行百度）;安装后 `jekyll -v` 查看版本


  [1]: http://rubyinstaller.org/downloads/