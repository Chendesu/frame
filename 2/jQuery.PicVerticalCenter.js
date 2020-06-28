/***  
*   File name：jQuery.PicVerticalCenter.js
*  
*   File description： 处理图片封装的js文件
*   
*   Create Date：2017-10-25
*******************************************************/
/*
    *   JS函数全局类名
*/
var $yimg = [];
/*     Function Detail：处理图片大小的函数

   *   FunName：PicVerticalCenter

   *   Parameter：[图片对象集合]

   *   Return：null
*/
$yimg.PicVerticalCenter = function (ele) {
    
    $(ele).each(function (i) {
        var img = $(this);
        var imgparent_width = parseInt($(img).parent().width());
        var imgparent_height = parseInt($(img).parent().height());
        
        $("<img/>").attr("src", $(img).attr("src")).load(function () {
            this.width >= this.height
                ? $(img).css({ "width": "auto", "height": "" + imgparent_height + "px", "max-width": "initial" })
                .css({ "position": "relative", "top": "0", "left": (imgparent_width - $(img).width()) / 2 })
            :
                $(img).css({ "width": "" + imgparent_width + "px", "height": "auto", "max-width": "initial" })
                .css({ "position": "relative", "left": "0", "top": (imgparent_height - $(img).height()) / 2 })
            ;
            var newimg_width = parseInt($(img).css("width"));
            var newimg_height = parseInt($(img).css("height"));
            

            if(newimg_width < imgparent_width)
            {
                $(img).css({ "width": "" + imgparent_width + "px", "height": "auto", "max-width": "initial" })
                .css({ "position": "relative", "left": "auto", "top": (imgparent_height - $(img).height()) / 2 });
            }
            else if (newimg_height < imgparent_height)
            {
                $(img).css({ "width": "auto", "height": "" + imgparent_height + "px", "max-width": "initial" })
                .css({ "position": "relative", "top": "auto", "left": (imgparent_width - $(img).width()) / 2 });
            }
            //$(img).parent().css({ "overflow": "hidden", "border-radius": $(img).css("border-radius") });
        });      
    });
}