var x=0;
var resultsDiv=document.getElementById("results");
var resultsLevel1Div=document.getElementById("level1");
var resultsLevel2Div=document.getElementById("level2");
var resultsLevel3Div=document.getElementById("level3");
var level1Result = "";
var level2Result = "";
var level3Result = "";
var changeResult = false;

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
}
function add_results_Level2(o) {
	level2Result = o.innerHTML;
	level3Result = o.innerHTML;
	document.getElementById("level1-results-yes").innerHTML = "Number of Employees: " + level1Result;
	document.getElementById("level2-results-yes").innerHTML = "Severity of Change: " + level2Result;
	document.getElementById("level3-results-yes").innerHTML = "Age of Plan: " + level3Result;
	document.getElementById("level1-results-no").innerHTML = "Number of Employees: " + level1Result;
	document.getElementById("level2-results-no").innerHTML = "Severity of Change: " + level2Result;
	document.getElementById("level3-results-no").innerHTML = "Page URL the client wishes to rebrand/rename: ";
	console.log("true results" + level1Result + level2Result + level3Result)
	
	if(level1Result.includes("More than 500") &&
		level2Result.includes("Significant change")){
			document.getElementById("lvl_results_no").style.display="none";
			document.getElementById("lvl_results_yes").style.display="block";
	}
	else if(level1Result.includes("More than 500") &&
		level2Result.includes("Minor change")){
			document.getElementById("lvl_results_no").style.display="none";
			document.getElementById("lvl_results_yes").style.display="block";
	}
	else if(level1Result.includes("Less than 500") &&
		level2Result.includes("Minor change")){
			document.getElementById("lvl_results_no").style.display="none";
			document.getElementById("lvl_results_yes").style.display="block";
	}
	else if(level1Result.includes("Less than 500") &&
		level2Result.includes("Minor change")){
			document.getElementById("lvl_results_no").style.display="none";
			document.getElementById("lvl_results_yes").style.display="block";
			//self serve
	}
	else if(level1Result.includes("Less than 500") &&
		level2Result.includes("Significant change")){
			document.getElementById("lvl_results_no").style.display="none";
			document.getElementById("lvl_results_yes").style.display="block";
	}
}
function add_results_Level3(o) {
	
}

function switch_fun(){
	switch(x){
		case 0:
    	// code block
    	document.getElementById("lvl_1").style.display="block";
    	document.getElementById("lvl_2").style.display="none";
    	//document.getElementById("lvl_3").style.display="none";
    	document.getElementById("lvl_results_yes").style.display="none";
		document.getElementById("lvl_results_no").style.display="none";
    	console.log(x);
    	break;
  		case 1:
    	// code block
    	document.getElementById("lvl_1").style.display="none";
    	document.getElementById("lvl_2").style.display="block";
    	//document.getElementById("lvl_3").style.display="none";
    	document.getElementById("lvl_results_yes").style.display="none";
		document.getElementById("lvl_results_no").style.display="none";
    	console.log(x);
    	break;
  		case 2:
    	// code block
		document.getElementById("lvl_1").style.display="none";
    	document.getElementById("lvl_2").style.display="none";
		console.log("check value "+changeResult)
		console.log(x);
	}
}

function logic_fun() {
	x+=1;
	switch_fun();
}

function reduce_x(){
	if (x>0){
		x-=1;
		switch_fun();}
}
let saveFile = () => {
        // This variable stores all the data.
        let data = 
			'Request Type: Rebrand' + ' \r\n ' + 
            'Number of Employees: ' + level1Result + ' \r\n ' + 
            'Severity of Change: ' +level2Result + ' \r\n ' + 
            'Page URL the client wishes to rebrand/rename: ';
        
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
		var resultsText = level1Result + " " + level2Result + " " + level3Result;
		  
		   /* Copy the text inside the text field */
		  navigator.clipboard.writeText(resultsText);

		  /* Alert the copied text */
		  alert("Case Details Copied and Downloaded");		
}