$(document).on('pageinit', '#map-page', function(){  
setTimeout(function(){	// set up the map
    var map = L.map('map', {zoomControl:true});
	
	//var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
    
	// create the tile layer with correct attribution
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	// L.tileLayer('img/tiles/{z}/{x}/{y}.png', {
		minZoom: 13,
        maxZoom: 20,
		attribution: '&copy; <a href="http://osm.org/copyright">OSM</a>',
    }).addTo(map);

	L.tileLayer('img/tiles/{z}/{x}/{y}.png', {
		minZoom: 16,
        maxZoom: 20,
		// attribution: '&copy; <a href="http://osm.org/copyright">OSM</a>',
    }).addTo(map);
	
	var	imageUrl = 'img/overlays/bearhollow_specifics.png',
		imageBounds = [[33.92554604074667, -83.38874369859695], [33.92839476009533, -83.3853104710579]];

	L.imageOverlay(imageUrl,imageBounds).addTo(map);


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

	var noticePin = L.icon({
    iconUrl: 'img/pins/notice.png',
    shadowUrl: 'img/pins/notice-shadow.png', 

    iconSize:     [113, 86], // size of the icon
    shadowSize:   [113, 47], // size of the shadow
    iconAnchor:   [13, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [-5, -20],  // the same for the shadow
    popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
	});

// 33.92799, -83.38786

//Marker Layers - let's remove some markers at a wider zoom setting and remove them altogether even higher.
var LayerSixteen = new L.LayerGroup();
var LayerSeventeen = new L.LayerGroup();
var LayerSeventeenNotes = new L.LayerGroup();
var LayerEighteen = new L.LayerGroup();
var LayerNineteen = new L.LayerGroup();

//Markers and Bound Popups For Layer Seventeen and Closer

		var marker_notice =  L.marker([33.92838, -83.38788], {icon: noticePin});
		LayerSeventeenNotes.addLayer(marker_notice);

		var marker_reptile_house =  L.marker([33.92641, -83.387], {icon: buildingPin});
		marker_reptile_house.bindPopup("<h3>Reptile House</h3><p>Open 1-4pm on Saturdays<br />and 1-4 most Sundays<br /><a href=\"venues.htm#reptile_house\" rel=\"external\">Learn More...</a><br /></p>");
		LayerNineteen.addLayer(marker_reptile_house);

		var marker_education_center =  L.marker([33.92742, -83.38726], {icon: buildingPin});
		marker_education_center.bindPopup("<h3>Education Center</h3><p>We hold all sorts of events here.<br /> <a href=\"venues.htm#education_center\" rel=\"external\">Learn more...</a></p>");
		LayerSeventeen.addLayer(marker_education_center);

		var marker_restrooms =  L.marker([33.92722, -83.38641], {icon: restroomsPin});
		marker_restrooms.bindPopup("<h3>Restrooms</h3><p>Restrooms are outside the zoo at the front of Memorial Park Public Pool. There are more restrooms by the playground past the additional parking.</p>");
		LayerSeventeen.addLayer(marker_restrooms);

		var marker_parking =  L.marker([33.92753, -83.38658], {icon: parkingPin});
		marker_parking.bindPopup("<h3>Parking</h3><p> Also see additional parking labeled \"P\" in lower loop.</p>");
		LayerSeventeen.addLayer(marker_parking);

		var marker_entrance =  L.marker([33.92704, -83.3869], {icon: entrancePin});
		marker_entrance.bindPopup("<h3>Zoo Entrance</h3><p>Enter the Zoo here!</br> Welcome!</p>");
		LayerSixteen.addLayer(marker_entrance);

		var marker_beaver_deck =  L.marker([33.92681, -83.3872], {icon: animalPin});
		marker_beaver_deck.bindPopup("<h3>Beaver Deck</h3><p>Best view of the Beavers<br />Learn more about <a href=\"animals.htm#beavers\" rel=\"external\">Beavers!</a></p>");
		LayerSeventeen.addLayer(marker_beaver_deck);

		var marker_parking_b =  L.marker([33.92765, -83.3855], {icon: parkingPin});
		marker_parking_b.bindPopup("<h3>Parking</h3><p>Additional parking in lower loop...</p>");
		LayerSeventeen.addLayer(marker_parking_b);

		var marker_parking_c =  L.marker([33.92739, -83.38459], {icon: parkingPin});
		marker_parking_c.bindPopup("<h3>Parking</h3><p>Additional parking in lower loop...</p>");
		LayerSeventeen.addLayer(marker_parking_c);

		var marker_restrooms_b =  L.marker([33.92831, -83.38352], {icon: restroomsPin});
		marker_restrooms_b.bindPopup("<h3>Restroom</h3><p>Close to playground...</p>");
		LayerSeventeen.addLayer(marker_restrooms_b);
		
		var marker_playground =  L.marker([33.928, -83.38385], {icon: mainPin});
		marker_playground.bindPopup("<h3>Playground</h3>");
		LayerSeventeen.addLayer(marker_playground);



//Markers and Bound Popups For Layer Eighteen and Closer


		var marker_gator_slider_deck =  L.marker([33.92669, -83.38705], {icon: animalPin});
		marker_gator_slider_deck.bindPopup("<h3>Alligators, Yellow Slider</h3><p>Learn more about <a href=\"animals.htm#alligators\" rel=\"external\">Alligators</a>!<br /><em>or</em><br />Learn more about <a href=\"animals.html#sliders\" rel=\"external\">Yellow Sliders</a>!</p>");
		LayerEighteen.addLayer(marker_gator_slider_deck);

		var marker_gator_night_house =  L.marker([33.92657, -83.38708], {icon: buildingPin});
		marker_gator_night_house.bindPopup("<h3>Alligator Night House</h3><p>This is where the alligators sleep at night</p>");
		LayerEighteen.addLayer(marker_gator_night_house);

		var marker_gator_enclosure =  L.marker([33.92665, -83.38712], {icon: mainPin});
		marker_gator_enclosure.bindPopup("<h3>Alligator Enclosure</h3><p>Alligator and Yellow Slider home</p>");
		LayerNineteen.addLayer(marker_gator_enclosure);

		var marker_barred_owl =  L.marker([33.92669, -83.3869], {icon: animalPin});
		marker_barred_owl.bindPopup("<h3>Barred Owl</h3><p>Learn more about <a href=\"animals.htm#barred_owls\" rel=\"external\">Barred Owls</a></p>");
		LayerEighteen.addLayer(marker_barred_owl);

		var marker_barn_owl =  L.marker([33.92665, -83.38666], {icon: animalPin});
		marker_barn_owl.bindPopup("<h3>Barn Owl</h3><p>Learn more about <a href=\"animals.htm#barn_owls\" rel=\"external\">Barn Owls</a></p>");
		LayerEighteen.addLayer(marker_barn_owl);

		var marker_deer_turkey =  L.marker([33.92653, -83.38718], {icon: animalPin});
		marker_deer_turkey.bindPopup("<h3>Deer & Turkey View</h3><p>Best view of the Deer and Turkeys<br />Learn more about <a href=\"animals.htm#deer\" rel=\"external\">Deer</a>.<br />or<br />Learn more about <a href=\"animals.htm#turkeys\" rel=\"external\">Turkeys</a></p>");
		LayerEighteen.addLayer(marker_deer_turkey);

		var marker_deer_turkey_enclosure =  L.marker([33.92641, -83.38752], {icon: mainPin});
		marker_deer_turkey_enclosure.bindPopup("<h3>Deer & Turkey Enclosure</h3><p>Deer and Turkeys live here...</p>");
		LayerNineteen.addLayer(marker_deer_turkey_enclosure);

		var marker_vultures =  L.marker([33.92648, -83.38671], {icon: animalPin});
		marker_vultures.bindPopup("<h3>Vultures</h3><p>Learn more about <a href=\"animals.htm#black_vultures\" rel=\"external\">Black Vultures!</a><br /><em>or</em><br /></p><p><a href=\"animals.htm#turkey_vultures\" rel=\"external\">Turkey Vultures!</a></p>");
		LayerEighteen.addLayer(marker_vultures);

		var marker_red_tailed_hawk =  L.marker([33.9262, -83.38663], {icon: animalPin});
		marker_red_tailed_hawk.bindPopup("<h3>Red Tailed Hawk</h3><p><a href=\"animals.htm#red_tailed_hawk\" rel=\"external\">Learn more...</a></p>");
		LayerEighteen.addLayer(marker_red_tailed_hawk);

		var marker_opossums =  L.marker([33.92621, -83.38687], {icon: animalPin});
		marker_opossums.bindPopup("<h3>Opossums</h3><p><a href=\"animals.htm#opossums\" rel=\"external\">Learn more...</a></p>");
		LayerNineteen.addLayer(marker_opossums);

		var marker_groundhog =  L.marker([33.92614, -83.38688], {icon: animalPin});
		marker_groundhog.bindPopup("<h3>Groundhog</h3><p><a href=\"animals.htm#groundhogs\" rel=\"external\">Learn more...</a></p>");
		LayerNineteen.addLayer(marker_groundhog);

		var marker_exercise_yard =  L.marker([33.92616, -83.38696], {icon: viewPin});
		marker_exercise_yard.bindPopup("<h3>Exercise Yard</h3><p>Animals are sometimes brought to this spot for educational demonstrations.<br /><a href=\"venues.htm#exercise_yard\" rel=\"external\">Learn more...</a></p>");
		LayerNineteen.addLayer(marker_exercise_yard);

		var marker_gopher_tortoise =  L.marker([33.92607, -83.38698], {icon: animalPin});
		marker_gopher_tortoise.bindPopup("<h3>Gopher Tortoise Enclosure</h3><p><a href=\"animals.htm#gopher_tortoises\" rel=\"external\">Learn more...</a></p>");
		LayerEighteen.addLayer(marker_gopher_tortoise);

		var marker_main_amphitheatre =  L.marker([33.92608, -83.38734], {icon: viewPin});
		marker_main_amphitheatre.bindPopup("<h3>Main Amphitheatre</h3><p><a href=\"venues.htm#main_amphitheatre\" rel=\"external\">Learn more...</a></p>");
		LayerEighteen.addLayer(marker_main_amphitheatre);

		var marker_barn =  L.marker([33.92591, -83.38731], {icon: buildingPin});
		marker_barn.bindPopup("<h3>Barn</h3><p>(Maintenance)</p>");
		LayerNineteen.addLayer(marker_barn);

		var marker_bears_eagles =  L.marker([33.92598, -83.38685], {icon: viewPin});
		marker_bears_eagles.bindPopup("<h3>Bear & Eagle Deck</h3><p>Best view of Bears and Eagles<br />Learn more about <a href=\"animals.htm#bears\" rel=\"external\">Bears</a><br /><em>or</em><br /><a href=\"animals.htm#eagles\" rel=\"external\">Eagles</a></p>");
		LayerEighteen.addLayer(marker_bears_eagles);

		var marker_bear_enclosure =  L.marker([33.92578, -83.38692], {icon: animalPin});
		marker_bear_enclosure.bindPopup("<h3>Bear Enclosure</h3><p>Where the bears live...</p>");
		LayerNineteen.addLayer(marker_bear_enclosure);

		var marker_eagle_enclosure =  L.marker([33.92611, -83.38676], {icon: animalPin});
		marker_eagle_enclosure.bindPopup("<h3>Eagle Enclosure</h3><p>Where the eagles live...</p>");
		LayerNineteen.addLayer(marker_eagle_enclosure);

		var marker_bobcat_enclosure =  L.marker([33.92617, -83.38743], {icon: mainPin});
		marker_bobcat_enclosure.bindPopup("<h3>Bobcat Enclosure</h3><p>Where the bobcats live...</p>");
		LayerNineteen.addLayer(marker_bobcat_enclosure);

		var marker_unused_enclosure =  L.marker([33.92627, -83.38716], {icon: mainPin});
		marker_unused_enclosure.bindPopup("<h3>Unused Enclosure</h3><p>Currently fallow.</p>");
		LayerNineteen.addLayer(marker_unused_enclosure);

		var marker_bobcat_deck =  L.marker([33.92627, -83.38728], {icon: animalPin});
		marker_bobcat_deck.bindPopup("<h3>Bobcat Deck</h3><p>Best view of the Bobcats<br />Learn more about <a href=\"animals.htm#bobcats\" rel=\"external\">Bobcats!</a></p>");
		LayerEighteen.addLayer(marker_bobcat_deck);

		var marker_education_center_amphitheatre =  L.marker([33.92745, -83.38713], {icon: viewPin});
		marker_education_center_amphitheatre.bindPopup("<h3>Education Center Amphitheatre</h3><p>Outdoor demonstrations here...</p>");
		LayerEighteen.addLayer(marker_education_center_amphitheatre);

		var marker_beaver_enclosure =  L.marker([33.92672, -83.3874], {icon: mainPin});
		marker_beaver_enclosure.bindPopup("<h3>Beaver Enclosure</h3><p>Where the beavers live...</p>");
		LayerNineteen.addLayer(marker_beaver_enclosure);

		var marker_rh_entrance =  L.marker([33.92632, -83.38699], {icon: entrancePin});
		marker_rh_entrance.bindPopup("<h3>Reptile House Entrance</h3><p>This is where the entrance is <br />to the Reptile House.</p>");
		LayerEighteen.addLayer(marker_rh_entrance);

	map.setView([33.927106, -83.387013], 17)
	document.getElementById('map').style.display = 'block';
	

	map.addLayer(LayerSixteen);
	map.addLayer(LayerSeventeen);
	map.addLayer(LayerSeventeenNotes);


// Using L.Control.Locate.js plugin for leaflet
// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
	follow: true,
	stopFollowingOnDrag: true,
	// enableHighAccuracy: true,
	watch: true
}).addTo(map);

map.on('startfollowing', function() {
    map.on('dragstart', lc.stopFollowing);
}).on('stopfollowing', function() {
    map.off('dragstart', lc.stopFollowing);
});


map.on('zoomend', onZoomend);
function onZoomend(){
	if(map.getZoom()>=16){
	map.addLayer(LayerSixteen);
	map.addLayer(LayerSeventeenNotes);
	};
	if(map.getZoom()>=17){
	map.addLayer(LayerSeventeen);
	map.removeLayer(LayerSeventeenNotes);
	};
	if(map.getZoom()>=18){
	map.addLayer(LayerEighteen);
	};
	if(map.getZoom()>=19){
	map.addLayer(LayerNineteen);
	};
    if(map.getZoom()<17) {
		map.removeLayer(LayerSeventeen);
		// map.removeLayer(LayerSeventeenNotes);
	};
    if(map.getZoom()<18) {
		map.removeLayer(LayerEighteen);
	};
    if(map.getZoom()<19) {
		map.removeLayer(LayerNineteen);
	};
};


// show me the lat-lng anywhere I click. (For creating markers.)
// map.on('click', function(e) {
//     alert(e.latlng);
// });



// Uncommenting  this line causes map to render properly
	// map.invalidateSize();
	}, 1);

});


//function onLocationFound(e) {
//    var radius = e.accuracy / 2;
//    
//    L.marker(e.latlng).addTo(map)
//    .bindPopup("You are within " + radius + " meters from this point").openPopup();
//    
//    L.circle(e.latlng, radius).addTo(map);
//}
//
//function onLocationError(e) {
//    alert(e.message);
//}


