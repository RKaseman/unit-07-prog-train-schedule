
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

    // push back time 1 year
    var arrivalConvert = moment(departure, "HH:mm").subtract(1, "years");
    console.log("arrivalConvert = " + moment(departure, "HH:mm").subtract(1, "years"));

    // get & format current time
    var currentTime = moment();
    console.log("currentTime = " + moment(currentTime).format("hh:mm"));

    // calculate time difference
    var arrivalCalc = moment().diff(moment(arrivalConvert), "minutes");
    console.log("arrivalCalc = " + moment().diff(moment(arrivalConvert), "minutes"));

    // time remainder
    var timeRem = arrivalCalc % frequency;
    console.log("timeRem = " + (arrivalCalc % frequency));

    // minutes until arrival
    var arrival = frequency - timeRem;
    console.log("arrival = " + (frequency - timeRem));

    // push to firebase
    firebase.database().ref().push({
        name: name,
        destination: destination,
        arrival: arrival,
        departure: departure,
        frequency: frequency
    });
});

    // append schedule to table
    firebase.database().ref().on("child_added", function(snapshot){
        console.log(snapshot.val());
        $("#sched").append("<tr><td>" 
            + snapshot.val().name 
        + "</td><td>" 
            + snapshot.val().destination 
        + "</td><td>" 
            + snapshot.val().arrival + " min(s)"
        + "</td><td>" 
            + snapshot.val().departure 
        + "</td><td>" 
            + snapshot.val().frequency 
        + "</td></tr>");
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
});

