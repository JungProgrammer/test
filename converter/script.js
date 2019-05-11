let inputRub = document.getElementById("rub"),
    inputUsd = document.getElementById("usd");

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);
            
            inputUsd.value = inputRub.value / data.usd;
        } else{
            inputUsd.value = "Что-то пошло не так";
        }
    });
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            var lat =
                position.coords.latitude;
            var lng =
                position.coords.longitude;
            var options = {
                position: new google.maps.LatLng(lat, lng)
            }

            var marker =
                new google.maps.Marker(options);
            marker.setMap(map);

            console.log(position);
        });
}
