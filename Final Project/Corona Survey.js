// This function validates the input in the first name field
function validateFirstName ()
{
	// extracting input entered
	var fName = document.getElementById("firstName").value;

	// regex expression
	var rel = /^[a-zA-Z\s\'\-']{2,15}$/;

	// seeing if regex matches or not
	// goes into loop if invalid
	if(!rel.test(fName))
	{
		document.getElementById("firstNamePrompt").style.color = "#800";
		document.getElementById("firstNamePrompt").innerHTML = "<strong> Invalid. Length must be between 2 and 15. </strong>";

		return false;
	}
}

// This function validates the input in the last name field
function validateLastName ()
{
	// extracting input entered
	var lName = document.getElementById("lastName").value;

	// regex expression
	var rel = /^[a-zA-Z\s\'\-']{2,15}$/;


	// seeing if regex matches or not
	// goes into loop if invalid
	if(!rel.test(lName))
	{
		document.getElementById("lastNamePrompt").style.color = "#800";
		document.getElementById("lastNamePrompt").innerHTML = "<strong> Invalid. Length must be between 2 and 15. </strong>";

		return false;
	}
}

// This function validates the input in the hospital name field
function validateHospital ()
{
	// extracting input entered
	var hospitalName = document.getElementById("hospital").value;

	// Checking if empty or not
	if(hospitalName == "")
	{
		document.getElementById("hospitalPrompt").style.color = "#800";
		document.getElementById("hospitalPrompt").innerHTML = "<strong> Please enter hospital name, if not aplicable please enter 'Not applicable'. </strong>";

		return false;
	}
}

// This function validates the input in the share thoughts field
function validateThoughts() 
{
	// extracting input entered
	var thoughts = document.getElementById("thoughts").value;

	// Checking if empty or not
	if(thoughts == "")
	{
		document.getElementById("thoughtPrompt").style.color = "#800";
		document.getElementById("thoughtPrompt").innerHTML = "<strong> Please write something. </strong>";

		return false;
	}
}