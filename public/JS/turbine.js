var turbinetable = new Vue({
  el: '#turbines',
  data: {
      turbine: {
      turbineId: 0,
      turbineName: '',
      siteId: 0,
      siteName: ''
    },
    turbineArr: [ ],
    commentForm: { },

  },

    methods: {
      fetchTurbines() {
        fetch('api/turbine.php')
        .then( response => response.json() )
        .then( json => {
          turbinetable.turbine = json;
        } )
        .catch( err => {
          console.log('CLIENT LIST FETCH ERROR:');
          console.log(err);
        })
      },
      },

      created () {

        // Do data fetch
        fetch('api/client.php')
        .then( response => response.json() )
        .then( json => {turbinetable.client = json} )
        .catch( err => {
          console.error('CLIENT FETCH ERROR:');
          console.error(err);
        })
      }
    });
