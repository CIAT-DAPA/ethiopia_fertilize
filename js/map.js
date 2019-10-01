
var map = L.map('map').setView([8.9661428,38.6950282], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', function(e){
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    
    var NCOLS = 1824,
        NROWS = 1416,
        XLLCORNER = 32.8999999999999986,
        YLLCORNER = 15.0000000000000000,
        CELLSIZE  = 0.00833333;
    
    var col = parseInt((lng-XLLCORNER)/CELLSIZE) + 1;
    var row = NROWS-parseInt((lat-YLLCORNER)/CELLSIZE);

    var index = parseInt((NCOLS*row)-(NCOLS-col));
    
    
    d3.csv("https://raw.githubusercontent.com/CIAT-DAPA/ethiopia_fertilize/master/data/" + index + ".csv",function(error, data) {
        if (error) {  
              console.log(error);  //Log the error.
        } 
        else {                  
            var rate_optimal = data.filter(function(item){return item.yield == d3.max(data, function(item){ return item.yield;}) });
            $("#rate_optimal").html(d3.format(".2f")(d3.min(rate_optimal, function(item){return item.rate;})));
            var data =[{
                values: data.map(function(item){
                    return{
                        x:item.rate,
                        y:item.yield
                    }
                }),      //values - represents the array of {x,y} data points
                key: 'Yield', //key  - the name of the series.
                color: '#ff7f0e'  //color - optional: choose your own line color.
              },
              {
                values: data.map(function(item){
                    return{
                        x:item.rate,
                        y:item.yield_norm
                    }
                }),      //values - represents the array of {x,y} data points
                key: 'Yield Normalized', //key  - the name of the series.
                color: '#ff440e'  //color - optional: choose your own line color.
              }];
            plot(data);
        }
    });
    
});