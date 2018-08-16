
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBmeleQU0z3P1C6sbEnlStaE7msi-2JzxM",
    authDomain: "trains-35781.firebaseapp.com",
    databaseURL: "https://trains-35781.firebaseio.com",
    projectId: "trains-35781",
    storageBucket: "trains-35781.appspot.com",
    messagingSenderId: "755160834451"
};

firebase.initializeApp(config);

var name = "";
var destination = "";
var frequency = 0;
var departure = "";
var arrival = "";
console.log(frequency);

$("#sendForm").on("click", function(event) {
    event.preventDefault();
    name = $("#nameEnter").val().trim();
    destination = $("#destEnter").val().trim();
    frequency = $("#freqEnter").val().trim();
    departure = $("#departEnter").val().trim();
    // arrival = $("#arrivalEnter").val().trim();
    console.log("name : " + name);
    console.log("destination : " + destination);
    console.log("frequency : " + frequency);
    console.log("departure : " + departure);
    console.log("arrival : " + arrival);

    firebase.database().ref().push({
        name: name,
        destination: destination,
        arrival: arrival,
        departure: departure,
        frequency: frequency
    });
});

    firebase.database().ref().on("child_added", function(childSnapshot){
        console.log(childSnapshot.val());
        $("tbody").append("<tr><td>" 
        + name 
        + "</td><td>" 
        + destination 
        + "</td><td>" 
        // + arrival 
        // + "</td><td>" 
        + departure 
        + "</td><td>" 
        + frequency 
        + "</td></tr>");
        // return;
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
});

