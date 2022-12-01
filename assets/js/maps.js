function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: 9.134766
            // lng: -33.134766
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        {lat: 48.8080, lng: 9.4259},
        {lat: 39.6994, lng: 3.0063},
        {lat: 54.3520, lng: 18.6466}
    ];
    var marker = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location, 
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, marker,
    {imagePath: `https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m`});
}