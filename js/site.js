var loadOverlay = function() {
	document.getElementById('overlay').className = "";
	return;
}

var hideOverlay = function() {
	document.getElementById('overlay').className = "hidden";
	return;
}

var subscribe = function(email){
	var req = new XMLHttpRequest();
	var url = "http://www.chrislevine.net/train-to-reign/subscribe.php?email=" + email;
	req.open("get", url, true);

	req.onreadystatechange = function() {
		if (req.readyState == 4 && req.status == 200){
			var response = JSON.parse(req.responseText);
			if (response.status === "pass"){
				alert("You've been successfully added. Please check your email!");
			} else {
				alert("There was an issue adding your email. Please try again.");
			}

			hideOverlay();
		}
	}

	req.send();

}
