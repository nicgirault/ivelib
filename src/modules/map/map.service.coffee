angular.module 'map'
.factory 'Map', (Station, $modal) ->
  map = null

  getCenterPosition = (position) ->
    longitude = position.coords?.longitude
    latitude = position.coords?.latitude
    if longitude? and latitude?
      return new google.maps.LatLng(latitude, longitude)
    else
      return new google.maps.LatLng(48.882599, 2.322190)

  displayClosestStations = (position, limit) ->
    bounds = new google.maps.LatLngBounds()

    Station.getStationsToDisplay(position, limit).then (stations) ->
      for station in stations
        position = new google.maps.LatLng(station.position.lat, station.position.lng)
        marker = new google.maps.Marker({
          position: position
          map: map
          title: station.title
          icon: station.iconUrl
        })
        bounds.extend position

        google.maps.event.addListener marker, 'click', onStationClickFactory(station)
      return bounds

  onStationClickFactory = (station) ->
    ->
      modalInstance = $modal.open
        templateUrl: 'www/templates/stationModal.html'
        size: 'lg'
        controller: 'StationModalCtrl'
        resolve: station: -> station

  initialize: (position) ->
    center = getCenterPosition(position)
    mapCanvas = document.getElementById 'map-canvas'
    mapOptions =
      center: center
      zoom: 16
      disableDefaultUI: true
      mapTypeId: google.maps.MapTypeId.ROADMAP

    map = new google.maps.Map mapCanvas, mapOptions

    # Create the search box and link it to the UI element.
    parisBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(48.750999, 2.021247),
      new google.maps.LatLng(48.950481, 2.542754)
    )

    input = document.getElementById('pac-input')
    map.controls[google.maps.ControlPosition.TOP_LEFT].push input
    searchBox = new google.maps.places.SearchBox input
    searchBox.setBounds parisBounds

    # Listen for the event fired when the user selects an item from the
    # pick list. Retrieve the matching places for that item.
    google.maps.event.addListener searchBox, 'places_changed', ->
      places = searchBox.getPlaces()
      if places.length == 0
        return

      destination = places[0]

      marker = new google.maps.Marker({
        map: map,
        title: destination.name,
        position: destination.geometry.location
      })
      displayClosestStations(destination.geometry.location, 10).then (bounds) ->
        bounds.extend destination.geometry.location
        map.fitBounds bounds

    new google.maps.Marker
      position: center
      map: map
      title: 'Your position'

    displayClosestStations(center, 10).then (bounds) ->
      bounds.extend center
      map.panToBounds bounds
    map
