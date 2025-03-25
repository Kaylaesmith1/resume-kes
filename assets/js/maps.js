function initMap() {
    // Set Barcelona as the center of the map
    const barcelona = { lat: 41.390205, lng: 2.154007 };

    // Create the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,  // Adjust zoom level as needed
        center: barcelona,
    });

    // Add a marker in Barcelona
    new google.maps.Marker({
        position: barcelona,
        map: map,
        title: "Barcelona",
    });
}