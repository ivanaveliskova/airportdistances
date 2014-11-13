var main = function () {
     
    document.getElementById('calcDistance').onsubmit=( function (e) {
        // don't submit form on click
        e.preventDefault();
 
        var depart = document.getElementById('leaving').value,
            arrive = document.getElementById('going').value,
            distances = document.getElementById('distances'),
            distance = IntentMedia.Distances.distance_between_airports(depart, arrive);
 
        //if statement to determine whether the inputs of the user were valid.
        //If not then the document is modified to tell the user to try again.
        if (distance < 0) {
            distances.innerHTML = "This airport does not exist.";
        } else if (distance === 0){
            distances.innerHTML = "You are where you started!";
        } else {
            distances.innerHTML = (distance + " miles away");
        }
    });
}();