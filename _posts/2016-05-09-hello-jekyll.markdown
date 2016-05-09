---
layout:     post
title:      "jekyll安装 - window环境"
subtitle:   " \"Hello Jekyll, Hello Blog.\""
date:       2016-05-09 1:00:00
author:     "bglky"
header-img: "img/post-bg-2015.jpg"
tags:
    - 博客
---


### 依赖环境安装

 1. 下载 [Ruby 和 Ruby Development][1] 安装包（**注意系统位数以及 ruby 和 devkit 的版本对应**，我的是 rubyinstaller-2.3.0-x64.exe 和 DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe ）
 2. 安装 Ruby（我的是安装到 C:\Ruby23-x64 ，**注意安装路径不能有空格**）（安装时记住勾上  **Add Ruby executables to your PATH** 添加到环境变量），`ruby -v` 检查是否安装成功
 3. 解压 Ruby Development Kit 安装包（我的是解压到 C:\RubyDevKit ）
 4. cd 到 Ruby Development Kit 的解压目录（我的是 `cd C:\RubyDevkit` ）
 5. `ruby dk.rb init`
 6. `ruby dk.rb install`
 
（至此可以使用`gem -v`查看版本，至此jekyll的依赖环境安装完成）


### jekyll安装

 1.  `gem install jekyll`（国内可能会被墙，可换淘宝镜像，请自行百度）;安装后 `jekyll -v` 查看版本

### 创建jekyll项目

 1. 在要创建项目的目录下
   `jekyll new myblog` （myblog 为项目名）

### 运行jekyll项目
 1. `cd myblog` 进入项目目录
 2. `jekyll serve` 运行项目
 3. 浏览器打开  `http://localhost:4000`  ，即可看到项目页面

> From 2016, 'pygments' is unsupported on GitHub Pages. Use **'rouge'** for highlighting instead.

### 更多安装参考
 1. [jekyll 官网][2]
 2. [A step-by-step guide to setting up Jekyll on Windows][3]


  [1]: http://rubyinstaller.org/downloads/
  [2]: https://jekyllrb.com/
  [3]: http://jekyll-windows.juthilo.com/
