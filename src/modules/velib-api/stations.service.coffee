angular.module 'velib-api'
.factory 'stationsService', (STATIONS) ->
  sortByDistance: (position) ->
    _.sortBy STATIONS, (station) ->
      x = station.latitude - position.A
      y = station.longitude - position.F
      x*x + y*y
  getClosestStations: (position, limit) ->
    console.log STATIONS.length
    # angular.forEach STATIONS, (station) ->
    #   console.log station.longitude
