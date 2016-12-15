import actionFetchWeather from './action.fetch.weather'

actionFetchWeather.error = {
  handler: {
    name: 'action_fetch_weather_error',
    action: error => error
  }
}
