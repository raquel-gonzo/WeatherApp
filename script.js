
function changeTemp(kelvin){
    var fahrenheit = ((kelvin - 273.15) * 9/5 + 32);
    fahrenheit = fahrenheit.toFixed(0);
    return fahrenheit;
}

$(document).ready(function () {
    $('form').submit(function () {
        // your code here (build up your url)
        var location = $('#location').val()
        console.log(location)
        var temp;


        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=919c1cd19fe7237f5cd1ed3bc894b085', function (res) {
            // your code here
            console.log(res)
            $('#p1').text('High : ' + changeTemp(res.main.temp_max))
            $('#p2').text('Low : ' + changeTemp(res.main.temp_min))

        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
