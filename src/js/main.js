$(document).ready(function () {
    var menuBtn = $('.dropdown-guests-button');
    var menu = $('.dropdown-guests-list__hide');

    menuBtn.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('dropdown-guests-list__active');
    })
})