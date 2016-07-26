// load js function
function loadJS(u, c, a = true, i = "") {
	var d = document,
		t = 'script',
		o = d.createElement(t),
		s = d.getElementsByTagName(t)[0];
	o.async = true;
	if (i) o.id = i;
	o.src = u;
	if (c) {
		o.addEventListener('load', function(e) {
			c(null, e);
		}, false);
	}
	s.parentNode.insertBefore(o, s);
}
// load Disqus , it is async now,support spa
function loadDisqus(commentDom) {
	var disqus_username=$$('meta[name="disqus_username"]').attr("content");
	commentDom.html('<div id="disqus_thread" class="disqus-thread"></div>');				
	if ($$("script#disqus").length == 0) {
		loadJS("http://"+disqus_username+".disqus.com/embed.js", function() {
			var disqus_identifier = commentDom.data("disqus_identifier");
			var disqus_url = commentDom.data("disqus_url");
			var disqus_title = commentDom.data("disqus_title");
			DISQUS.reset({
				reload: true,
				config: function() {
					this.page.identifier = disqus_identifier;
					this.page.url = disqus_url;
					this.page.title = disqus_title;
				}
			});
		}, true, "disqus");
	} else {
		var disqus_identifier = commentDom.data("disqus_identifier");
		var disqus_url = commentDom.data("disqus_url");
		var disqus_title = commentDom.data("disqus_title");
		DISQUS.reset({
			reload: true,
			config: function() {
				this.page.identifier = disqus_identifier;
				this.page.url = disqus_url;
				this.page.title = disqus_title;
			}
		});
	}
}
// check whether load Disqus or not, if load,check which commentDom to load to,it is perfect now
function checkDisqus() {
	var commentDom = $$(".page").find(".comment");
	if (commentDom.length > 0) {
		commentDom.find("#disqus_thread").remove();
		if (commentDom.length == 1) {
			if ($$(".view-main").find(".page").length == 1 || $$(".page-from-left-to-center").find(".comment").length > 0 || $$(".page-on-center").find(".comment").length > 0) {
				loadDisqus(commentDom);
			}
		} else {
			if ($$(".page-from-left-to-center").find(".comment").length > 0) {
				commentDom = $$(".page-from-left-to-center").find(".comment");
			}
			if ($$(".page-on-center").find(".comment").length > 0) {
				commentDom = $$(".page-on-center").find(".comment");
			}
			loadDisqus(commentDom);
		}
	}
}	


// Initialize app
var myApp = new Framework7({
	material: true,
	pushState: true,
	pushStateSeparator: "#!",
	cacheIgnore: ["/"],
	showBarsOnPageScrollEnd: false
});
// Export selectors engine
var $$ = Dom7;
// Add view
var mainView = myApp.addView('.view-main', {	
});

$$("article a[href^='http']").addClass("external");
checkDisqus();

$$(document).on('pageAfterAnimation', '.page', function() {
	$$("article a[href^='http']").addClass("external"); //博文里的外部链接添加class="external"	
	checkDisqus();
})


			
//loadJS("http://hm.baidu.com/hm.js?3a12295eec4bd436a92e0b39d50f5b31",function(){console.log("loaded baidu")},true,"baidu_analytics");	
			
//百度统计
//			
//			var _hmt = _hmt || [];
//			(function() {
//			  var hm = document.createElement("script");
//			  hm.id = "baidu_analytics";
//			  hm.src = "//hm.baidu.com/hm.js?3a12295eec4bd436a92e0b39d50f5b31";
//			  var s = document.getElementsByTagName("script")[0]; 
//			  s.parentNode.insertBefore(hm, s);
//			})();
//
//
//$$(document).on('pageAfterAnimation', '.page', function(){
//	var _hmt = _hmt || [];
//	(function() {
//		$$("#baidu_analytics").remove();
//		var hm = document.createElement("script");
//		hm.id = "baidu_analytics";
//		hm.src = "//hm.baidu.com/hm.js?3a12295eec4bd436a92e0b39d50f5b31";
//		var s = document.getElementsByTagName("script")[0]; 
//		s.parentNode.insertBefore(hm, s);
//	})();
//})