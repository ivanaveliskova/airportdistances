
//Main function
var main = function(){
	//Starts working when the user hits the sumbit button.
	$("#calcDistance").submit(function(){
		//Sets the values from the selections on the form into variables
		var depart = $("select#leaving").val();
		var arrive = $("select#going").val();

		//Uses the function within the flights.js to find the distances and sets it to a variable
		var distance = IntentMedia.Distances.distance_between_airports(depart, arrive);

		//if statement to determine whether the inputs of the user were valid.
		//If not then the document is modified to tell the user to try again.
		if(distance < 0){
			$("#distances").text("This airport does not exist.");
		}else if(distance === 0){
			$("#distances").text("You are where you started!")
		}else{
			$("#distances").text(distance + " miles away")
		}

		//Prevents the document from submitting to a server to keep the page from refreshing
		return false;
	});
}

//Initiates the function only if the rest of the document has loaded.
$(document).ready(main);