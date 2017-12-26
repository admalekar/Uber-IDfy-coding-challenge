$(window).load(function initMap() {
  
  
  // Construct the query string
  url = 'https://data.sfgov.org/resource/6a9r-agq8.json?&$$app_token=lRghIp3d7HLYYPhnO7Tvz81R0';

var foodtruckicon = 'static/images/foodtruck.png';
  // Intialize map
  var center = new google.maps.LatLng(37.7749, -122.4194);
  var mapOptions = {
    zoom: 12,
    center: center
  }
  
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  

var infowindow = new google.maps.InfoWindow();

  // Retrieve data and plot it
  $.getJSON(url, function (data, textstatus) {
    console.log(data);
    $.each(data, function (i, entry) {

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(entry.latitude,
          entry.longitude),
        map: map,
        title: "click for more details",
        icon: foodtruckicon

      });
       google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent('<div><strong>' + entry.applicant + '</strong><br>' +
                'Address: ' + entry.locationdescription + '</div>');
    infowindow.open(map, this);
  });

    });

  });

});
