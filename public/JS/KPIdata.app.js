var KPIdataapp = new Vue({
  el: '#KPIdata',
data: {
  KPI: {
    siteId: '',
    turbineDeployedId: '',
    sensorDeployedId: '',
    dataCollectedDate: '',
    output: '',
    heartRate: '',
    compressorEfficiency: '',
    availability: '',
    reliability: '',
    firedHours: '',
    trips: '',
    starts: '',
}

},
computed: {

  },

  methods: {
    getKPIsdata(){
      fetch('api/kpidata.php')
      .then( response => response.json() )  // "a => expression" is shorthand function declaration
    .then( json => {
      KPIdataapp.KPI = json;
      //  TODO: Build out client chart

    } )
    .catch( err => {
      console.log('KPI data LIST FETCH ERROR:');
      console.log(err);
    })
  },
  },

  created () {

    // Do data fetch
    fetch('api/kpidata.php')
    .then( response => response.json() )
    .then( json => {KPIdataapp.KPI = json} )
    .catch( err => {
      console.error('KPI data FETCH ERROR:');
      console.error(err);
    })
  }
})
