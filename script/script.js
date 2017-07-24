$('#nav-toggle1').on('click', function(){
    var myDiv = $('#nav-tablet');

    if (myDiv.hasClass('hidden')) {
        myDiv.removeClass('hidden');
    } else {
        myDiv.addClass('hidden');
    }
});




$('#nav-toggle').on('click', function(){
    var myDivMob = $('#nav-mobile');

    if (myDivMob.hasClass('hidden')) {
        myDivMob.removeClass('hidden');
    } else {
        myDivMob.addClass('hidden');
    }
});
