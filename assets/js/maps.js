function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1.75,
        center: {
            lat: 46.619261,
            lng: -39.134766
            // lng: -33.134766
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        
        // Mallorca //
        // {lat: 39.6994, lng: 3.0063},
        // Gdańsk //
        // {lat: 54.3520, lng: 18.6466},
        // BCN //
        {lat: 41.390205, lng: 2.154007},
        // DSM //
        {lat: 41.5878, lng: -93.6192}
        
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