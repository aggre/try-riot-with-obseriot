import actionFetchWeather from './action.fetch.weather'

actionFetchWeather.done = {
  handler: {
    name: 'action_fetch_weather_done',
    action: json => json.query.results
  }
}
