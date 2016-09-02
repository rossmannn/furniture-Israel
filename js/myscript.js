$(document).ready(function() 
{
    $('.sl1').click(function()
    {
        $('.slide1').css({opacity "1", transition "all 1s"});
        $('.slide2, .slide3').css({opacity "0", transition "all 1s"});
        ...
    });
    $('.sl2').click(function()
    {
        $('.slide1').css({opacity "0", transition "all 1s"});
        $('.slide2').css({opacity "1", transition "all 1s"});
        ...
    });
});  