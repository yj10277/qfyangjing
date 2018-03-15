;(function($){
    $.fn.lbt = function(options){
            // 默认参数
            var defualts = {
                width:320,
                height:320,
                index:0,
                page:true,
                autoPlay:true,
                // 轮播间隔
                jg:3000,
                // 轮播类型
                type:'sx',//sp
                // 无缝滚动
                wfgd:true
            }

            return this.each(function(){
                var opt = $.extend({},defualts,options);
                opt.len = opt.img.length;
                var $this = $(this);
                // 添加特定类
                $this.addClass('lx-carousel');
                // 设定样式
                $this.css({
                    width:opt.width,
                    height:opt.height
                });
                
                var $ul;
                init();
                
                // 初始化
                function init(){
                    $ul = $('<ul/>');
                    $ul.html($.map(opt.img,function(url){
                        return '<li><img src="'+url+'"></li>';
                    }).join('\n'));
                    
                    $this.append($ul);

                };
                //// 鼠标移入停止滚动 移出恢复滚动
                var time;
                $this.on('mouseenter',function(){
                    clearInterval(time);
                }).on('mouseleave',function(){
                    time = setInterval(function(){
                        opt.index++;
                        show();
                    },opt.jg);
                }).trigger('mouseleave');
                //滚动
                function show(){
                    if(opt.index >= opt.len){
                        opt.index = 0;
                    }else if(opt.index<0){
                        opt.index = opt.len-1;
                    }
                    var target = -opt.index*opt.height;
                    $ul.animate({top:target});
                }





            });
    }

})(jQuery);