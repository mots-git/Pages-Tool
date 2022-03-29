$(document).ready(function () {

	document.getElementById("lvl_results_yes").style.display = "none";

});

function CompanyToShowcase() {

	document.getElementById("page1").style.display = "none";
	document.getElementById("descriptionText").style.display = "none";
	document.getElementById("lvl_results_yes").style.display = "block";
	document.getElementById("bullet1").innerHTML = "A completed copy of this form";
	document.getElementById("bullet2").innerHTML = "A copy of the below information";
	//document.getElementById("resultReason-yes").innerHTML = "Yes - Please Complete the form";
	document.getElementById("level1-results-yes").innerHTML = "Type of Change: Company to Showcase";
	document.getElementById("level2-results-yes").innerHTML = "Company page URL:";
	document.getElementById("level3-results-yes").innerHTML = "Desired parent page URL (Showcase must have a parent page):";
	document.getElementById("assets-copy-image-yes").style.marginTop = "49px";

}

function CompanyToUniversity() {

	document.getElementById("page1").style.display = "none";
	document.getElementById("descriptionText").style.display = "none";
	document.getElementById("lvl_results_yes").style.display = "block";
	document.getElementById("bullet1").innerHTML = "An email from an admin of the company page requesting the conversion";
	document.getElementById("bullet2").innerHTML = "A copy of the below information";
	//document.getElementById("resultReason-yes").innerHTML = "Yes - Email needed from Admin of page verifying request";
	document.getElementById("level1-results-yes").innerHTML = "Type of Change: Company to University";
	document.getElementById("level2-results-yes").innerHTML = "Company page URL:";
	document.getElementById("level3-results-yes").innerHTML = "Desired parent page URL:";
	document.getElementById("assets-copy-image-yes").style.marginTop = "49px";

}

function ShowcaseToCompany() {

	document.getElementById("page1").style.display = "none";
	document.getElementById("descriptionText").style.display = "none";
	document.getElementById("lvl_results_yes").style.display = "block";
	document.getElementById("bullet1").innerHTML = "An email from an admin of the company page requesting the conversion";
	document.getElementById("bullet2").innerHTML = "A copy of the below information";
	//document.getElementById("resultReason-yes").innerHTML = "Yes - Email needed from Admin of page verifying request";
	document.getElementById("level1-results-yes").innerHTML = "Type of Change: Showcase to Company";
	document.getElementById("level2-results-yes").innerHTML = "Company page URL:";
	document.getElementById("level3-results-yes").innerHTML = "Desired parent page URL:";
	document.getElementById("assets-copy-image-yes").style.marginTop = "49px";

}

function ShowcaseToUniversity() {

	document.getElementById("page1").style.display = "none";
	document.getElementById("descriptionText").style.display = "none";
	document.getElementById("lvl_results_yes").style.display = "block";
	document.getElementById("bullet1").innerHTML = "An email from an admin of the company page requesting the conversion";
	document.getElementById("bullet2").innerHTML = "A copy of the below information";
	//document.getElementById("resultReason-yes").innerHTML = "Yes - Email needed from Admin of page verifying request";
	document.getElementById("level1-results-yes").innerHTML = "Type of Change: Showcase to University";
	document.getElementById("level2-results-yes").innerHTML = "Company page URL:";
	document.getElementById("level3-results-yes").innerHTML = "Desired parent page URL:";
	document.getElementById("assets-copy-image-yes").style.marginTop = "49px";

}

function UniversityToCompany() {

	document.getElementById("page1").style.display = "none";
	document.getElementById("descriptionText").style.display = "none";
	document.getElementById("lvl_results_yes").style.display = "block";
	document.getElementById("bullet1").innerHTML = "An email from an admin of the company page requesting the conversion";
	document.getElementById("bullet2").innerHTML = "A copy of the below information";
	//document.getElementById("resultReason-yes").innerHTML = "Yes - Email needed from Admin of page verifying request";
	document.getElementById("level1-results-yes").innerHTML = "Type of Change: University to Company";
	document.getElementById("level2-results-yes").innerHTML = "Company page URL:";
	document.getElementById("level3-results-yes").innerHTML = "Desired parent page URL:";
	document.getElementById("assets-copy-image-yes").style.marginTop = "49px";

}

function UniversityToShowcase() {

	document.getElementById("page1").style.display = "none";
	document.getElementById("descriptionText").style.display = "none";
	document.getElementById("lvl_results_yes").style.display = "block";
	document.getElementById("bullet1").innerHTML = "An email from an admin of the company page requesting the conversion";
	document.getElementById("bullet2").innerHTML = "A copy of the below information";
	//document.getElementById("resultReason-yes").innerHTML = "Yes - Email needed from Admin of page verifying request";
	document.getElementById("level1-results-yes").innerHTML = "Type of Change: University to Showcase";
	document.getElementById("level2-results-yes").innerHTML = "Company page URL:";
	document.getElementById("level3-results-yes").innerHTML = "Desired parent page URL:";
	document.getElementById("assets-copy-image-yes").style.marginTop = "49px";

}
let saveFile = () => {
	// This variable stores all the data.
	let data;
	var solution;


	data =
		'Request Type: Convert Page Type' + ' \r\n ' +
		document.getElementById("level1-results-yes").innerHTML + ' \r\n ' +
		document.getElementById("level2-results-yes").innerHTML + ' \r\n ' +
		document.getElementById("level3-results-yes").innerHTML;

	// Convert the text to BLOB.
	const textToBLOB = new Blob([data], {
		type: 'text/plain'
	});
	const sFileName = 'CaseData.txt'; // The file to save the data.

	let newLink = document.createElement("a");
	newLink.download = sFileName;

	if (window.webkitURL != null) {
		newLink.href = window.webkitURL.createObjectURL(textToBLOB);
	} else {
		newLink.href = window.URL.createObjectURL(textToBLOB);
		newLink.style.display = "none";
		document.body.appendChild(newLink);
	}

	newLink.click();

	/* Get the text field */
	var resultsText = document.getElementById("level1-results-yes").innerHTML + " " + document.getElementById("level1-results-yes").innerHTML;

	/* Copy the text inside the text field */
	navigator.clipboard.writeText(resultsText);

	/* Alert the copied text */
	alert("Case Details Copied and Downloaded");
}