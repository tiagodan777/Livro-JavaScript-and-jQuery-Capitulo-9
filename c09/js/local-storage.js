var txtUsername = $('#username');
var txtResposta = $('#answer');

if (window.localStorage) {
    txtUsername.val(localStorage.getItem('username'));
    txtResposta.val(localStorage.getItem('answer'));

    txtUsername.on('blur', function() { // No livro está com input, mas isso acho que ispararia mutias vezes a função
        localStorage.setItem('username', txtUsername.val());
    });

    txtResposta.on('blur', function() { // No livro está com input, mas isso acho que ispararia mutias vezes a função
        localStorage.setItem('answer', txtResposta.val());
    });
}