angular.module 'map'
.factory 'Map', (Station) ->
  map = null

  getCenterPosition = ->
    # TODO: geolocalize
    new google.maps.LatLng(48.882599, 2.322190)

  initialize: ->
    mapCanvas = document.getElementById 'map-canvas'
    mapOptions =
      center: getCenterPosition()
      zoom: 16
      mapTypeId: google.maps.MapTypeId.ROADMAP

    map = new google.maps.Map mapCanvas, mapOptions

    parisBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(48.750999, 2.021247),
      new google.maps.LatLng(48.950481, 2.542754)
    )

    # Create the search box and link it to the UI element.
    input = document.getElementById('pac-input')
    map.controls[google.maps.ControlPosition.TOP_LEFT].push input
    searchBox = new google.maps.places.SearchBox input
    # Listen for the event fired when the user selects an item from the
    # pick list. Retrieve the matching places for that item.
    google.maps.event.addListener searchBox, 'places_changed', ->
      places = searchBox.getPlaces()
      if places.length == 0
        return
      console.log 'yoyo'

    new google.maps.Marker
      position: getCenterPosition()
      map: map
      title: 'Your position'
    map

  displayClosestStations: (limit) ->
    stations = Station.sortByDistance getCenterPosition()

    index = 0
    while index < limit
      new google.maps.Marker
        position: new google.maps.LatLng(stations[index].latitude, stations[index].longitude)
        map: map
        title: stations[index].address
      index += 1
