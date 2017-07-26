$(window).scroll(function() {

    if ($(window).scrollTop() > 20) {
        $('#enar').addClass('fixedClass');
    } else {
        $('#enar').removeClass('fixedClass');
    }
});




$(window).scroll(function() {

    if ($(window).scrollTop() > 20) {
        $('#enar2').addClass('fixedClass2');
    } else {
        $('#enar2').removeClass('fixedClass2');
    }
});




$('#nav-toggle1').on('click', function(){
    var myDiv = $('#contNav2');

    if (myDiv.hasClass('hidden')) {
        myDiv.removeClass('hidden');
    } else {
        myDiv.addClass('hidden');
    }
});




$('#nav-toggle').on('click', function(){
    var myDivMob = $('#contNav3');

    if (myDivMob.hasClass('hidden')) {
        myDivMob.removeClass('hidden');
    } else {
        myDivMob.addClass('hidden');
    }
});



$('#nav-toggle-enar2').on('click', function(){
    var myDivEnar = $('#enar2ul');

    if (myDivEnar.hasClass('hidden')) {
        myDivEnar.removeClass('hidden');
    } else {
        myDivEnar.addClass('hidden');
    }
});




