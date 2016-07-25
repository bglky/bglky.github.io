// Initialize app
var myApp = new Framework7({
	material: true,
	pushState: true,
	pushStateSeparator: "#!",
	cacheIgnore: ["/"],
	showBarsOnPageScrollEnd: false,
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
	//dynamicNavbar: true
});
$$(document).on('pageAfterAnimation', '.page', function() {//一开始就进入有评论的页面时还有问题
	$$("article a[href^='http']").addClass("external"); //博文里的外部链接添加class="external"
	if($$(".page-on-left").find("#disqus_thread"))
	{
		$$(".page-on-left").find("#disqus_thread").remove();
	}	
	var commentDom=$$(".page-on-center").find(".comment");	
	
	if(commentDom.length>0)
	{	
		if(!commentDom.find("#disqus_thread"))
		{
			commentDom.html('<div id="disqus_thread" class="disqus-thread"></div>');
		}		
		var disqus_identifier=commentDom.data("disqus_identifier");
		var disqus_url=commentDom.data("disqus_url");
		var disqus_title=commentDom.data("disqus_title");
		DISQUS.reset({
			reload: true,
			config: function() {
				this.page.identifier = disqus_identifier;
				this.page.url = disqus_url;
				this.page.title= disqus_title;
			}
		});
	}
})
$$("article a[href^='http']").addClass("external");//博文里的外部链接添加class="external"
//$$(document).once('pageAfterAnimation', '.page', function(e) {
//	(function() {
//		var dsq = document.createElement('script');
//		dsq.type = 'text/javascript';
//		dsq.async = true;
//		dsq.src = '//bglky.disqus.com/embed.js';
//		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
//	})();
//})
