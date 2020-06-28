/*
 * 功能：导航栏及其他模块实现相对于浏览器窗口定位
 *
*/
(function($){
	$.fn.navbarFixed = function(options) {
		var defaults = {
			eleId: "",
			fixedStyle: "navbar",// navbar:导航栏定位；other：其他模块定位
			bgColor: "",//导航栏背景颜色,若为空
			fixedPositionY: "top",//top:悬浮顶部；bottom: 悬浮底部 (注：导航栏定位无此参数)
			fixedPositionX: "left",//left: 居左；right: 居右 (注：导航栏定位无此参数)
			posY: 20,//y轴距离 (注：导航栏定位无此参数)
			posX: 20,  //x轴距离 (注：导航栏定位无此参数)
			opacity: "0.5" //透明度(0~1)
		}
		options = $.extend(defaults,options);
		return this.each(function(){
			var _this = $(this);

			//导航栏悬浮顶部
			if(options.fixedStyle == "navbar") {
				var posTop = options.eleId.position().top;//获取元素距离顶部的距离
				var h = options.eleId.outerHeight(true);//获取元素高度
				var topH = parseInt(posTop + h);//滚动距离
				
				$(window).scroll(function(){
					var top = $(document).scrollTop();//获取滚动条距顶部的距离
					if(top > topH) {
						options.eleId.addClass("scrollClass");
					} else {
						options.eleId.removeClass("scrollClass");
					}
					if(options.eleId.hasClass("scrollClass")) {
						options.eleId.css({
							"position": "fixed",
							"top": "0",
							"width": "100%",
							"z-index": "99999",
							"background": options.bgColor,
							"opacity": options.opacity
						});
					} else {
						options.eleId.removeAttr("style");
					}
				});
				
			} else if(options.fixedStyle == "other") {
				
				if(options.fixedPositionY == "bottom" && options.fixedPositionX == "right") {
					options.eleId.css({
						"position": "fixed",
						"bottom": options.posY + "px",
						"right": options.posX + "px",
						"left": "auto",
						"top": "auto",
						"z-index": "99999",
						"background": options.bgColor,
						"opacity": options.opacity
					});
				} else if(options.fixedPositionY == "top" && options.fixedPositionX == "right") {
					options.eleId.css({
						"position": "fixed",
						"top": options.posY + "px",
						"right": options.posX + "px",
						"left": "auto",
						"bottom": "auto",
						"z-index": "99999",
						"background": options.bgColor,
						"opacity": options.opacity
					});
				} else if(options.fixedPositionY == "bottom" && options.fixedPositionX == "left") {
					options.eleId.css({
						"position": "fixed",
						"bottom": options.posY + "px",
						"left": options.posX + "px",
						"right": "auto",
						"top": "auto",
						"z-index": "99999",
						"background": options.bgColor,
						"opacity": options.opacity
					});
				} else {
					
					options.eleId.css({
						"position": "fixed",
						"top": options.posY + "px",
						"left": options.posX + "px",
						"right": "auto",
						"bottom": "auto",
						"z-index": "99999",
						"background": options.bgColor,
						"opacity": options.opacity
					});
				}
			}
			
		});
	}
})(jQuery);