$(function() {
    function loadContent(url) {
        $('#content').load(url + ' #content').hide().fadeIn('fast');
    }

    $('nav a').on('click', function(e) {
        e.preventDefault();

        var href = this.href;
        var $this = $(this);

        $('a.current').removeClass('current');
        $this.addClass('current');

        loadContent(href);

        history.pushState('', $this.text, href);
    });

    window.onpopstate = function() {
        var path = location.pathname;
        var page = path.substring(path.lastIndexOf('/') + 1);
        loadContent(path);
        
        $('a.current').removeClass('current');
        $('[href="' + page + '"]').addClass('current');
    }
})