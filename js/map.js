
var map = L.map('map').setView([8.9661428,38.6950282], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', function(e){
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    /*jQuery.getJSON('http://websitescraper.herokuapp.com/?url=http://ichart.finance.yahoo.com/table.csv?s=RIL.BO&callback=?', function (csvdata) {
        
        var data =[{
            values: sin,      //values - represents the array of {x,y} data points
            key: 'Sine Wave', //key  - the name of the series.
            color: '#ff7f0e'  //color - optional: choose your own line color.
          },
          {
            values: cos,
            key: 'Cosine Wave',
            color: '#2ca02c'
          }];
        plot();
    });*/
    
});