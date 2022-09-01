/* TFP - nagarlyricshub.blogspot.com - Above */
var og = document.title;
var csong = og.substr(0,og.toLowerCase().indexOf('lyrics')).trim();
var cartist = og.substr(0,og.toLowerCase().indexOf('lyrics')).trim();
if (csong == "") csong = og;
if (cartist == "") cartist = og;
(function() {
	var opts = {
		artist: cartist,
		song: csong,
		adunit_id: 100004310,
		div_id: "cf_async_" + Math.floor((Math.random() * 999999999))
	};
	document.write('<div id="'+opts.div_id+'"></div>');var c=function(){cf.showAsyncAd(opts)};if(typeof window.cf !== 'undefined')c();else{cf_async=!0;var r=document.createElement("script"),s=document.getElementsByTagName("script")[0];r.async=!0;r.src="//srv.clickfuse.com/showads/showad.js";r.readyState?r.onreadystatechange=function(){if("loaded"==r.readyState||"complete"==r.readyState)r.onreadystatechange=null,c()}:r.onload=c;s.parentNode.insertBefore(r,s)};
})();
