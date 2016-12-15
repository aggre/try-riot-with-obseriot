import actionFetch from './action.fetch'
import obseriot from 'obseriot'
import qs from 'qs'

const endpoint = 'https://query.yahooapis.com/v1/public/yql'

actionFetch.weather = {
  handler: {
    name: 'action_fetch_weather',
    action: ( text = '' ) => {

      let yql = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${ text }")`,
          query = {
            q: yql,
            format: 'json',
            env: 'store://datatables.org/alltableswithkeys'
          },
          queryString = qs.stringify( query )

      fetch( `${ endpoint }?${ queryString }` )
      .then( res => res.json() )
      .then( json => obseriot.notify( actionFetch.weather.done, json ) )
      .catch( e => obseriot.notify( actionFetch.weather.error, e ) )

      return query
    }
  }
}

export default actionFetch.weather
