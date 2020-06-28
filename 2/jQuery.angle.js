/*
 * 功能：添加三角形
 * 调用：$(".box").angleFun({
            ward: "downward"
         })
 */
(function($){
	$.fn.angleFun = function(options) {
	    var defaults = {
	        angleStyle: "angle",//angle三角形；rightAngle直角
			ward: "downward",//三角形的朝向：downward(向下)，upward(向上)，rightward(向右)，leftward(向左)
			angleW: 60, //三角形的底
			angleH: 25, //三角形的高
			angleC: "#000", //三角形的颜色
			anglePos: "top", //三角形的位置:top,right,bottom,left
			angleDisX: 0, //X轴位移
			angleDisY: 0 //Y轴位移
		}
		options = $.extend(defaults, options);
		return this.each(function(){
			var _this = $(this);
			
			var $angle = $("<b></b>");//创建标签
			_this.append($angle);
			_this.css({
			    "position": "relative",
                "z-index": 1
			});
			
			$angle.attr("data-direct",options.ward);
			
			$angle.css({
				"position": "absolute",
				"display":"block",
				"width": 0,
				"height": 0,
                "z-index": -1
			});
			var direct = $angle.attr("data-direct");//获取三角形的方向

			if(typeof options.angleW != "number" || options.angleW < 0) {
				options.angleW = 60;
			}
			if(typeof options.angleH != "number" || options.angleH < 0) {
				options.angleH = 25;
			}
			
			
			switch(direct) {
			    case "upward":
			        if (options.angleStyle == "angle") {
			            $angle.css({
			                "border": options.angleW / 2 + "px solid transparent",
			                "border-top": "0px solid transparent",
			                "border-bottom": options.angleH + "px solid " + options.angleC,
			            });
			        } else if (options.angleStyle == "rightAngle") {
			            $angle.css({
			                "border-bottom": options.angleH + "px solid " + options.angleC,
			                "border-right": options.angleW + "px solid transparent"
			            });
			        }
					
					break;
			    case "rightward":
			        if (options.angleStyle == "angle") {
			            $angle.css({
			                "border": options.angleW / 2 + "px solid transparent",
			                "border-left": "0px solid transparent",
			                "border-right": options.angleH + "px solid " + options.angleC,
			            });
			        } else if (options.angleStyle == "rightAngle") {
			            $angle.css({
			                "border-top": options.angleH + "px solid " + options.angleC,
			                "border-left": options.angleW + "px solid transparent"
			            });
			        }
					
					break;
			    case "leftward":
			        if (options.angleStyle == "angle") {
			            $angle.css({
			                "border": options.angleW / 2 + "px solid transparent",
			                "border-right": "0px solid transparent",
			                "border-left": options.angleH + "px solid " + options.angleC,
			            });
			        } else if (options.angleStyle == "rightAngle") {
			            $angle.css({
			                "border-bottom": options.angleH + "px solid " + options.angleC,
			                "border-right": options.angleW + "px solid transparent"
			            });
			        }
					
					break;
			    default:
			        if (options.angleStyle == "angle") {
			            $angle.css({
			                "border": options.angleW / 2 + "px solid transparent",
			                "border-bottom": "0px solid transparent",
			                "border-top": options.angleH + "px solid " + options.angleC,
			            });
			        } else if (options.angleStyle == "rightAngle") {
			            $angle.css({
			                "border-top": options.angleH + "px solid " + options.angleC,
			                "border-right": options.angleW + "px solid transparent"
			            });
			        }
					
			}


			if(typeof options.angleDisX != "number") {
				options.angleDisX = 0;
			}
			if(typeof options.angleDisY != "number") {
				options.angleDisX = 0;
			}
			switch(options.anglePos) {
				case "top":
					$angle.css({
						"top": options.angleDisY + "px",
						"left": options.angleDisX + "px"
					});
					break;
				case "bottom":
					$angle.css({
						"bottom": options.angleDisY + "px",
						"left": options.angleDisX + "px"
					});
					break;
				case "left":
					$angle.css({
						"top": options.angleDisY + "px",
						"left": options.angleDisX + "px"
					});
					break;
				default:
					$angle.css({
						"top": options.angleDisY + "px",
						"right": options.angleDisX + "px"
					});
			}

		});
	}
})(jQuery);