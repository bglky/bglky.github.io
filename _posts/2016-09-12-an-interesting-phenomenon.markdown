---
layout:     post
title:      "深入挖掘  (4).toString() 、 4.toString() 、 4..toString()"
subtitle:   "\"A very interesting phenomenon.\""
date:       2016-09-12 17:25:07 +0800
author:     "Bglky"
tags:
    - JS
---

### 1. 有趣的现象
![有趣的现象](/img/2016/an-interesting-phenomenon.jpg)

### 2. 理论基础：
> 每当读取一个number,string,boolean基本类型值的时候，后台就会创建一个对应的基本包装类型的对象Number,String,Boolean，从而让我们能够调用一些方法来操作这些数据。

### 3. 具体分析：
- `(4).toString()` 中读取 `4` 时被后台创建了一个对应的Number对象来操作，`.` 被当作前述Number对象的点表示法来访问属性。所以正常执行。
- `4.toString()` 按照上述理论表面看起来不会错，但是，此处在语法解析时出错了。`4.` 被解析为数值了，数值后直接加 `toString()` 当然语法出错。
- `4..toString()` 首先 `4.` 被解析为数值（当读取数值时后台创建了对应的Number对象），`4..` 的第二个 `.` 被解析为Number对象的点表示法来访问属性。所以正常执行。

### 相关参考
- 《JavaScript高级程序设计》