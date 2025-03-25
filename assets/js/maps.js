function initMap() {
    // Set Barcelona as the center of the map
    const barcelona = { lat: 41.390205, lng: 2.154007 };
    const teruel = { lat: 40.3457, lng: 1.1064};

    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4, 
        center: teruel,
    });

    
    new google.maps.Marker({
        position: barcelona,
        map: map,
        title: "Barcelona",
    });
}