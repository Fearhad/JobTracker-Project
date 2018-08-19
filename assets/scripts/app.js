var jobLocation = "Wirecutter";
var map = "<img width='600' src='https://maps.googleapis.com/maps/api/staticmap?center=" + jobLocation + "&zoom=8&scale=13&size=600x300&maptype=roadmap&format=png&visual_refresh=true'>"
$(document).ready(function() {
$("#googleMap").append(map);
console.log(map)
});

var queryURL = "https://goremote.io/api/jobs";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){ 
    console.log(response);

    for(var i = 0; i < 10; i++) {
        // storing current array item in a variable r.
        var r = response[i];

        // creating new tableRow to append to the tbody of jSResults.
        var tableRow = $("<tr>");

        // filling in each cell data with appropriate information.
        // this could be DRYed up a bit.
        tableRow.append($("<td>").html('<a href="' + r.applyurl + '" target=_blank>' + r.position + '</a>'));
        tableRow.append($("<td>").text(r.companyname));
        tableRow.append($("<td>").text(r.dateadded));
        tableRow.append($("<td>").text("NA"));
        tableRow.append($("<td>").html(r.description.substr(0, 100) + "..."));

        // appending the new tableRow to the exisitng #jSResults table.
        $("#jSResults tbody").append(tableRow);
    }
});