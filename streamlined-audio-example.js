$(document).ready(function() {
	
	var playZooEntrance = document.createElement('audio');
	playZooEntrance.setAttribute('src', 'assets/audio/playZooEntrance.mp3');
	playZooEntrance.setAttribute('id', 'playZooEntrance');
	document.body.appendChild(playZooEntrance);

	var playReptileHouse = document.createElement('audio');
	playReptileHouse.setAttribute('src', 'assets/audio/playReptileHouse.mp3');
	playReptileHouse.setAttribute('id', 'playReptileHouse');
	document.body.appendChild(playReptileHouse);
	
	var selectionFrom = document.createElement('audio');
	selectionFrom.setAttribute('src', 'assets/audio/selectionFrom.mp3');
	selectionFrom.setAttribute('id', 'selectionFrom');
	document.body.appendChild(selectionFrom);
	
	var selectDestination = document.createElement('audio');
	selectDestination.setAttribute('src', 'assets/audio/selectDestination.mp3');
	selectDestination.setAttribute('id', 'selectDestination');
	document.body.appendChild(selectDestination);
	
	var play500msPause = document.createElement('audio');
	play500msPause.setAttribute('src', 'assets/audio/play500msPause.mp3');
	play500msPause.setAttribute('id', 'play500msPause');
	document.body.appendChild(play500msPause);
	
	$('#selected_from').click(function() {	// On the press of a button...
		var playList= ["#selectionFrom","#playReptileHouse","#play500msPause","#selectDestination"];
		var i;
		for (i = 0; i < playList.length; ++i) {
			console.log(playList[i]);
			playList[i].play();
			playList[i].setAttribute('ended',function(){/* next i??? */});
		}
	});
	// Play this consecutively...
	// playList[0].play --> "You're coming from the"
	// playList[1].play --> "Reptile House"
	// playList[2].play --> "(half-second pause)"
	// playlist[3].play --> "Please select a destination from the list on the left."
});