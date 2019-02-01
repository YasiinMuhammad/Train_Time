
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAPjW8C61XU7MNj45JPGpYbsPXNkJmLwNo",
    authDomain: "free-style-f174e.firebaseapp.com",
    databaseURL: "https://free-style-f174e.firebaseio.com",
    projectId: "free-style-f174e",
    storageBucket: "free-style-f174e.appspot.com",
    messagingSenderId: "705804956721"
};
firebase.initializeApp(config);



var database = firebase.database();

var destination;
var name;
var firstTrain;
var frequency;

$("#run-search").on("click", function (event) {
    event.preventDefault();

    name = $("#train-name-input").val().trim();
    destination = $("#role").val().trim();
    firstTraintime = $("#start-time").val().trim();
    frequency = $("#Frequency").val().trim();


    database.ref().push({
        name: name,
        destination: destination,
        firstTraintime: firstTraintime,
        frequency: tfrequency,
    });
    console.log()

    database.ref().on("child_added", function (childSnapshot) {

         newTableItem = $("<tr>");

        var tableTrainname = $("<td>");
        tableTrainname.text(childSnapshot.val().name);
       
        var tableDes = $("<td>");
        tableDes.text(childSnapshot.val().destination);
        
        var tableFirstTrain = $("<td>");
        tableFirstTrain.text(childSnapshot.val().firstTrain);
        
        
        var tableFre = $("<td>");
        tableFre.text(childSnapshot.val().tfrequency);
        
        var newTableItem = $("<tr>").append(
            $("<td>").text(tabletrainName),
            $("<td>").text(tableDes),
            $("<td>").text(tableFre),
            $("<td>").text(times.nextTrain),
            
    
        );
        $("#table-body > tbody").append(newline);
        });


    }, function (errorObject) {

        // In case of error this will print the error
        console.log("The read failed: " + errorObject.code);
    
    // place function here 
     // Assumptions
     var tFrequency = 3;

     // Time is 3:30 AM
     var firstTime = "03:30";
 
     // First Time (pushed back 1 year to make sure it comes before current time)
     var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
     console.log(firstTimeConverted);
 
     // Current Time
     var currentTime = moment();
     console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
 
     // Difference between the times
     var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
     console.log("DIFFERENCE IN TIME: " + diffTime);
 
     // Time apart (remainder)
     var tRemainder = diffTime % tFrequency;
     console.log(tRemainder);
 
     // Minute Until Train
     var tMinutesTillTrain = tFrequency - tRemainder;
     console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
 
     // Next Train
     var nextTrain = moment().add(tMinutesTillTrain, "minutes");
     console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
} ); 
