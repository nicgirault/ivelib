angular.module 'ivelib', ['maps-api', 'station', 'statistics', 'map']

angular.module 'ivelib'
.controller 'mainCtrl', (distanceService, statisticsService, Map) ->
  map = Map.initialize()
  Map.displayClosestStations 7


  # statisticsService.getHistoric stations[0].number, "Paris", (data) ->
  #   console.log data
  #   container = d3.select '#statistics'
  #   console.log 'b'
  #   statisticsService.drawChart(container, stations[0].number, 600, 400, data)