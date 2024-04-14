var video;

// Initiate Video and remove auto play and loop features
window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
});

// Play Video
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Pause Video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate -= 0.2;
	console.log("Speed is " + video.playbackRate);
});

// Increase the current video speed by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.2;
	console.log("Speed is " + video.playbackRate);
});

// Skip ahead 10 seconds in the video each time the button is clicked
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 15) {
		video.currentTime += 15;
	} else {
		video.currentTime = 0;
		video.play();
	}
	console.log("Current location: " + video.currentTime);
});

// Mute the video
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
});

// Change the volume of the video based on the value of the slider
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + video.volume * 100 + "%");
});

// Use the oldschool class name to change the style of the video player
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Remove the oldschool class name to change the style of the video player
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

