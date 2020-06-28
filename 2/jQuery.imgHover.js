/*
 * 功能：鼠标移入图片显示边框，图片放大
 * 调用：$(图片容器).imgHover({
			"borderC": "#fff",
			"borderW": "2"
		});
 * 
 */
(function($){
	$.fn.imgHover = function(options) {
		var defaults = {
			borderC: "#fff",//边框颜色
			borderW: "1", //边框宽度
		    ishowborder: "true",//是否显示边框
		    imgScale: "true"//鼠标移入图片,图片是否放大
		}
		options = $.extend(defaults,options);
		return this.each(function(){
			var _this = $(this);

			var $border = $("<span data-alt='border'></span>");
			
			_this.append($border);
			_this.css({
				"position": "relative",
				"overflow": "hidden"
			})
			_this.find("img").css({
				"-webkit-transition": "opacity .35s,transform .35s",
				"-o-transition": "opacity .35s,transform .35s",
				"transition": "opacity .35s,transform .35s"
			});
			if (options.ishowborder == "true") {
			    $border.css({
			        "position": "absolute",
			        "top": "10px",
			        "right": "10px",
			        "bottom": "10px",
			        "left": "10px",
			        "border": options.borderW + "px solid " + options.borderC,
			        "pointer-events": "none",
			        "opacity": 0,
			        "-webkit-transform": "scale(1.1)",
			        "-ms-transform": "scale(1.1)",
			        "-o-transform": "scale(1.1)",
			        "transform": "scale(1.1)",
			        "-webkit-transition": "opacity .35s,transform .35s",
			        "-o-transition": "opacity .35s,transform .35s",
			        "transition": "opacity .35s,transform .35s"
			    });
			}
			
			_this.hover(function(){
				$(this).find($border).css({
					"opacity": 1,
					"-webkit-transform": "scale(1)",
					"-ms-transform": "scale(1)",
					"-o-transform": "scale(1)",
					"transform": "scale(1)",
					"z-index": 100
				});
				if(options.imgScale == "true") {
					console.log("true");
					$(this).find("img").css({
						"-webkit-transform": "scale(1.2)",
						"-ms-transform": "scale(1.2)",
						"-o-transform": "scale(1.2)",
						"transform": "scale(1.2)",
					});
				}
				
			},function(){
				$(this).find($border).css({
					"opacity": 0,
					"-webkit-transform": "scale(1.1)",
					"-ms-transform": "scale(1.1)",
					"-o-transform": "scale(1.1)",
					"transform": "scale(1.1)",
					"z-index": 0
				});
				$(this).find("img").css({
					"-webkit-transform": "scale(1)",
					"-ms-transform": "scale(1)",
					"-o-transform": "scale(1)",
					"transform": "scale(1)",
				})
			});

		});
	}
})(jQuery);