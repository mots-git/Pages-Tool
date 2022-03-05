var level=1;
var finished=false;
var questionText=document.getElementById("q1");
var level1Result = "";
var level2Result = "";
var level3Result = "";

function copyFunction() {
  /* Get the text field */
  var copyText = document.getElementById("results").innerHTML;
  
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);

  /* Alert the copied text */
  alert("Copied text: " + copyText);
}

function add_results_Level1(o) {
	level1Result = o.innerHTML;
	questionText=document.getElementById("q1").textContent;
	console.log(level1Result);
	if(level1Result.includes("Yes") && level==1){
		window.location.replace("https://mots-git.github.io/Pages-Tool/selections/acquisition.html");
	}
	else if(level1Result.includes("No") && level==1){
		level=2;	
		document.getElementById("q1").innerHTML = "Do these pages represent a division/regional segment of the same legal entity?";
	}
	else if(level1Result.includes("Yes") && level==2){
		level=3;
		document.getElementById("q1").innerHTML = "Does the page to be merged have more than 1 employee?";
	}
	else if(level1Result.includes("No") && level==2){
		level=3;
		document.getElementById("q1").innerHTML = "Do both CP's have more than 100 employees?";
	}
	else if(level1Result.includes("Yes") && level==3 && questionText==="Does the page to be merged have more than 1 employee?"){
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_yes").style.display = "block";
		document.getElementById("level1-results-yes").innerHTML = "We can merge";
		document.getElementById("level2-results-yes").innerHTML = "Full answer here";	
		document.getElementById("assets-copy-image-yes").style.marginTop = "49px";
		level1Result = document.getElementById("level1-results-yes").innerHTML;
		level2Result = document.getElementById("level2-results-yes").innerHTML;
	}
	else if(level1Result.includes("No") && level==3 && questionText==="Does the page to be merged have more than 1 employee?"){
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_no").style.display = "block";
		document.getElementById("level1-results-no").innerHTML = "We cannot merge";
		document.getElementById("level2-results-no").innerHTML = "Please feel free to raise a ticket below";
		document.getElementById("assets-copy-image-no").style.marginTop = "49px";
		level1Result = document.getElementById("level1-results-no").innerHTML;
		level2Result = document.getElementById("level2-results-no").innerHTML;
	}
	else if(level1Result.includes("Yes") && level==3 && questionText==="Do both CP's have more than 100 employees?"){
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_no").style.display = "block";
		document.getElementById("level1-results-no").innerHTML = "We cannot merge";
		document.getElementById("level2-results-no").innerHTML = "Please feel free to raise a ticket below";
		document.getElementById("assets-copy-image-no").style.marginTop = "49px";
		level1Result = document.getElementById("level1-results-no").innerHTML;
		level2Result = document.getElementById("level2-results-no").innerHTML;
	}
	else if(level1Result.includes("No") && level==3 && questionText==="Do both CP's have more than 100 employees?"){
		level=4;
		document.getElementById("q1").innerHTML = "Does 1 of the CP's have more than 100 employees?";
	}
	else if(level1Result.includes("Yes") && level==4 && questionText==="Does 1 of the CP's have more than 100 employees?"){
		level=5;
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_no").style.display = "block";
		document.getElementById("level1-results-no").innerHTML = "We cannot merge";
		document.getElementById("level2-results-no").innerHTML = "Please feel free to raise a ticket below";
		document.getElementById("assets-copy-image-no").style.marginTop = "49px";
		level1Result = document.getElementById("level1-results-no").innerHTML;
		level2Result = document.getElementById("level2-results-no").innerHTML;
	}
	else if(level1Result.includes("No") && level==4 && questionText==="Does 1 of the CP's have more than 100 employees?"){
		level=5;
		console.log("finished");
		document.getElementById("lvl_1").style.display = "none";
		document.getElementById("lvl_results_yes").style.display = "block";
		document.getElementById("level1-results-yes").innerHTML = "We can merge";
		document.getElementById("level2-results-yes").innerHTML = "Full answer here";
		document.getElementById("assets-copy-image-yes").style.marginTop = "49px";
		level1Result = document.getElementById("level1-results-yes").innerHTML;
		level2Result = document.getElementById("level2-results-yes").innerHTML;		
	}
}
let saveFile = () => {
        // This variable stores all the data.
        let data = 
			'Request Type: Consolidation/Merge' + ' \r\n ' + 
            'Result: ' + level1Result + ' \r\n ' + 
            'Reference: ' + level2Result;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'CaseData.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();

		/* Get the text field */
		var resultsText = level1Result + " " + level2Result;
		  
		   /* Copy the text inside the text field */
		  navigator.clipboard.writeText(resultsText);

		  /* Alert the copied text */
		  alert("Case Details Copied and Downloaded");		
}