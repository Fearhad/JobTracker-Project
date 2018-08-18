
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