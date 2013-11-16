$(document).on('pageinit', '#map-page', function(){  
setTimeout(function(){	// set up the map
    var map = L.map('map', {drawControl: true});
	
	//var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
    
	// create the tile layer with correct attribution
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	// L.tileLayer('img/tiles/{z}/{x}/{y}.png', {
		minZoom: 13,
        maxZoom: 20,
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

	L.tileLayer('img/tiles/{z}/{x}/{y}.png', {
		minZoom: 16,
        maxZoom: 20,
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
	
	var marker_entrance = L.marker([33.927085,-83.386926]).addTo(map);
	marker_entrance.bindPopup("Entrance to Bear Hollow Zoo.");
	var marker_beavers = L.marker([33.926887,-83.387146]).addTo(map);
	marker_beavers.bindPopup("<a href=\"animals.htm#beavers\" rel=\"external\">Beaver Exhibit</a><br />Learn more about the beavers!");


	// map.panTo(new L.LatLng(40.737, -73.923));
	
    
    // map.on('locationfound', onLocationFound);
    // map.on('locationerror', onLocationError);
    
    // map.locate({setView: true, maxZoom: 20});  
	
	map.setView([33.927106, -83.387013], 18)
	document.getElementById('map').style.display = 'block';

// Uncommenting  this line causes map to render properly
	// map.invalidateSize();
	}, 1);

});

function onLocationFound(e) {
    var radius = e.accuracy / 2;
    
    L.marker(e.latlng).addTo(map)
    .bindPopup("You are within " + radius + " meters from this point").openPopup();
    
    L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}