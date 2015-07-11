angular.module 'ivelib', []

angular.module('ivelib').controller 'mapCtrl', ->
  initialize = ->
    mapCanvas = document.getElementById 'map-canvas'
    mapOptions =
      center: new google.maps.LatLng(48.882599, 2.322190)
      zoom: 16
      mapTypeId: google.maps.MapTypeId.ROADMAP
    map = new google.maps.Map mapCanvas, mapOptions

  initialize()
