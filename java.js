function clickSubmit() {
    var name_element = document.getElementById("txt_name");
   
    if(name_element.value === "") {		// if no name is given, so there aren't any weird spaces on the alert
    	alert("Sorry, but this form is not functing at this time.");
    } else {
    	alert("Sorry " + name_element.value + ", but this form is not functioning at this time.");
    }
};



