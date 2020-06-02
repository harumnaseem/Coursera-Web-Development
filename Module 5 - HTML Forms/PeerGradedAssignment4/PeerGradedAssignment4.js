function validateEmail()
{
	var emailID = document.getElementById("email").value;
	var rel = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if(rel.test(emailID))
	{
		document.getElementById("emailPrompt").style.color = "green";
		document.getElementById("emailPrompt").innerHTML = "<strong> Valid. </strong>";

		return true;
	}
	else
	{
		document.getElementById("emailPrompt").style.color = "#800";
		document.getElementById("emailPrompt").innerHTML = "<strong> Invalid. </strong>";

		return false;
	}
}

function validatePassword ()
{
	var Password = document.getElementById("password").value;

	if(Password.length == 6)
	{
		document.getElementById("passwordPrompt").style.color = "green";
		document.getElementById("passwordPrompt").innerHTML = "<strong> Valid. </strong>";

		return true;
	}
	else
	{
		document.getElementById("passwordPrompt").style.color = "#800";
		document.getElementById("passwordPrompt").innerHTML = "<strong> Invalid. Length must be 6. </strong>";

		return false;
	}
}

function validateFirstName ()
{
	var fName = document.getElementById("firstName").value;
	var rel = /^[a-zA-Z\s\'\-']{2,15}$/;

	if(rel.test(fName))
	{
		document.getElementById("firstNamePrompt").style.color = "green";
		document.getElementById("firstNamePrompt").innerHTML = "<strong> Valid. </strong>";

		return true;
	}
	else
	{
		document.getElementById("firstNamePrompt").style.color = "#800";
		document.getElementById("firstNamePrompt").innerHTML = "<strong> Invalid. Length must be between 2 and 15. </strong>";

		return false;
	}
}

function validateLastName ()
{
	var lName = document.getElementById("lastName").value;
	var rel = /^[a-zA-Z\s\'\-']{2,15}$/;

	if(rel.test(lName))
	{
		document.getElementById("lastNamePrompt").style.color = "green";
		document.getElementById("lastNamePrompt").innerHTML = "<strong> Valid. </strong>";

		return true;
	}
	else
	{
		document.getElementById("lastNamePrompt").style.color = "#800";
		document.getElementById("lastNamePrompt").innerHTML = "<strong> Invalid. Length must be between 2 and 15. </strong>";

		return false;
	}
}

function validatePhone ()
{
	var phoneNumber = document.getElementById("phone").value;
	var rel = /^\d{3}-\d{3}-\d{4}$/;

	if(rel.test(phoneNumber))
	{
		document.getElementById("phonePrompt").style.color = "green";
		document.getElementById("phonePrompt").innerHTML = "<strong> Valid. </strong>";

		return true;
	}
	else
	{
		document.getElementById("phonePrompt").style.color = "#800";
		document.getElementById("phonePrompt").innerHTML = "<strong> Invalid. </strong>";

		return false;
	}


}

