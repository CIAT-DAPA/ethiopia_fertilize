function plot(data){
    nv.addGraph(function() {
        var chart = nv.models.lineChart()                      
                      .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!                      
                      .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                      .showYAxis(true)        //Show the y-axis
                      .showXAxis(true)        //Show the x-axis
        ;
      
        chart.xAxis     //Chart x-axis settings
            .axisLabel('N Rate')
            .tickFormat(d3.format('.02f'));
      
        chart.yAxis     //Chart y-axis settings
            .axisLabel('Yield (kg/ha)')
            .tickFormat(d3.format('.02f'));
      
      
        d3.select('#plot svg')    //Select the <svg> element you want to render the chart in.   
            .datum(data)         //Populate the <svg> element with chart data...
            .call(chart);          //Finally, render the chart!
      
        //Update the chart when window resizes.
        nv.utils.windowResize(function() { chart.update() });
        return chart;
      });
}
