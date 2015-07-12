angular.module('station').controller 'StationModalCtrl', ($scope, $modal, $modalInstance, station, statisticsService, $timeout) ->
  $scope.station = station
  $timeout () ->
    modalWidth = document.getElementsByClassName('modal-body')[0].offsetWidth
    statisticsService.getHistoric(station.number, station.contract_name)
      .then (data) ->
        container = d3.select '#chart'
        statisticsService.drawChart(container, station.number, modalWidth - 100, Math.floor(modalWidth/2), data)
  , 300
  console.log station


  $scope.ok = ->
    $modalInstance.close station
    return

  $scope.cancel = ->
    $modalInstance.dismiss 'cancel'
    return
