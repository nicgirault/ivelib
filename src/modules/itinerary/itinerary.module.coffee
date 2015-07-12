angular.module 'itinerary', []

angular.module 'itinerary'
.factory 'State', ($rootScope) ->
  state = 1
  getState: -> state
  setState: (value) ->
    state = value
    $rootScope.$broadcast 'state-update'

.factory 'Itinerary', ->
  map = null
  itinerarySteps =
    currentPosition: null
    originVelibStation: null
    destinationVelibStation: null
    destionation: null
  setMap: (value) ->
    console.log map
    map = value
  setCurrentPosition: (value) ->
    itinerarySteps.currentPosition = value
  setOriginVelibStation: (value) ->
    itinerarySteps.originVelibStation = value
  setDestinationVelibStation: (value) ->
    itinerarySteps.destinationVelibStation = value
  setDestination: (value) ->
    itinerarySteps.destionation = value
  computeItinerary: ->
    directionsService = new google.maps.DirectionsService()
    directionsDisplay = new google.maps.DirectionsRenderer()
    directionsDisplay.setMap(map)

    start = itinerarySteps.currentPosition
    end = itinerarySteps.destionation.geometry.location
    request =
      origin: start
      destination: end
      travelMode: google.maps.TravelMode.DRIVING
    directionsService.route request, (result, status) ->
      if status == google.maps.DirectionsStatus.OK
        directionsDisplay.setDirections result

    # console.log 'computing itinerary'
