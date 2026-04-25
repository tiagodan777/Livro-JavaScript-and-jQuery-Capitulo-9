var txtUsername = $('#username');
var txtResposta = $('#answer');

if (window.sessionStorage) {
    txtUsername.val(sessionStorage.getItem('username'));
    txtResposta.val(sessionStorage.getItem('answer'));

    txtUsername.on('input', function() {
        sessionStorage.setItem('username', txtUsername.val());
    });

    txtResposta.on('input', function() {
        sessionStorage.setItem('answer', txtResposta.val())
    });
}