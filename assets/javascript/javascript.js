
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBmeleQU0z3P1C6sbEnlStaE7msi-2JzxM",
    authDomain: "trains-35781.firebaseapp.com",
    databaseURL: "https://trains-35781.firebaseio.com",
    projectId: "trains-35781",
    storageBucket: "",
    messagingSenderId: "755160834451"
};

firebase.initializeApp(config);

var fbDb = firebase.database();

$("#fullForm").on("click", function(event){
    event.PreventDefault();
    var name = $("#nameEnter").val().trim();
    var destination = $("#destEnter").val().trim();
    var arrival = $("#arrivalEnter").val().trim();
    var departure = $("#departEnter").val().trim();
    var frequency = $("#freqEnter").val().trim();

    console.log(name);

    // fbDb.ref().push({
    //     name: name,
    //     destination: destination,
    //     arrival: arrival,
    //     departure: departure,
    //     frequency: frequency,
    // })

});

// fbDb.ref().on("child_added", function(childSs){
//     console.log(childSs.val());
//     $("#tbody").append("<tr><td>" + childSs.val().name + "</td><td>" + childSs.val().destination + "</td><td>" + childSs.val().arrival + "</td><td>" + childSs.val().departure + "</td><td>" + childSs.val().frequency + "</td></tr>");
// });

