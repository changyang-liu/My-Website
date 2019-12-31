//On scroll
$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    //Toggle arrow visibility
    if(scroll >= 30){
        $('#arrow').css('display', 'none');
        //Toggle navbar color
        if(scroll < 100){
            $('.navbar').css('background', 'transparent');
            $('.navbar').removeClass('navbar-dark');
            $('.navbar').addClass('navbar-light');
        }else{
            $('.fixed-top').css('background', '#756a64');
            $('.navbar').removeClass('navbar-light');
            $('.navbar').addClass('navbar-dark');
        }
    }else{
        $('#arrow').css('display', 'inline-block')
    }
});

//About button functionality
$('#about-btn').click(() => {
    document.getElementById('about').scrollIntoView({
        behavior:'smooth',
        block: 'start'
    });
});