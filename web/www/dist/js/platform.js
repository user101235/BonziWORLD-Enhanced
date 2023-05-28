var isMobileApp = false;
var isApp = false;

var isDesktop = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) == null;
var isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null;
var isFirefoxBrowser = /Firefox/.test(navigator.userAgent)
var isChromeBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isEdgeBrowser = /Edg/.test(navigator.userAgent);

var urlFirefox = "";
var urlEdge = "";
var urlOpera = "";
var urlChrome = "";
var urlGPlay = "";
var urlAppStore = "";


$(() => {
	var support = {
		AudioContext: {
			supported: typeof (window.AudioContext || window.webkitAudioContext) != "undefined",
			message: "Your browser does not support the Web Audio API."
		}
	};

	var supported = true;
	var supportKeys = Object.keys(support);
	for (var i = 0; i < supportKeys.length; i++) {
		var key = supportKeys[i];
		var obj = support[key];
		supported = supported && obj.supported;
		if (!obj.supported)
			$("#unsupp_reasons").append(
				`<li>${obj.message}</li>`
			);
	}

	if (!supported) {
		$("#page_unsupp").show();
	}

	if (isChromeBrowser && isDesktop) {
		$(".app_showcase").append(
			`<a class="app_chrome" href="${urlChrome}"><img src="./img/icons/app/webstore.png" class="no_selection" alt="Chrome Extension" title="Chrome Extension" draggable="false" /></a>`
		);
	}
	if (isEdgeBrowser && isDesktop) {
		$(".app_showcase").append(
			`<a class="app_edge" href="${urlEdge}"><img src="./img/icons/app/edge_store.png" class="no_selection" alt="Edge Extension" title="Edge Extension" draggable="false" /></a>`
		);
	}
	if (isFirefoxBrowser && isDesktop) {
		$(".app_showcase").append(
			`<a class="app_firefox" href="${urlFirefox}"><img src="./img/icons/app/firefox_addon.png" class="no_selection" alt="Firefox Extension" title="Firefox Extension" draggable="false" /></a>`
		);
	}

	if (!isiOS) {
		$(".app_showcase").append(
			`<a class="app_android" href="${urlGPlay}"><img src="./img/icons/app/google-play-badge.png" class="no_selection" alt="Get it on Google Play." title="Get it on Google Play." draggable="false" /></a>`
		);
	}

	if (isiOS) {
		$(".app_showcase").append(
			`<a class="app_ios" href="${urlAppStore}"><img src="./img/icons/app/apple_app_store.png" class="no_selection" alt="Download on the App Store." title="Download on the App Store." draggable="false" /></a>`
		);
	}

	if (!isDesktop) {
		$(".app_showcase").append(
			`<a class="app_chrome"><img src="./img/icons/app/desktop.png" class="no_selection" alt="Open on PC for the best experience." title="Open on PC for the best experience." draggable="false" /></a>`
		);
	}
});
