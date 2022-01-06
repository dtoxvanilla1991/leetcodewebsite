// There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

// You are given the integer capacity and an array trips where trip[i] = [numPassengersi, fromi, toi] indicates that 
// the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. 
//The locations are given as the number of kilometers due east from the car's initial location.

// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

var carPooling = function(trips, capacity) {
    
    let passengers = new Array(1001).fill(0);
    
    for(let i = 0; i < trips.length; i++){
        
        passengers[trips[i][1]] += trips[i][0];
        
        passengers[trips[i][2]] -= trips[i][0];
        
              
    }
    
    for(let i = 0; i < passengers.length; i++){
        
        capacity -= passengers[i];

        if(capacity < 0) {
            return false;
        }
        
    }
    
    return true;
};
console.log(carPooling([[10,5,7],[10,3,4],[7,1,8],[6,3,4]], 24));