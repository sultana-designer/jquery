
$(document).ready(function() {
$("#hide").click(function (){
$("#first").hide(2000);

});



$("#show").click(function (){
$("#first").show(2000);

});


});

$(document).ready(function() {
$("#showhide").click(function (){
$("#second").toggle(2000);

});
});

$(document).ready(function() {
$("#fade").click(function (){
$("#one").fadeIn(2000);

});
$("#fade").click(function (){
$("#one").fadeOut(2000);

});
});

$(document).ready(function() {
$("#slide").click(function (){
$("#two").slideUp(2000);

});
$("#stop").click(function(){
$("#two").stop();

});
});

$(document).ready(function() {
$(".three").mouseover(function (){
$(this).stop().animate({width:"300px"});

});
$(".three").mouseout(function (){
$(this).stop().animate({width:"220px"});

});
});


$(document).ready(function() {
$("#down").click(function (){
$("#four").slideDown(2000);

});
$("#up").click(function (){
$("#four").slideUp(2000);

});
});
