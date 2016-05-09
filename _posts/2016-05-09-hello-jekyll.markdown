---
layout:     post
title:      "jekyll安装--window环境"
subtitle:   " \"Hello World, Hello Blog\""
date:       2016-05-09 11:00:00
author:     "bglky"
header-img: "img/post-bg-2015.jpg"
tags:
    - 博客
---

1、 http://rubyinstaller.org/downloads/ 下载Ruby 和 Ruby Development Kit（注意系统位数以及ruby和devkit的版本对应，我的是rubyinstaller-2.3.0-x64.exe和DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe）
2、安装Ruby（我的是安装到C:\Ruby23-x64，注意安装路径不能有空格）（安装时记住勾上添加到环境变量 Add Ruby executables to your PATH），ruby -v检查是否安装成功
3、解压Ruby Development Kit（我的是解压到C:\RubyDevKit）
4、cd 到 Ruby Development Kit 解压目录，cd C:\RubyDevkit
5、 ruby dk.rb init  ,初始化创建config.yml文件
6、打开config.yml确保包含ruby安装路径。 如：- C:/Ruby23-x64
7、ruby dk.rb install
至此可以使用gem -v查看版本
至此jekyll的依赖环境安装完成
8、安装jekyll ,  gem install jekyll（可能会被墙，可换淘宝镜像）, jekyll -v 查看版本

