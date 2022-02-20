var x=0;
var resultsDiv=document.getElementById("results");
var resultsLevel1Div=document.getElementById("level1");
var resultsLevel2Div=document.getElementById("level2");
var level1Result = "";
var level2Result = "";
var changeResult = false;

function add_results_Level1(o) {
	level1Result = o.innerHTML;
	if(level1Result.includes("Claim")){
		document.getElementById("level1-results-yes").innerHTML = "Solution: " + "Self Service";
		document.getElementById("level2-results-yes").style.display="none";		
		document.getElementById("lvl_results_no").style.display="none";
		document.getElementById("lvl_results_yes").style.display="block";
		document.getElementById("lvl_2").style.display="none";
		document.getElementById("resultReason-yes").innerHTML = "Self service solution";
		document.getElementById("assets-copy-image-yes").style.marginTop="18px";
	}
}
function add_results_Level2(o) {
	level2Result = o.innerHTML;
	if(level1Result.includes("Deactivate")){
		if(level2Result.includes("More than 100")){
			document.getElementById("level1-results-no").innerHTML = "Employees: " + level2Result;
			document.getElementById("level2-results-no").innerHTML = "Solution: " + "Not possilbe please see documentation";
			document.getElementById("lvl_results_yes").style.display="none";
			document.getElementById("lvl_results_no").style.display="block";			
			document.getElementById("resultReason-no").innerHTML = "No please read the following link ";
			document.getElementById("assets-copy-image-no").style.marginTop="48px";
		}
		else if(level2Result.includes("Less than 100")){
			document.getElementById("level1-results-yes").innerHTML = "Employees: " + level2Result;
			document.getElementById("level2-results-yes").innerHTML = "Solution: " + "Self Service";
			document.getElementById("lvl_results_no").style.display="none";
			document.getElementById("lvl_results_yes").style.display="block";
			document.getElementById("resultReason-yes").innerHTML = "Self Service Solution";
			document.getElementById("assets-copy-image-yes").style.marginTop="48px";
		}
	}
}

function switch_fun(){
	switch(x){
		case 0:
    	// code block
    	document.getElementById("lvl_1").style.display="block";
    	document.getElementById("lvl_2").style.display="none";
    	document.getElementById("lvl_results_yes").style.display="none";
		document.getElementById("lvl_results_no").style.display="none";
    	console.log(x);
    	break;
  		case 1:
    	// code block
    	document.getElementById("lvl_1").style.display="none";
    	document.getElementById("lvl_2").style.display="block";
    	document.getElementById("lvl_results_yes").style.display="none";
		document.getElementById("lvl_results_no").style.display="none";
    	console.log(x);
    	break;
  		case 2:
    	// code block
    	document.getElementById("lvl_1").style.display="none";
    	document.getElementById("lvl_2").style.display="none";
    	document.getElementById("lvl_results_yes").style.display="none";
		document.getElementById("lvl_results_no").style.display="none";
		
		console.log("check value "+changeResult)
		if(changeResult == false){
		document.getElementById("lvl_results_yes").style.display="none";
			document.getElementById("lvl_results_no").style.display="block";			
			console.log(changeResult)
		}
		if(changeResult == true){
			document.getElementById("lvl_results_no").style.display="none";
			document.getElementById("lvl_results_yes").style.display="block";			
			console.log(changeResult)
		}
		console.log(x);
		//console.log(level1Result + level2Result + level3Result);
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
		let data;
		var solution;
		
		if(level1Result.includes("Claim")){
			data = 
				'Request Type: Claim' + ' \r\n ' + 
				'Solution: ' + "Self Service";
				solution = "Self Service";
		}
		else if(level1Result.includes("Deactivate")){
			if(level2Result.includes("More than 100")){
				data = 
					'Request Type: Deactivate' + ' \r\n ' + 
					'Number of Employees: ' + level2Result + ' \r\n ' + 
					'Solution: ' + "Not possible please see documentation";
					solution = "Not possible please see documentation";
			}
			else{
				data = 
					'Request Type: Deactivate' + ' \r\n ' +
					'Number of Employees: ' + level2Result + ' \r\n ' + 					
					'Solution: ' + "Self Service";
					solution = "Self Service";
			}
		}
        
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
		var resultsText = level1Result + " " + level2Result + solution;
		  
		   /* Copy the text inside the text field */
		  navigator.clipboard.writeText(resultsText);

		  /* Alert the copied text */
		  alert("Case Details Copied and Downloaded");		
}