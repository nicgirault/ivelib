angular.module 'ivelib', ['maps-api', 'station', 'statistics', 'map', 'ui.bootstrap', 'itinerary']

angular.module 'ivelib'
.controller 'mainCtrl', (Map, $scope, State) ->
  navigator.geolocation.getCurrentPosition(Map.initialize, Map.initialize)
  $scope.state = State.getState()

  $scope.$on 'state-update', ->
    $scope.state = State.getState()

  # map = Map.initialize()


  # statisticsService.getHistoric stations[0].number, "Paris", (data) ->
  #   console.log data
  #   container = d3.select '#statistics'
  #   console.log 'b'
  #   statisticsService.drawChart(container, stations[0].number, 600, 400, data)
