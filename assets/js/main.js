//countdown
(function() {
    const second = 1e3, minute = second * 60, hour = minute * 60, day = hour * 24;
    let countdown = "Jan 05, 2022 00:00:00", countDown = new Date(countdown).getTime(), x = setInterval(function() {
        let now = new Date().getTime(), distance = countDown - now;
        document.getElementById("days").innerText = Math.floor(distance / day), document.getElementById("hours").innerText = Math.floor(distance % day / hour), 
        document.getElementById("minutes").innerText = Math.floor(distance % hour / minute), 
        document.getElementById("seconds").innerText = Math.floor(distance % minute / second);
        //seconds
    }, 0);
})();

//POPUP
$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});