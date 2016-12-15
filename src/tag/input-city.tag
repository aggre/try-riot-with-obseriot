<input-city>

  <input type="text" onchange="{ search }">

  <script>
    import action from '../lib/action'
    import obseriot from 'obseriot'

    search ( e ) {
      let city = e.target.value
      obseriot.notify( action.fetch.weather, city )
    }
  </script>

</input-city>
