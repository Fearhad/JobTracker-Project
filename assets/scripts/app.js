
// var jobLocation = "Wirecutter";

var queryURL = "https://goremote.io/api/jobs";
var globalJobObject;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){ 
    console.log(response);
    dSResults(response);
    globalJobObject = response;
}).catch(function(error){
    console.log("The Following Error Occurred: " + error);
});

// click handler for the search term button (search-btn)
$("#search-btn").on("click", function() {
    event.preventDefault();

    // retrive the job search term user has input into the search field.
    var term = $("#input-fld").val().toLowerCase().trim();
    console.log(term); 
});

// Modal handler
$('#detailModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var job = globalJobObject[button.attr('data-jobObjID')];
    console.log(job); // Pull up the current job listing from the global Job Object.

    var modal = $(this);
    modal.find('.modal-title').text(job.position);
    modal.find('.modal-body #applyurl').html('<a href="' + job.applyurl + '" target="_blank">Apply @ ' + job.sourcename + '</a>');
    modal.find('.modal-body #companyname').text(job.companyname);
    modal.find('.modal-body #googleMap').val(dMView(job.companyname));
    modal.find('.modal-body #description').html(job.description);
});

// function display Search Results
function dSResults(jObject) {
    for(var i = 0; i < 10; i++) {
        // storing current array item in a variable r.
        var r = jObject[i];

        // creating new tableRow to append to the tbody of jSResults.
        var tableRow = $("<tr>");

        // filling in each cell data with appropriate information.
        // this could be DRYed up a bit.
        tableRow.append($("<td>").html('<span class="c-title text-primary" data-jobObjID="' + i + '" data-toggle="modal" data-target="#detailModal">' + r.position + '</span>'));
        tableRow.append($("<td>").text(r.companyname));
        tableRow.append($("<td>").text(r.dateadded));
        tableRow.append($("<td>").text("NA"));
        tableRow.append($("<td>").html(r.description.substr(0, 100) + "..."));

        // appending the new tableRow to the exisitng #jSResults table.
        $("#jSResults tbody").append(tableRow);
    }
}

// display Maps View
function dMView(jobLocation) {
    var map = "<img width='600' src='https://maps.googleapis.com/maps/api/staticmap?center=" + jobLocation + "&zoom=8&scale=13&size=600x300&maptype=roadmap&format=png&visual_refresh=true'>"
    var mapDiv = $("#googleMap");

    mapDiv.empty();
    mapDiv.append(map);
    console.log(map)
}

$("#add-user").on("click", function(event) {
    event.preventDefault();
    var name = $("#name-input").val().trim();

    localStorage.clear();
    localStorage.setItem("getajobName", name);
});