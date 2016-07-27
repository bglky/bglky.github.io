---
layout:     post
title:      "单页应用异步加载Disqus评论"
subtitle:   "\"Loading Disqus asynchronously on SPA.\""
date:       2016-07-26 23:25:07 +0800
author:     "Bglky"
tags:
    - 博客
---

### 1. 动态加载Disqus的embed.js文件

``` javascript

// 动态加载js 函数
function loadJS(url, callback, async, id) {
	var script = document.createElement("script");
	if (async) script.async = async;//是否异步加载
	if (id) script.id = id;
	script.src = url;
	if (callback) {//加载完毕回调函数

		//方法1：IE8及以下不支持addEventListener
		script.addEventListener("load", function(e) {
			callback(null, e);
		}, false);

		//方法2：兼容IE6/7/8
		/*
		if (script.readyState) {
			script.onreadystatechange = function () {
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					callback();
				}
			};
		} else {
			script.onload = function () {
				callback();
			};
		}
		*/

	}
	(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(script);
}

// 动态加载embed.js,把disqus_username改成你自己的
loadJS("http://disqus_username.disqus.com/embed.js", function() { /*加载完回调函数*/ }, true, "disqus");

```


### 2. 异步加载Disqus的评论

``` javascript

DISQUS.reset({
	reload: true,
	config: function() {
		this.page.identifier = "填写页面的id";
		this.page.url = "填写页面的url";
		this.page.title = "填写页面的标题";
		this.language = "填写Disqus界面的语言";//中文是zh , 英文是en
	}
});

```

### 3. 单页应用如何加载Disqus

#### 主要思路：

1. 在首次访问有评论的页面时 动态加载embed.js，并且回调DISQUS.reset()。
2. 后续访问有评论的页面时直接DISQUS.reset()。

#### 具体实施：

具体可参照[我blog的代码][3]

### 相关参考
- [Using Disqus on AJAX sites][1]
- [ An example DISQUS.reset recipe][2]


[1]:https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites
[2]:https://github.com/disqus/DISQUS-API-Recipes/blob/master/snippets/js/disqus-reset/disqus_reset.html
[3]:https://github.com/bglky/bglky.github.io/blob/master/js/my-app.js