var mapCanvas = document.querySelector("#map-canvas");

if (!navigator) {
    mapCanvas.innerHTML = "Denne browser understøtter ikke GeoLocation.";
}
else {
    function c(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;

        var mapOptions = {
            center: { lat: lat, lng: long },
            zoom: 15
        };

        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: { lat: lat, lng: long },
            map: map,
            title: "Her er du."
        });
    }

    navigator.geolocation.getCurrentPosition(c);

}