$('.parallax-window').parallax({imageSrc: 'img/hero-bg.png'});

$('.flowing-scroll').on( 'click', function(){
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({
                scrollTop: $(dest).offset().top - 100 // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
        );
    }
    return false;
});

$(function(){
    $("#phone").mask("+7-999-999-99-99");
    $("#phone2").mask("+7-999-999-99-99");
    $("#phone3").mask("+7-999-999-99-99");
});

document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click',function(){
        document.body.style.overflow = 'hidden';
        // document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click',function(){
        document.body.style.overflow = 'visible';
        // document.querySelector('#openModal').style.marginLeft = '0px';
    });
});

$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});