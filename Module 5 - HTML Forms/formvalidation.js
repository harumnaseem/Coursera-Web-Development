function calculateOrder ()
{
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var phone = document.getElementById("phone").value;
	var quantity = document.getElementById("quantity").value;
	var price = document.getElementById("price").value;

	var userName = firstName + " " + lastName;

	document.getElementById("orderConfirm").innerHTML = "<h2> Order Summary: </h2>";
	document.getElementById("orderConfirm").innerHTML += "<p>" + userName.toUpperCase() + "<br>"  + phone + "</p>";
	document.getElementById("orderConfirm").innerHTML += "<p> Order Total: " + price * quantity + "</p>"

}


function validateFirstName ()
{
	var fName = document.getElementById("firstName").value;
	var rel = /^[a-zA-Z\s\'\-']{2,15}$/;

	if(rel.test(fName))
	{
		document.getElementById("firstNamePrompt").style.color = "green";
		document.getElementById("firstNamePrompt").innerHTML = "<strong> valid </strong>";

		return true;
	}
	else
	{
		document.getElementById("firstNamePrompt").style.color = "Red";
		document.getElementById("firstNamePrompt").innerHTML = "<strong> Invalid </strong>";

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
		document.getElementById("lastNamePrompt").innerHTML = "<strong> valid </strong>";

		return true;
	}
	else
	{
		document.getElementById("lastNamePrompt").style.color = "Red";
		document.getElementById("lastNamePrompt").innerHTML = "<strong> Invalid </strong>";

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
		document.getElementById("phonePrompt").innerHTML = "<strong> valid </strong>";

		return true;
	}
	else
	{
		document.getElementById("phonePrompt").style.color = "Red";
		document.getElementById("phonePrompt").innerHTML = "<strong> Invalid </strong>";

		return false;
	}


}