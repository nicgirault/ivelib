angular.module 'station'
.factory 'Station', (STATIONS) ->
  sortByDistance: (position) ->
    _.sortBy STATIONS, (station) ->
      x = station.latitude - position.A
      y = station.longitude - position.F
      x*x + y*y
