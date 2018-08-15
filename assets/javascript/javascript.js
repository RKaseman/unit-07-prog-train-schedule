
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
var departure = "";
var frequency = "";

$("#sendForm").on("click", function(event) {
    event.preventDefault();
    name = $("#nameEnter").val().trim();
    destination = $("#destEnter").val().trim();
    departure = $("#departEnter").val().trim();
    frequency = $("#freqEnter").val().trim();
    console.log("name : " + name);
    console.log("destination : " + destination);
    console.log("departure : " + departure);
    console.log("frequency : " + frequency);

    firebase.database().ref().push({
        name: name,
        destination: destination,
        departure: departure,
        frequency: frequency
    });

    firebase.database().ref().on("child_added", function(childSnapshot){
        console.log(childSnapshot.val());
        $("tbody").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().destination + "</td><td>" + childSnapshot.val().departure + "</td><td>" + childSnapshot.val().frequency + "</td></tr>");
        console.log("this : " + this);
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
});

