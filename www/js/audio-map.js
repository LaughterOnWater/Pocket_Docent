$(document).ready(function() {
		
	var playHelp = document.createElement('audio');
	playHelp.setAttribute('src', 'assets/audio/playHelp.mp3');

	var playRestrooms = document.createElement('audio');
	playRestrooms.setAttribute('src', 'assets/audio/playRestrooms.mp3');

	var playRestRoomsDestination = document.createElement('audio');
	playRestRoomsDestination.setAttribute('src', 'assets/audio/playRestRoomsDestination.mp3');

	var playBeavers = document.createElement('audio');
	playBeavers.setAttribute('src', 'assets/audio/beavers.mp3');

	var playBeaversDestination = document.createElement('audio');
	playBeaversDestination.setAttribute('src', 'assets/audio/playBeaversDestination.mp3');

	var playBears = document.createElement('audio');
	playBears.setAttribute('src', 'assets/audio/bears.mp3');

	var playBearsDestination = document.createElement('audio');
	playBearsDestination.setAttribute('src', 'assets/audio/playBearsDestination.mp3');

	var playZooEntrance = document.createElement('audio');
	playZooEntrance.setAttribute('src', 'assets/audio/zoo_entrance.mp3');

	var playZooEntranceDestination = document.createElement('audio');
	playZooEntranceDestination.setAttribute('src', 'assets/audio/playZooEntranceDestination.mp3');

	var playReptileHouse = document.createElement('audio');
	playReptileHouse.setAttribute('src', 'assets/audio/reptile_house.mp3');
	
	var playReptileHouseDestination = document.createElement('audio');
	playReptileHouseDestination.setAttribute('src', 'assets/audio/playReptileHouseDestination.mp3');
	
	var playDirectionsHelp = document.createElement('audio');
	playDirectionsHelp.setAttribute('src', 'assets/audio/playDirectionsHelp.mp3');
	
	var playSampleDirections = document.createElement('audio');
	playSampleDirections.setAttribute('src', 'assets/audio/playSampleDirections.mp3');
	
	var playUnavailableDirections = document.createElement('audio');
	playUnavailableDirections.setAttribute('src', 'assets/audio/playUnavailableDirections.mp3');
	
	
	var playHome = document.createElement('audio');
	playHome.setAttribute('src', 'assets/audio/audio_map_exit.mp3');
	
	var playStartOver = document.createElement('audio');
	playStartOver.setAttribute('src', 'assets/audio/playStartOver.mp3');
	
	var playThis = document.createElement('audio');

// variable presets
	$('#to_audio').val('playHelp');
	$('#from_audio').val('');
	$('#step').val(1);
	$('#to_text').val('');
	playThis = playHelp;
	playThis.play();
//Top Navbar Buttons...
	$('#stop').click(function() {
		playStop(playThis);
	});

	$('#back5').click(function() {
		playBack5(playThis);
	});

//Bottom Navbar Buttons...
	$('#go-home-audio-map').click(function() {
		playThis.pause();
		playThis.currentTime = 0;
		playThis = playHome;
		playThis.play();
		setTimeout(function(){
		// Just wait while the sound is played.
		// Then go to the home page.
		$.mobile.navigate( this.attr( "index.html" ));
		}, 5000);
	});

	$('#start-over').click(function() {
		playThis.pause();
		playThis.currentTime = 0;
		playThis = playStartOver;
		playThis.play();
		$('#to_notifier').html('Audio<br />Map<br />Help');
		$('#directions-a').html('Where to?');
		$('#from_notifier').html('');
		$('#to_audio').val('playHelp');
		$('#from_audio').val('');
		$('#to_text').val('');
		$('#step').val(1);
		setTimeout(function(){
		  $('#selected_from').css("background-image","url('img/play.png')");
		}, 1000);
	});


// Left Column list buttons.
	$('.playHelp').click(function() {
		$('#to_notifier').html('Audio<br />Map<br />Help');
		$('#from_notifier').html('');
		$('#to_audio').val('playHelp');
		$('#from_audio').val('');
		$('#step').val(1);
		$('#to_text').val('');
		$('#directions-a').html('Where to?');
		playThis.pause();
		playThis.currentTime = 0;
		playThis = playHelp;
		playThis.play();
	});

	$('.playRestrooms').click(function() {
		if ($('#step').val()=='1') {
			$("#to_notifier").html("To the<br />Restrooms");
			$('#to_audio').val('playRestrooms');
		}
		if ($('#step').val()=='2') {
			$("#from_notifier").html("From the<br />Restrooms");
			$('#from_audio').val('playRestrooms');
		}
		playThis.pause();
		playThis.currentTime = 0;
		playThis = playRestrooms;
		playThis.play();
	});

	$('.playZooEntrance').click(function() {
		if ($('#step').val()=='1') {
			$("#to_notifier").html("To the<br />Zoo Entrance");
			$('#to_audio').val('playZooEntrance');
		}
		if ($('#step').val()=='2') {
			$("#from_notifier").html("From the<br />Zoo Entrance");
			$('#from_audio').val('playZooEntrance');
		}
		playThis.pause();
		playThis.currentTime = 0;
		playThis = playZooEntrance;
		playThis.play();
	});

	$('.playBeavers').click(function() {
		if ($('#step').val()=='1') {
			$("#to_notifier").html("To the<br />Beavers");
			$('#to_audio').val('playBeavers');
		}
		if ($('#step').val()=='2') {
			$("#from_notifier").html("From the<br />Beavers");
			$('#from_audio').val('playBeavers');
		}
		playThis.pause();
		playThis.currentTime = 0;
		playThis = playBeavers;
		playThis.play();
	});

	$('.playBears').click(function() {
		if ($('#step').val()=='1') {
			$("#to_notifier").html("To the<br />Bears");
			$('#to_audio').val('playBears');
		}
		if ($('#step').val()=='2') {
			$("#from_notifier").html("From the<br />Bears");
			$('#from_audio').val('playBears');
		}
		playThis.pause();
		playThis.currentTime = 0;
		playThis = playBears;
		playThis.play();
	});

	$('.playReptileHouse').click(function() {
		if ($('#step').val()=='1') {
			$("#to_notifier").html("To the<br />Reptile House");
			$('#to_audio').val('playReptileHouse');
		}
		if ($('#step').val()=='2') {
			$("#from_notifier").html("From the<br />Reptile House");
			$('#from_audio').val('playReptileHouse');
		}
		playThis.pause();
		playThis.currentTime = 0;
		playThis = playReptileHouse;
		playThis.play();
	});
	
		$('#selected_from').click(function() {
		if ($('#step').val()==2) {
//			if ($('#to_audio').val()=='playRestRooms' && $('#from_audio').val()=='playZooEntrance') {
//				playThis = playSampleDirections;
//				playControl(playThis);
//			}
			if ($('#to_audio').val()!='playRestRoomsz' && $('#from_audio').val()!='playZooEntrancez') {
				playThis = playUnavailableDirections;
				playControl(playThis);
			}
		}
		if ($('#step').val()==1) {
			if ($('#to_audio').val()=='playHelp') {
				playThis = playDirectionsHelp;
				playControl(playThis);
			}
			if ($('#to_audio').val()=='playRestrooms') {
				playThis = playRestRoomsDestination;
				playControl(playThis);
				$('#directions-a').html('Where from?');
				$('#step').val(2)
			}  			
	
			if ($('#to_audio').val()=='playZooEntrance') {
				playThis = playZooEntranceDestination;
				playControl(playThis);
				$('#directions-a').html('Where from?');
				$('#step').val(2)
			}  			
	
			if ($('#to_audio').val()=='playBeavers') {
				playThis = playBeaversDestination;
				playControl(playThis);
				$('#directions-a').html('Where from?');
				$('#step').val(2)
			}  			
	
			if ($('#to_audio').val()=='playBears') {
				playThis = playBearsDestination;
				playControl(playThis);
				$('#directions-a').html('Where from?');
				$('#step').val(2)
			}  			
	
			if ($('#to_audio').val()=='playReptileHouse') {
				playThis = playReptileHouseDestination;
				playControl(playThis);
				$('#directions-a').html('Where from?');
				$('#step').val(2)
			}  		
		}
	});	

});
	
function playControl(playThis){
	if (playThis.paused == false) {
		playThis.pause();
		$('#selected_from').css("background-image","url('img/pause.png')");
		// alert('music paused');
	} else {
		$('#selected_from').css("background-image","url('img/play.png')");
		playThis.play();
		// alert('music playing');
	}
}

function playStop(playThis){
	$('#selected_from').css("background-image","url('img/stop.png')");
	playThis.pause();
	playThis.currentTime = 0;
	setTimeout(function(){
	  $('#selected_from').css("background-image","url('img/play.png')");
	}, 1000);
		
}

function playBack5(playThis){
	if(playThis.currentTime > 5){
		$('#selected_from').css("background-image","url('img/back5.png')");
		playThis.pause();
		playThis.currentTime -= 5;
		setTimeout(function(){
		  $('#selected_from').css("background-image","url('img/play.png')");
		}, 1000);
		playThis.play();
	}
}

function startOver(playThis) {
	playThis.pause();
	playThis.currentTime = 0;
$('#to_audio').val('playHelp');
$('#from_audio').val('');
$('#step').val(1);

}