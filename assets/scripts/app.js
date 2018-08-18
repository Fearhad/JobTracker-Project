var jobLocation = "Wirecutter";
var map = "<img width='600' src='https://maps.googleapis.com/maps/api/staticmap?center=" + jobLocation + "&zoom=8&scale=13&size=600x300&maptype=roadmap&format=png&visual_refresh=true'>"
$(document).ready(function() {
$("#googleMap").append(map);
console.log(map)
});

