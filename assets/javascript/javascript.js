
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

$("#sendForm").on("click", function(event) {
    event.preventDefault();
    name = $("#nameEnter").val().trim();
    destination = $("#destEnter").val().trim();
    frequency = $("#freqEnter").val().trim();
    departure = $("#departEnter").val().trim();
    console.log("name : " + name);
    console.log("destination : " + destination);
    console.log("frequency : " + frequency);
    console.log("departure : " + departure);

    // var frequency = frequency;

    // var departure = departure;

    var arrivalConvert = moment(departure, "HH:mm").subtract(1, "years");
    console.log(moment(departure, "HH:mm").subtract(1, "years"));

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var arrivalCalc = moment().diff(moment(arrivalConvert), "minutes");
    console.log(moment().diff(moment(arrivalConvert), "minutes"));

    var tRemainder = arrivalCalc % frequency;
    console.log(tRemainder);

    var tMinutesWait = frequency - tRemainder;
    console.log(tMinutesWait);

    var nextTrain = moment().add(tMinutesWait, "minutes");
    console.log(nextTrain);

    firebase.database().ref().push({
        name: name,
        destination: destination,
        // arrival: arrival,
        departure: departure,
        frequency: frequency
    });
    $("#nextTrainTime").append(nextTrain);
});

    

    firebase.database().ref().on("child_added", function(snapshot){
        console.log(snapshot.val());
        $("tbody").append("<tr><td>" 
            + snapshot.val().name 
        + "</td><td>" 
            + snapshot.val().destination 
        + "</td><td>" 
            + snapshot.val().arrival
        + "</td><td>" 
            + snapshot.val().departure 
        + "</td><td>" 
            + snapshot.val().frequency 
        + "</td></tr>");
        // return;
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
});

