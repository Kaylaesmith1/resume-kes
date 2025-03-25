function initMap() {
    // Set Teruel as the center of the map
    const barcelona = { lat: 41.390205, lng: 2.154007 };
    const teruel = { lat: 40.344109, lng: -1.106910 };

    
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