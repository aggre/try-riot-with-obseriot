<input-city>

  <input type="text" onchange="{ search }" placeholder="city...">

  <script>
    import action from '../lib/action'
    import obseriot from 'obseriot'

    search ( e ) {
      let city = e.target.value
      obseriot.notify( action.fetch.weather, city )
    }
  </script>

  <style>
    input {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      box-sizing: border-box;
    }
  </style>

</input-city>
