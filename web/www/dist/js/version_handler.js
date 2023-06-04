$(document).ready(() => {
	if (window.location.pathname == "/" || "/index.html" || "/index.htm") {
		$.getJSON("./dist/json/version.json", (result) => {
			$.each(result, function (i, field) {
				$("#login_version").text(`Version ${field}`);
				$("#ver_log").text(`Version ${field}`);
			});
		});
	} else {
		$.getJSON("../../dist/json/version.json", (result) => {
			$.each(result, function (i, field) {
				$(".ver").text(`BonziWORLD Enhanced  v${field} `);
			});
		});
	}
});
