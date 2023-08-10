// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                `;
                 
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    } 
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");
let h2 = document.getElementById("launchStatus")
let faultyItems = document.getElementById("faultyItems")
    if (
        validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) !== "Is a Number" ||
        validateInput(cargoLevel) !== "Is a Number"
    ) {
        alert("All fields are required and must have valid inputs!");
     } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
     
     if (fuelLevel < 10000) {
        faultyItems.style.visibility = 'visible';
        h2.style.color = 'red';
        h2.innerHTML = 'Shuttle Not Ready for Launch';
        fuelStatus.innerHTML = 'Fuel level too low for launch';
    } else if (cargoLevel > 10000) {
        faultyItems.style.visibility = 'visible';
        h2.style.color = 'red';
        h2.innerHTML = 'Shuttle Not Ready for Launch';
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        
    } else {
        faultyItems.style.visibility = 'visible';
        h2.style.color = 'green';
        h2.innerHTML = 'Shuttle is Ready for Launch';
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML= "Cargo mass low enough for launch";
    }
    }
}
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;