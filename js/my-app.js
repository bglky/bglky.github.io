// Export selectors engine
var $$ = Dom7;


var duoshuoQuery = {short_name:$$('meta[name="duoshuo_username"]').length>0? $$('meta[name="duoshuo_username"]').attr("content"):""};

// load js function
function loadJS(u, c, a, i) {
	var d = document,
		t = 'script',
		o = d.createElement(t),
		s = d.getElementsByTagName(t)[0];
	o.async = a;
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
function checkDisqus(page) {
//	var commentDom = $$(".page").find(".comment_disqus");
//	if (commentDom.length > 0) {
//		commentDom.find("#disqus_thread").remove();
//		if (commentDom.length == 1) {
//			if ($$(".view-main").find(".page").length == 1 || $$(".page-from-left-to-center").find(".comment_disqus").length > 0 || $$(".page-on-center").find(".comment_disqus").length > 0) {
//				loadDisqus(commentDom);
//			}
//		} else {
//			if ($$(".page-from-left-to-center").find(".comment_disqus").length > 0) {
//				commentDom = $$(".page-from-left-to-center").find(".comment_disqus");
//			}
//			if ($$(".page-on-center").find(".comment_disqus").length > 0) {
//				commentDom = $$(".page-on-center").find(".comment_disqus");
//			}
//			loadDisqus(commentDom);
//		}
//	}
	var commentDom = page.find(".comment_disqus");
	if (commentDom.length > 0) {
		$$(".page").find("#disqus_thread").remove();
		loadDisqus(commentDom);
	}
}

// load duoshou
function loadDuoshuo(commentDom) {
	if ($$("script#duoshuo").length == 0) {
		loadJS("http://static.duoshuo.com/embed.js", function() {			
		}, true, "duoshuo");
	} else {
		var el = document.createElement('div'); //该div不需要设置class="ds-thread"			
		el.setAttribute('data-thread-key', commentDom.data("thread-key")); //必选参数
		el.setAttribute('data-url', commentDom.data("url")); //必选参数
		el.setAttribute('data-title', commentDom.data("title"));
		DUOSHUO.EmbedThread(el);
		commentDom.html("");
		commentDom.append(el);
		DUOSHUO.initSelector('.ds-share',{type:'ShareWidget'});
	}
}
function checkDuoshuo(page){
	var commentDom =page.find(".comment_duoshuo");
	if(commentDom.length>0)
	loadDuoshuo(commentDom);
}
// load Baidu Analytics
function loadBA(){
	$$("script#baidu_analytics").remove();
	var ba_track_id=$$('meta[name="ba_track_id"]').attr("content");
	var _hmt = _hmt || [];
	loadJS("http://hm.baidu.com/hm.js?"+ba_track_id,function(){},true,"baidu_analytics");	
}


// Initialize app
var myApp = new Framework7({
	material: true,
	pushState: true,
	pushStateSeparator: "#!",
	cacheIgnore: ["/"],
	showBarsOnPageScrollEnd: false
});

// Add view
var mainView = myApp.addView('.view-main', {	
});


(function() {
	$$("article a[href^='http']").addClass("external").attr("target","_blank");
	checkDisqus($$(".page"));
	checkDuoshuo($$(".page"));
	loadBA();
})();	

$$(document).on('pageAfterAnimation', '.page', function() {
	$$("article a[href^='http']").addClass("external").attr("target","_blank"); //博文里的外部链接添加class="external"	
	checkDisqus($$(this));
	checkDuoshuo($$(this));	
//	loadBA();
})

$$(document).on('pageInit','.page[data-page="Tags"]',function(e){
	var urlStr=e.detail.page.url;
	var index=urlStr.indexOf("#");
	var hash="";
	var top=0;
	if (index>0){
		hash=urlStr.substring(index+1);
	}	
	$$('.page[data-page="Tags"] .tag-name a').each(function(){
		if($$(this).attr("name")==hash){
			top=$$(this).offset().top;
		}		
	})
	$$(".page-content").scrollTop(top-120,300);
})

$$(document).on('ajaxStart', function (e) {
	var container = $$('body');
    if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
    myApp.showProgressbar(container,'yellow');	    
});
$$(document).on('ajaxComplete', function (e) {
	var container = $$('body');
	myApp.hideProgressbar(container); //hide
});



