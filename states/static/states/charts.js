
google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.load('current', {'packages':['line']});
  google.charts.load("current", {packages:["corechart"]});
  function drawRegionsMap() {
    var l = []
    var data =new google.visualization.DataTable();
    data.addColumn('string','State');
    data.addColumn('number','Confirmed');
    data.addColumn('number','Deaths');
    for(let i =0 ;i<states.length ;i++){
        let b=[];
        b.push(states[i]);
        b.push(main[states[i]]['confirmed']);
        b.push(main[states[i]]['deaths']);
        l.push(b);
    }
    data.addRows(l);
    var t = 'selection';
    if (window.innerWidth > 740)
    {
        // console.log(t);
        t = 'focus';
    }
    var options = {
        datalessRegionColor: 'white',
        colorAxis:{colors:['orange']},
        region:'IN',
        domain: 'IN',
        resolution: 'provinces',
        defaultColor: 'red',
        // keepAspectRatio: true,
        legend:'none',
        tooltip:{textStyle: {}, showColorCode: true,trigger:t}
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }


  function drawLine(){
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Confirmed');
    data.addColumn('number', 'Recovered');
    data.addColumn('number', 'Deaths');

    data.addRows(tl);

    var options ={ 
      tooltip:{
        isHtml:true
      },
    //   backgroundColor:'black',
      legend:{position: 'none'},
      hAxis:{format:'MMM d YY',title:'30 Jan - Yesterday'},
    //   vAxis:{title:'No of Cases'}
    colors:['red' , 'blue','green']
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));
    chart.draw(data, google.charts.Line.convertOptions(options));
}