function initMap() {

    const centerPosition = { lat: 40.344109, lng: -1.106910 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: centerPosition,
    });

    const locations = [
        { lat: 41.390205, lng: 2.154007, title: "Barcelona" }
        // { lat: 41.5878, lng: -93.6192, title: "Des Moines" }
    ];

    locations.forEach((location) => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
        });
    });
}