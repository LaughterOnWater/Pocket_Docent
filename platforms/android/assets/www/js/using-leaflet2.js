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
		attribution: '&copy; <a href="http://osm.org/copyright">OSM</a>',
    }).addTo(map);
	

	L.imageOverlay( 
		imageUrl = 'img/overlays/BearHollow_specifics.png',
		imageBounds = [[33.92554604074667, -83.38874369859695], [33.92839476009533, -83.3853104710579]],
		setOpacity = .5
	).addTo(map);

// Pin Types:	
	var mainPin = L.icon({
    iconUrl: 'img/pins/pin-blue-circle.png',
    shadowUrl: 'img/pins/pin-shadow.png',

    iconSize:     [26, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [13, 40],  // the same for the shadow
    popupAnchor:  [-9, -32] // point from which the popup should open relative to the iconAnchor
	});

	var entrancePin = L.icon({
    iconUrl: 'img/pins/pin-purple-entrance.png',
    shadowUrl: 'img/pins/pin-shadow.png',

    iconSize:     [26, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [13, 40],  // the same for the shadow
    popupAnchor:  [-9, -32] // point from which the popup should open relative to the iconAnchor
	});


	var animalPin = L.icon({
    iconUrl: 'img/pins/pin-red-paw.png',
    shadowUrl: 'img/pins/pin-shadow.png',

    iconSize:     [26, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [13, 40],  // the same for the shadow
    popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
	});


	var viewPin = L.icon({
    iconUrl: 'img/pins/pin-blue-eye.png',
    shadowUrl: 'img/pins/pin-shadow.png',

    iconSize:     [26, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [13, 40],  // the same for the shadow
    popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
	});

	var buildingPin = L.icon({
    iconUrl: 'img/pins/pin-green-building.png',
    shadowUrl: 'img/pins/pin-shadow.png',

    iconSize:     [26, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [13, 40],  // the same for the shadow
    popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
	});

	var parkingPin = L.icon({
    iconUrl: 'img/pins/pin-parking.png',
    shadowUrl: 'img/pins/pin-shadow.png', 

    iconSize:     [26, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [13, 40],  // the same for the shadow
    popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
	});

	var restroomsPin = L.icon({
    iconUrl: 'img/pins/pin-restrooms.png',
    shadowUrl: 'img/pins/pin-shadow.png', 

    iconSize:     [26, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [13, 40],  // the same for the shadow
    popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
	});

//Markers and Bound Popups

var marker_gator_slider_deck =  L.marker([33.92669, -83.38705], {icon: animalPin}).addTo(map);
var marker_gator_night_house =  L.marker([33.92657, -83.38708], {icon: buildingPin}).addTo(map);
var marker_gator_enclosure =  L.marker([33.92665, -83.38712], {icon: mainPin}).addTo(map);
var marker_barred_owl =  L.marker([33.92669, -83.3869], {icon: animalPin}).addTo(map);
var marker_barn_owl =  L.marker([33.92665, -83.38666], {icon: animalPin}).addTo(map);
var marker_deer_turkey =  L.marker([33.92653, -83.38718], {icon: animalPin}).addTo(map);
var marker_deer_turkey_enclosure =  L.marker([33.92641, -83.38752], {icon: mainPin}).addTo(map);
var marker_reptile_house =  L.marker([33.92641, -83.387], {icon: buildingPin}).addTo(map);
var marker_vultures =  L.marker([33.92648, -83.38671], {icon: animalPin}).addTo(map);
var marker_red_tailed_hawk =  L.marker([33.9262, -83.38663], {icon: animalPin}).addTo(map);
var marker_opossums =  L.marker([33.92621, -83.38687], {icon: animalPin}).addTo(map);
var marker_groundhog =  L.marker([33.92614, -83.38688], {icon: animalPin}).addTo(map);
var marker_exercise_yard =  L.marker([33.92616, -83.38696], {icon: viewPin}).addTo(map);
var marker_gopher_tortoise =  L.marker([33.92607, -83.38698], {icon: animalPin}).addTo(map);
var marker_main_amphitheatre =  L.marker([33.92608, -83.38734], {icon: viewPin}).addTo(map);
var marker_barn =  L.marker([33.92591, -83.38731], {icon: buildingPin}).addTo(map);
var marker_bears_eagles =  L.marker([33.92598, -83.38685], {icon: viewPin}).addTo(map);
var marker_bear_enclosure =  L.marker([33.92578, -83.38692], {icon: animalPin}).addTo(map);
var marker_eagle_enclosure =  L.marker([33.92611, -83.38676], {icon: animalPin}).addTo(map);
var marker_bobcat_enclosure =  L.marker([33.92617, -83.38743], {icon: mainPin}).addTo(map);
var marker_unused_enclosure =  L.marker([33.92627, -83.38716], {icon: mainPin}).addTo(map);
var marker_bobcat_deck =  L.marker([33.92627, -83.38728], {icon: animalPin}).addTo(map);
var marker_education_center =  L.marker([33.92742, -83.38726], {icon: buildingPin}).addTo(map);
var marker_education_center_amphitheatre =  L.marker([33.92745, -83.38713], {icon: viewPin}).addTo(map);
var marker_restrooms =  L.marker([33.92722, -83.38641], {icon: restroomsPin}).addTo(map);
var marker_parking =  L.marker([33.92753, -83.38658], {icon: parkingPin}).addTo(map);
var marker_entrance =  L.marker([33.92704, -83.3869], {icon: entrancePin}).addTo(map);
var marker_beaver_deck =  L.marker([33.92681, -83.3872], {icon: animalPin}).addTo(map);
var marker_beaver_enclosure =  L.marker([33.92672, -83.3874], {icon: mainPin}).addTo(map);
var marker_rh_entrance =  L.marker([33.92632, -83.38699], {icon: entrancePin}).addTo(map);
var marker_parking_b =  L.marker([33.92765, -83.3855], {icon: parkingPin}).addTo(map);
var marker_parking_c =  L.marker([33.92739, -83.38459], {icon: parkingPin}).addTo(map);
var marker_restrooms_b =  L.marker([33.92831, -83.38352], {icon: restroomsPin}).addTo(map);
var marker_playground =  L.marker([33.928, -83.38385], {icon: mainPin}).addTo(map);

marker_gator_slider_deck.bindPopup("<h3>Alligators, Yellow Slider</h3><p>Learn more about <a href=\"animals.htm#alligators\" rel=\"external\">Alligators</a>!<br /><em>or</em><br />Learn more about <a href=\"animals.html#sliders\" rel=\"external\">Yellow Sliders</a>!</p>");
marker_gator_night_house.bindPopup("<h3>Alligator Night House</h3><p>This is where the alligators sleep at night</p>");
marker_gator_enclosure.bindPopup("<h3>Alligator Enclosure</h3><p>Alligator and Yellow Slider home</p>");
marker_barred_owl.bindPopup("<h3>Barred Owl</h3><p>Learn more about <a href=\"animals.htm#barred_owls\" rel=\"external\">Barred Owls</a></p>");
marker_barn_owl.bindPopup("<h3>Barn Owl</h3><p>Learn more about <a href=\"animals.htm#barn_owls\" rel=\"external\">Barn Owls</a></p>");
marker_deer_turkey.bindPopup("<h3>Deer & Turkey View</h3><p>Best view of the Deer and Turkeys<br />Learn more about <a href=\"animals.htm#deer\" rel=\"external\">Deer</a>.<br />or<br />Learn more about <a href=\"animals.htm#turkeys\" rel=\"external\">Turkeys</a></p>");
marker_deer_turkey_enclosure.bindPopup("<h3>Deer & Turkey Enclosure</h3><p>Deer and Turkeys live here...</p>");
marker_reptile_house.bindPopup("<h3>Reptile House</h3><p>Open 1-4pm on Saturdays<br />and 1-4 most Sundays<br /><a href=\"venues.htm#reptile_house\" rel=\"external\">Learn More...</a><br /></p>");
marker_vultures.bindPopup("<h3>Vultures</h3><p>Learn more about <a href=\"animals.htm#black_vultures\" rel=\"external\">Black Vultures!</a><br /><em>or</em><br /></p><p><a href=\"animals.htm#turkey_vultures\" rel=\"external\">Turkey Vultures!</a></p>");
marker_red_tailed_hawk.bindPopup("<h3>Red Tailed Hawk</h3><p><a href=\"animals.htm#red_tailed_hawk\" rel=\"external\">Learn more...</a></p>");
marker_opossums.bindPopup("<h3>Opossums</h3><p><a href=\"animals.htm#opossums\" rel=\"external\">Learn more...</a></p>");
marker_groundhog.bindPopup("<h3>Groundhog</h3><p><a href=\"animals.htm#groundhogs\" rel=\"external\">Learn more...</a></p>");
marker_exercise_yard.bindPopup("<h3>Exercise Yard</h3><p>Animals are sometimes brought to this spot for educational demonstrations.<br /><a href=\"venues.htm#exercise_yard\" rel=\"external\">Learn more...</a></p>");
marker_gopher_tortoise.bindPopup("<h3>Gopher Tortoise Enclosure</h3><p><a href=\"animals.htm#gopher_tortoises\" rel=\"external\">Learn more...</a></p>");
marker_main_amphitheatre.bindPopup("<h3>Main Amphitheatre</h3><p><a href=\"venues.htm#main_amphitheatre\" rel=\"external\">Learn more...</a></p>");
marker_barn.bindPopup("<h3>Barn</h3><p>(Maintenance)</p>");
marker_bears_eagles.bindPopup("<h3>Bear & Eagle Deck</h3><p>Best view of Bears and Eagles<br />Learn more about <a href=\"animals.htm#bears\" rel=\"external\">Bears</a><br /><em>or</em><br /><a href=\"animals.htm#eagles\" rel=\"external\">Eagles</a></p>");
marker_bear_enclosure.bindPopup("<h3>Bear Enclosure</h3><p>Where the bears live...</p>");
marker_eagle_enclosure.bindPopup("<h3>Eagle Enclosure</h3><p>Where the eagles live...</p>");
marker_bobcat_enclosure.bindPopup("<h3>Bobcat Enclosure</h3><p>Where the bobcats live...</p>");
marker_unused_enclosure.bindPopup("<h3>Unused Enclosure</h3><p>Currently fallow.</p>");
marker_bobcat_deck.bindPopup("<h3>Bobcat Deck</h3><p>Best view of the Bobcats<br />Learn more about <a href=\"animals.htm#bobcats\" rel=\"external\">Bobcats!</a></p>");
marker_education_center.bindPopup("<h3>Education Center</h3><p>We hold all sorts of events here.<br /> <a href=\"venues.htm#education_center\" rel=\"external\">Learn more...</a></p>");
marker_education_center_amphitheatre.bindPopup("<h3>Education Center Amphitheatre</h3><p>Outdoor demonstrations here...</p>");
marker_restrooms.bindPopup("<h3>Restrooms</h3><p>Restrooms are outside the zoo at the front of Memorial Park Public Pool. There are more restrooms by the playground past the additional parking.</p>");
marker_parking.bindPopup("<h3>Parking</h3><p> Also see additional parking labeled \"P\" in lower loop.</p>");
marker_entrance.bindPopup("<h3>Zoo Entrance</h3><p>Enter the Zoo here!</br> Welcome!</p>");
marker_beaver_deck.bindPopup("<h3>Beaver Deck</h3><p>Best view of the Beavers<br />Learn more about <a href=\"animals.htm#beavers\" rel=\"external\">Beavers!</a></p>");
marker_beaver_enclosure.bindPopup("<h3>Beaver Enclosure</h3><p>Where the beavers live...</p>");
marker_rh_entrance.bindPopup("<h3>Reptile House Entrance</h3><p>This is where the entrance is <br />to the Reptile House.</p>");
marker_parking_b.bindPopup("<h3>Parking</h3><p>Additional parking in lower loop...</p>");
marker_parking_c.bindPopup("<h3>Parking</h3><p>Additional parking in lower loop...</p>");
marker_playground.bindPopup("<h3>Playground</h3>");

// show me the lat-lng anywhere I click. (For creating markers.)
 map.on('click', function(e) {
     alert(e.latlng);
 });

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