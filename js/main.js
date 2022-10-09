$(document).ready(function() {
    $('#titleWeb').text(CONFIG.titleWeb)
    $('body').css('background-image', 'url(' + CONFIG.background + ')')

    for (let i = 1; i <= 6; i++)
        $('#min' + i).css('background-image', 'url(' + CONFIG['min' + i] + ')')

    for (let i = 1; i <= 6; i++)
        $('#max' + i).css('background-image', 'url(' + CONFIG['max' + i] + ')')
})