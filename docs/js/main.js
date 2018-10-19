$(document).ready(function() {
    $('body').scrollspy({ target: '#navbar-example3' })
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    })
});
