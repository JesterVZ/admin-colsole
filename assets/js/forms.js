$(document).ready(function() {
    $('.settimgs-menu-block label').on('click', function(){
        $('.popup-settings-title').text($(this).text());
        $labelName = $(this).attr('class');
    });
    $('.create-post' + '-btn').on('click', function() {
        showOverlay();
        showCreatePostForm('-create-post');
    });
    $('.settings label').on('click', function() {
        showOverlay();
        showSettingsForm('-settings');
    });
    $('.fa-times').on('click', function() {
        $('.popup').css('display', 'none');
        $('.overlay').css('display', 'none');

    });


    function showCreatePostForm(e) {
        $('.popup' + e).css('display', 'block');
    }

    function showSettingsForm(e) {
        $('.popup' + e).css('display', 'block');
    }

    function showOverlay() {
        $('.overlay').css('display', 'block');
    }

});