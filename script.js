function scroll_to_el(id_el,speed) { //прокрутка до id_el
    console.log(id_el);
    var offset_top = $(id_el).offset().top;
    $('body,html').animate({scrollTop:offset_top},speed);
} //прокрутка до id_el