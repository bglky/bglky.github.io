//// load js function
//function loadJS(u, c, a = true, i = "") {
//	var d = document,
//		t = 'script',
//		o = d.createElement(t),
//		s = d.getElementsByTagName(t)[0];
//	o.async = true;
//	if (i) o.id = i;
//	o.src = u;
//	if (c) {
//		o.addEventListener('load', function(e) {
//			c(null, e);
//		}, false);
//	}
//	s.parentNode.insertBefore(o, s);
//}
//// load Disqus , it is async now,support spa
//function loadDisqus(commentDom) {
//	var disqus_username=$$('meta[name="disqus_username"]').attr("content");
//	commentDom.html('<div id="disqus_thread" class="disqus-thread"></div>');				
//	if ($$("script#disqus").length == 0) {
//		loadJS("http://"+disqus_username+".disqus.com/embed.js", function() {
//			var disqus_identifier = commentDom.data("disqus_identifier");
//			var disqus_url = commentDom.data("disqus_url");
//			var disqus_title = commentDom.data("disqus_title");
//			DISQUS.reset({
//				reload: true,
//				config: function() {
//					this.page.identifier = disqus_identifier;
//					this.page.url = disqus_url;
//					this.page.title = disqus_title;
//				}
//			});
//		}, true, "disqus");
//	} else {
//		var disqus_identifier = commentDom.data("disqus_identifier");
//		var disqus_url = commentDom.data("disqus_url");
//		var disqus_title = commentDom.data("disqus_title");
//		DISQUS.reset({
//			reload: true,
//			config: function() {
//				this.page.identifier = disqus_identifier;
//				this.page.url = disqus_url;
//				this.page.title = disqus_title;
//			}
//		});
//	}
//}
//// check whether load Disqus or not, if load,check which commentDom to load to,it is perfect now
//function checkDisqus() {
//	var commentDom = $$(".page").find(".comment");
//	if (commentDom.length > 0) {
//		commentDom.find("#disqus_thread").remove();
//		if (commentDom.length == 1) {
//			if ($$(".view-main").find(".page").length == 1 || $$(".page-from-left-to-center").find(".comment").length > 0 || $$(".page-on-center").find(".comment").length > 0) {
//				loadDisqus(commentDom);
//			}
//		} else {
//			if ($$(".page-from-left-to-center").find(".comment").length > 0) {
//				commentDom = $$(".page-from-left-to-center").find(".comment");
//			}
//			if ($$(".page-on-center").find(".comment").length > 0) {
//				commentDom = $$(".page-on-center").find(".comment");
//			}
//			loadDisqus(commentDom);
//		}
//	}
//}	
// load Baidu Analytics
//function loadBA(){
//	$$("script#baidu_analytics").remove();
//	var ba_track_id=$$('meta[name="ba_track_id"]').attr("content");
//	var _hmt = _hmt || [];
//	loadJS("http://hm.baidu.com/hm.js?"+ba_track_id,function(){},true,"baidu_analytics");	
//}


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

(function() {
	$$("article a[href^='http']").addClass("external");
//	checkDisqus();
//	loadBA();
})();	

$$(document).on('pageAfterAnimation', '.page', function() {
	$$("article a[href^='http']").addClass("external"); //博文里的外部链接添加class="external"	
//	checkDisqus();
//	loadBA();
})
