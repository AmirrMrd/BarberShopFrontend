/*!
 * Geolocation -  geo.js
 * Version: 1.1 - Vanilla JS build - Open Street Maps Built
 *
 * Copyright Enabled - https://themeforest.net/user/enabled
 * Released under the ThemeForest License. Usage prohibited otherwise.
 */

var locationBut = document.querySelectorAll('.get-location');
if(locationBut.length){
	var locationSupport = document.getElementsByClassName('location-support')[0]
	if (typeof(locationSupport) != 'undefined' && locationSupport != null){
		//Geo Location
		if ("geolocation" in navigator){
			locationSupport.innerHTML = 'مرورگر و دستگاه شما از موقعیت جغرافیایی <strong class="color-green2-dark">پشتیبانی می کند</strong>';
		}else{
			locationSupport.innerHTML = 'مرورگر و دستگاه شما از موقعیت جغرافیایی <strong class="color-red2-dark">پشتیبانی نمیکند</strong>';
		}
	}
	function geoLocate() {
		const locationCoordinates = document.querySelector('.location-coordinates');
		function success(position) {
			const latitude  = position.coords.latitude;
			const longitude = position.coords.longitude;
			locationCoordinates.innerHTML = '<strong>Longitude:</strong> ' + longitude + '<br><strong>Latitude:</strong> '+ latitude;
			var mapL1 = 'https://www.openstreetmap.org/export/embed.html?bbox=';
			var mapL2 = latitude;
			var mapL3 = longitude+',';
			var mapLinkEmbed = mapL1 + mapL3 + mapL2;
			var mapLinkAddress = mapL1 + mapL3 + mapL2;
			document.getElementsByClassName('location-map')[0].setAttribute('src',mapLinkEmbed);
			document.getElementsByClassName('location-button')[0].setAttribute('href',mapLinkAddress);
			document.getElementsByClassName('location-button')[0].classList.remove('disabled');
		}
		function error() {locationCoordinates.textContent = 'امکان دریافت موقعیت مکانی شما وجود ندارد';}
		if (!navigator.geolocation) {locationCoordinates.textContent = 'موقعیت جغرافیایی توسط مرورگر شما پشتیبانی نمی شود';}
		else {locationCoordinates.textContent = 'Locating';navigator.geolocation.getCurrentPosition(success, error);}
	}
	var getLocation = document.getElementsByClassName('get-location')[0]
	if (typeof(getLocation) != 'undefined' && getLocation != null){
		getLocation.addEventListener('click',function(){this.classList.add('disabled'); geoLocate();})
	}
}