angular.module('ivelib', []);

angular.module('ivelib').controller('mapCtrl', function() {
  var initialize;
  initialize = function() {
    var map, mapCanvas, mapOptions;
    mapCanvas = document.getElementById('map-canvas');
    mapOptions = {
      center: new google.maps.LatLng(48.882599, 2.322190),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    return map = new google.maps.Map(mapCanvas, mapOptions);
  };
  return initialize();
});
