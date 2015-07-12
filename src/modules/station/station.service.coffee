angular.module 'station'
.factory 'Station', (STATIONS, apiURL, apiKey, CONTRACT_NAME, $http, $q) ->
  sortByDistance = (position) ->
    _.sortBy STATIONS, (station) ->
      x = station.latitude - position.A
      y = station.longitude - position.F
      x*x + y*y

  getStationsToDisplay: (position, limit) ->
    stations = sortByDistance position

    count = 0
    stationsToDisplay = []
    promises = (
      $http.get "#{apiURL}/stations/#{station.number}?contract=#{CONTRACT_NAME}&apiKey=#{apiKey}" for station in stations.slice(0, limit)
    )

    count = 0
    $q.all(promises).then (result) ->
      angular.forEach result, (response) ->
        stationData = response.data
        if stationData.status == 'OPEN' and stationData.available_bikes > 2
          count += 1
        stationData.iconUrl = 'www/img/take-' + Math.ceil(stationData.available_bikes / stationData.bike_stands * 10) + '.png'
        stationData.title = "#{stationData.available_bikes} velo dispo"
        stationsToDisplay.push stationData

      return stationsToDisplay
