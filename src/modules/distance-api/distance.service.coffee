angular.module 'maps-api'
.factory 'distanceService', (MAPS_API_KEY, DISTANCE_API_URL, $http) ->
  service = new google.maps.DistanceMatrixService()

  computeDistances: (origin, velibStations) ->
    velibStations = [
      {
        "number":31705,
        "name":"31705 - CHAMPEAUX (BAGNOLET)",
        "address":"RUE DES CHAMPEAUX (PRES DE LA GARE ROUTIERE) - 93170 BAGNOLET",
        "latitude":48.8645278209514,
        "longitude":2.416170724425901
      },
      {
        "number":10042,
        "name":"10042 - POISSONNIÈRE - ENGHIEN",
        "address":"52 RUE D'ENGHIEN / ANGLE RUE DU FAUBOURG POISSONIERE - 75010 PARIS",
        "latitude":48.87242006305313,
        "longitude":2.348395236282807
      },
      {
        "number":8020,
        "name":"08020 - METRO ROME",
        "address":"74 BOULEVARD DES BATIGNOLLES - 75008 PARIS",
        "latitude":48.882148945631904,
        "longitude":2.319860054774211
      }
    ]

    return null if velibStations.length == 0

    origin = new google.maps.LatLng(48.882599, 2.322190)

    destinations = []
    angular.forEach velibStations, (station) ->
      destinations.push new google.maps.LatLng(station.latitude, station.longitude)

    callback = (result, status) ->
      console.log result
      console.log status
    console.log origin
    # service.getDistanceMatrix
    #   origins: [origin]
    #   destinations: destinations
    #   travelMode: google.maps.TravelMode.WALKING
    # , callback
