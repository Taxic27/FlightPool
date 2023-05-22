function check(){
	var password = document.getElementById("test-1-fps").value;
	var password_check = "password12*";
	var phone = document.getElementById("test-1-fpn").value;
	var phone_check = "8 (999) 123-4567";
	if (phone != phone_check || password != password_check) {
		event.preventDefault();
		document.getElementById("log-error").style.display = "block";
	}
}