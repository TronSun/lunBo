(function($) {
    var connector = function(itemNavigation, carouselStage) {
        return carouselStage.jcarousel('items').eq(itemNavigation.index());
    };

    $(function() {
        var carouselStage      = $('.wealthBigImg').jcarousel();
        var carouselNavigation = $('.wealthSmallImg').jcarousel();
        carouselNavigation.jcarousel('items').each(function() {
            var item = $(this);
            var target = connector(item, carouselStage);
            item.on('jcarouselcontrol:active', function() {
                    carouselNavigation.jcarousel('scrollIntoView', this);
                    item.find('span').removeClass('layer')
                })
                .on('jcarouselcontrol:inactive', function() {
                    item.find('span').addClass('layer')
                })
                .jcarouselControl({
                    target: target,
                    carousel: carouselStage,

                });
        });
        $('.wealthPrev')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.wealthNext')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });


        var timer = null;
        var len = $('.wealthBigImg ul img').length;
        var i = 0;
        var autoPlay = function(){
            timer = setInterval(function(){
                i++;
                if(i < len){
                    $('.wealthNext').trigger('click').jcarouselControl({
                        target: '+=1'
                    });
                }else{
                    i = 0;
                    $('.wealthNext').trigger('click').jcarouselControl({
                        target: '0'
                    });
                }
            },1000)
        }
        autoPlay();

        $('.stage').hover(function () {
            $(this).find('span').css("display","block");
            clearInterval(timer);
        }, function () {
            $(this).find('span').css("display","none");
            autoPlay();
        });
    });
})(jQuery);
