$(document).ready(function () {
    // init function
    loadelement.init();

    $('.header-container').css('height', $('.header-container').height());


    $('.accord-list .accord-content').hide();
    $('.accord-list .accord-title').click(function () {
        $(this).parent().toggleClass('active');
        $(this).next().stop().slideToggle();
    })

    $(".accord-list a.btn-close-acc").click(function (e) {
        e.preventDefault();
        $(this).closest('.accord-content').siblings('.accord-title').trigger('click');
    });
});

// Menu
// function showmenu(){
//     $("#headernav").animate({ width: 'toggle', opacity: 'toggle' }, 'first');
// }

// function closemenu(){
//     $("#headernav").animate({ width: 'toggle', opacity: 'toggle' }, 'first');
// }