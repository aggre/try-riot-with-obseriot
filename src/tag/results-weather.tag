<results-weather>

  <div if="{ weather }">
    <h1>{ weather.location.city }</h1>
    <ul>
      <li each="{ weather.item.forecast }">{ date } ( { day } ): { text }</li>
    </ul>
  </div>

  <script>
    import store from '../lib/store'
    import obseriot from 'obseriot'

    const weatherListener = state => this.update( { weather: state } )

    this.weather = false

    obseriot.listen( store.weather, weatherListener )

    this.on( 'unmount', () => obseriot.remove( store.weather, weatherListener ) )
  </script>

</results-weather>
