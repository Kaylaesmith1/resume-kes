// import { MarkerClusterer } from "@googlemaps/markerclusterer";

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1.75,
        center: {
            lat: 46.619261,
            lng: -39.134766
        }
    });
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const locations = [
        // BCN //
        {lat: 41.390205, lng: 2.154007},
        // DSM //
        {lat: 41.5878, lng: -93.6192}
        
    ];

    const markers = locations.map((location, i) => {
        return new google.maps.marker.AdvancedMarkerElement({
            position: location,
            map: map,
            label: labels[i % labels.length]
        });
    });    

const markerCluster = new MarkerClusterer({ 
map: map, 
markers: markers
 });
}

window.initMap = initMap;