/*Left Pane Drop*/

$('.dropbtn').click(function(){
    $('ul .submenu').slideToggle('show');
});
$('.dropbtn1').click(function(){
    $('ul .submenu1').slideToggle('show1');
});
$('.dropbtn2').click(function(){
    $('ul .submenu2').slideToggle('show2');
});
$('.dropbtn3').click(function(){
    $('ul .submenu3').slideToggle('show3');

});
// $('ul li').click(function(){
//     $('.fa-chevron-circle-down').css({transform:'rotateY(-90deg)'});



/*SIGNUP/SIGN IN*/
$(".signup").click(function(){
                $(".card").css({transform: "rotateY(180deg)"});
})

$(".signin").click(function(){
    $(".card").css({transform: "rotateY(0deg)"});
})
/* LANDER MENU*/

$(".menufield").click(function(){
   if ($("#menuinfo").is(":hidden")){$("#menuinfo").show( "slow");
   $("#menuquery").hide()
}
   else{
       $('#menuinfo').slideUp();
   }
   

});
                   



