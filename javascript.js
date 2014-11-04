var main = function(){
	$("#calcDistance").submit(function(){
		var depart = $("select#leaving").val();
		var arrive = $("select#going").val();

		var distance = IntentMedia.Distances.distance_between_airports(depart, arrive);

		if(distance < 0){
			$("#exists").text("This airport does not exist.");
		}else if(distance === 0){
			$("#exists").text("You are where you started!")
		}else{
			$("#exists").text(distance + " miles away")
		}


		return false;
	});
}

$(document).ready(main);