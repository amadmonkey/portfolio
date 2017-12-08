
$(document).ready(function(){

    /***********************************************************************************/
    /*********************************** GENERAL ***************************************/
    /***********************************************************************************/

    var sectionIndex = 2;
    var isScrollable = true;
    var selected = false;
    var sections = ["intro", "skills", "illustrations", "projects", "awards"];
    var maxIndex = (sections.length - 1);
    var defaultIllustrationImg = "img_01";

    $('.overlay').animate({'opacity': 0}, 1000, function(){
        $('.main-container').animate({'opacity': 1});
        show();
    }); 

    function refreshArrows(){
        if(sectionIndex > 0){
            $('.arrow-up-container').addClass('active');
        } else {
            $('.arrow-up-container').removeClass('active');
        }
        if(sectionIndex < (sections.length - 1)){
            $('.arrow-down-container').addClass('active');
        } else {
            $('.arrow-down-container').removeClass('active');
        }
    }
    
    refreshArrows();

    function move(isNext){
        var delayCurrent = 0, delayVal = 100, delayAnimation = 300;
        var elements = isNext ? $('.section.active').children() : $('.section.active').children().get().reverse();
        var topVal = isNext ?  -($('.section.active').height() * 2) : ($('.section.active').height() * 2);
        $.each(elements, function(index){
            var i = index;
            var e = $(this);
            var offset = e.css('top');
            e.delay(delayCurrent).animate({
                'top': topVal,
                'opacity': 0
            }, delayAnimation, function(){
                e.css('top', offset);
                if(i == ($('.section.active').children().length - 1)){ show() }
            });
            delayCurrent += delayVal;
        });
    }

    function show(){
        $('.section').removeClass('active');
        $('.section.' + sections[sectionIndex]).addClass('active');
        var delayCurrent = 0, delayVal = 300, delayAnimation = 200;
        $.each($('.section.active').children().not('.illustration-modal-container'), function(index){
            var e = $(this);
            var i = index;
            e.delay(delayCurrent).animate({
                'opacity': 1
            }, delayAnimation);
            if(sections[sectionIndex] == 'skills'){
                var delayStar = delayCurrent, delayValStar = 100;
                $.each(e.find('.skill-star-container').children(), function(index){
                    var star = $(this), pos = star.css('top'), starAnimationSpeed = 200;
                    star.delay(delayStar).animate({
                        'opacity': 1,
                        'top': -20
                    }, starAnimationSpeed, function(){
                        star.animate({ 'top': (pos.split('px')[0] + 10) }, starAnimationSpeed, function(){
                            star.animate({ 'top': pos }, (starAnimationSpeed / 2), function(index){
                                if(i == ($('.section.active').children().length - 1)){ isScrollable = true };
                            });
                        });
                    });
                    delayStar += delayValStar;
                });
            } else if(sections[sectionIndex] == 'illustrations'){
                
            } else {
                isScrollable = true;
            }
            defaultIllustrationImg = "img_01";
            $('.projects').scrollTop(0);
            delayCurrent += delayVal;
        });
    }

    $('body').on('DOMMouseScroll mousewheel', function ( event ) {
        console.log(event);
        if(isScrollable && !selected){
            if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
                if((sectionIndex+1) <= maxIndex){
                    sectionIndex++;
                    isScrollable = false;
                    move(true);
                }
            } else {
                if((sectionIndex-1) >= 0){
                    sectionIndex--;
                    isScrollable = false;
                    move(false);
                }
            }
            refreshArrows();
        }
        return false;
    });

    $('.illustrations').on('DOMMouseScroll mousewheel', function ( event ) {
        console.log('asd');
    });

    /***********************************************************************************/
    /*********************************** SKILLS ****************************************/
    /***********************************************************************************/

    $.each(skills, function(index){
        var append = "";
        append += '<div class="col-md-6 col-xs-12 skill-item-container">';
        append +=       '<div class="col-xs-6 skill-item-label">' + this.label + '</div>';
        append +=       '<div class="col-xs-6 skill-star-container">';
        for(var x = 0; x < 5; x++){
            append +=        '<i class="fa fa-star' + (x < (this.rating) ? '' : '-o') + '"></i>';
        }
        append +=       '</div>';
        append += '</div>';
        $('.section.skills').append(append);
    }); 

    /***********************************************************************************/
    /*********************************** ILLUSTRATIONS *********************************/
    /***********************************************************************************/
    var illustrations = $('.illustration-item');
    $('.illustration-item').on('click', function(){
        defaultIllustrationImg = $(this).data('id');
        changeIllustration($(this));
    });

    function changeIllustration(imageDom){
        var image = $('.illustration-item[data-id="'+defaultIllustrationImg+'"]');
        var viewText = $('.illustration-details');
        var viewImage = $('.illustration-img-container img');
        var selected = $.grep(images, function(e) { return e.id == defaultIllustrationImg })[0];
        illustrations.removeClass('active');
        image.addClass('active');
        viewText.find('h1').html(selected.title);
        viewText.find('p').html(selected.description);
        var isPortrait = image.find('img').height() > image.find('img').width();

        viewImage.css({
            left: '0',
            top: '0',
            transform: 'none'
        });

        if(isPortrait){
            viewImage.css({
                left: '50%',
                transform: 'translateX(-50%)'
            });
        } else {
            viewImage.css({
                top: '50%',
                transform: 'translateY(-50%)'
            });
        }
        viewImage.attr('src', image.find('img').attr('src'));
    }
    $('.illustration-item[data-id="'+defaultIllustrationImg+'"]').addClass('active');
    changeIllustration();

});