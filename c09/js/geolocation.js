var elMap = $('#loc');
var msg = 'Não foi possível determinar a tua localização';

if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
    msg = 'A determinar a tua localização...';
} else {
    elMap.text(msg);
}

function success(position) {
    msg = '<h3>Longitude: ' + position.coords.longitude + '</h3>';
    msg += '<h3>Latitude: ' + position.coords.latitude + '</h3>';
    msg += '<h3>Precisão (em metros): ' + position.coords.accuracy + '</h3>';
    msg += '<h3>Altura (em relação ao mar): ' + position.coords.altitude + '</h3>';
    elMap.html(msg);
}

function fail(msg) {
    elMap.text(msg);
    console.log(msg.code);
}