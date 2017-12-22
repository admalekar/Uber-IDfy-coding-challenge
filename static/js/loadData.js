
$(window).load(function initMap() {
  
  
  // Construct the query string
  url = 'https://data.sfgov.org/resource/6a9r-agq8.json?&$$app_token=lRghIp3d7HLYYPhnO7Tvz81R0';

  // Intialize map
  var center = new google.maps.LatLng(37.7749, -122.4194);
  var mapOptions = {
    zoom: 12,
    center: center
  }
  
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Retrieve data and plot it
  $.getJSON(url, function (data, textstatus) {
    console.log(data);
    $.each(data, function (i, entry) {

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(entry.latitude,
          entry.longitude),
        map: map,
        title: "click for more details",

      });

    });

  });

});

