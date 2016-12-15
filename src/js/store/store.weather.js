import store from './store'
import action from '../../lib/action'
import obseriot from 'obseriot'

store.weather = {
  state: {},
  handler: {
    name: 'store_weather',
    action: () => store.weather.state
  }
}

obseriot.listen( action.fetch.weather.done, results => {
  store.weather.state = results.channel
  obseriot.notify( store.weather )
} )
