<results-weather>

  <h1>{ weather.location.city }</h1>
  <ul>
    <li each="{ weather.item.forecast }">{ date } ( { day } ): { text }</li>
  </ul>

  <script>
    import store from '../lib/store'
    import obseriot from 'obseriot'

    this.weather = false

    obseriot.listen( store.weather, state => {
      this.update( { weather: state } )
    } )
  </script>

</results-weather>
