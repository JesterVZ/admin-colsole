$(document).ready(function () {
    $('#registration-radio').on('click', function(){
        $('#input-block-2').css('display', 'none');
        $('.registration-block-header').text("Регистрация");
    });
    $('#login-radio').on('click', function(){
        $('#input-block-2').css('display', 'block');
        $('.registration-block-header').text("Авторизация");

    });
});