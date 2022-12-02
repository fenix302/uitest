$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
        slideWidth: 1200
      });

    $('.banner').vegas({
       slides: [
           {   src: 'images/banner.jpg' },
           {   src: 'images/banner2.jpg' },
           {   src: 'images/banner3.jpeg',
               video: {
                   src: [
                       '/videos/running.mp4'
                   ],
                   loop: true,
               }
           }
        ]
    });

    $(".notice ul li:first").click(function(){
    $("#layer").addClass("active");
    })

    $(".btn1").click(function(){
        $("#layer").removeClass("active");
    }); 

    if($.cookie('popup') == 'none'){
        $("#layer").hide();
    }
    var $expiresChk = $("#expiresChk");
    $(".btn1").on("click", closePop);
    function closePop(){
        if($expiresChk.is(":checked")){
            $.cookie("popup", "none", {expires:3, path: "/"});
        }
        $("#layer").fadeOut("fast");
    }
})