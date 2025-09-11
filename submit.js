const s_map = L.map('map').setView([23.5, 83], 5);
var userLatitude = Number(localStorage.getItem("userLatitude"));
var userLongitude = Number(localStorage.getItem("userLongitude"));

console.log(userLatitude);

// Add OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(s_map);


function onLocationFound(e) {
    //console.log(e);
    // localLocation = e.latlng;
    // localLocationFound = true;
    // localLocationCircle = L.circle(localLocation, 8000, {fillOpacity: "0.15", opacity: "0.7"});
    L.marker(e.latlng).addTo(s_map);
    console.log("foundy")
};

s_map.locate({ setView: true, maxZoom: 20 });
L.marker([userLatitude, userLongitude]).addTo(s_map);
// console.log(userLocation);