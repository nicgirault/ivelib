angular.module 'ivelib', ['maps-api', 'velib-api']

angular.module 'ivelib'
.controller 'mapCtrl', (distanceService, stationsService) ->
  position = new google.maps.LatLng(48.882599, 2.322190)
  initialize = ->
    mapCanvas = document.getElementById 'map-canvas'
    mapOptions =
      center: position
      zoom: 16
      mapTypeId: google.maps.MapTypeId.ROADMAP
    map = new google.maps.Map mapCanvas, mapOptions
    map
  map = initialize()
  stations = stationsService.sortByDistance(position)

  new google.maps.Marker
    position: position
    map: map
    title: 'HERE!!!'

  new google.maps.Marker
    position: new google.maps.LatLng(stations[0].latitude, stations[0].longitude)
    map: map
    title: '1'
  new google.maps.Marker
    position: new google.maps.LatLng(stations[1].latitude, stations[1].longitude)
    map: map
    title: '2'
  new google.maps.Marker
    position: new google.maps.LatLng(stations[2].latitude, stations[2].longitude)
    map: map
    title: '3'

  console.log stations[0]
  console.log stations[1]
  console.log stations[2]
  stationsService.getClosestStations()
