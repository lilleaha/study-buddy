var mapCanvas = document.querySelector("#map-canvas");

if (!navigator) {
    mapCanvas.innerHTML = "Denne browser understøtter ikke GeoLocation.";
}
else {
    function c(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;

        var mapOptions = {
            center: {}
        };
    }

    navigator.geolocation.getCurrentPosition(c);

}