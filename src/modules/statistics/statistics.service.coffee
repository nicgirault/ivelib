angular.module 'statistics'
.factory 'statisticsService', (STATISTICS_API_URL, $http) ->
  getHistoric: (station_id, contract_name, callback) ->
    $http.get  "#{STATISTICS_API_URL}/station/#{contract_name}/#{station_id}"
      .then (response) ->
        callback response.data.data
  drawChart: (container, station_id, width, height, data) ->
    console.log container
    console.log data
    margin =
      top: 20
      right: 20
      bottom: 30
      left: 50
    width = width - (margin.left) - (margin.right)
    height = height - (margin.top) - (margin.bottom)

    x = d3.time.scale().range([0, width])
    y = d3.scale.linear().range([height, 0])
    xAxis = d3.svg.axis().scale(x).ticks(d3.time.minute, 30).tickFormat(d3.time.format('%H:%M')).orient('bottom')
    yAxis = d3.svg.axis().scale(y).orient('left')

    line = d3.svg.line()
      .x (d) -> x new Date d.last_update
      .y (d) -> y d.available_bikes

    maxLine = d3.svg.line()
      .x (d) -> x new Date d.last_update
      .y (d) -> y d.available_bike_stands + d.available_bikes

    svg = container
      .append 'svg'
      .attr 'id', 'station-'+station_id
      .attr 'width', width + margin.left + margin.right
      .attr 'height', height + margin.top + margin.bottom
      .append 'g'
      .attr 'transform', 'translate(' + margin.left + ',' + margin.top + ')'
    x.domain d3.extent data, (d) -> new Date d.last_update
    y.domain [0, data[0].bike_stands]

    svg.append 'g'
      .attr 'class', 'x axis'
      .attr 'transform', 'translate(0,' + height + ')'
      .call xAxis
    svg.append 'g'
      .attr 'class', 'y axis'
      .call yAxis
    svg.append 'path'
      .datum data
      .attr 'class', 'line'
      .attr 'd', line
    svg.append 'path'
      .datum data
      .attr 'class', 'max-line'
      .attr 'd', maxLine
