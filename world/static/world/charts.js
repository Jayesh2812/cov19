function line_info(c1,c2,c3,t){
    var l = [];
    for (let i = 0 ; i<dates.length;i++ ){
        let b =[];
        b.push(new Date (dates[i]));
        b.push(data[c1][t][i]);
        b.push(data[c2][t][i]);
        b.push(data[c3][t][i]);
        l.push(b);
    }
    return l;
}


google.charts.load('current', {'packages':['line']});
google.charts.load("current", {packages:["corechart"]});
function drawLine(c1,c2,c3,t){
    l = line_info(c1,c2,c3,t);
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Days');
    data.addColumn('number', c1);
    data.addColumn('number', c2);
    data.addColumn('number', c3);

    data.addRows(l);

    var options ={ 
      tooltip:{
        isHtml:true
      },

      legend:{position: 'none'},
      colors:['red','blue','green'],
      hAxis:{format:'MMM d' ,title:"30 January to Yesterday"},
      vAxis:{title:'No of Cases'}
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));
    chart.draw(data, google.charts.Line.convertOptions(options));
}

google.charts.load('current', {'packages':['corechart']});

function drawPie(country) {
  var data = google.visualization.arrayToDataTable([
    ['Type', 'No. of Cases'],
    ['Recovered'+' - ' +wd[country][2].toString(),    wd[country][2]],
    ['Deaths'+' - ' +wd[country][1].toString(),      wd[country][1]],
    ['Active'+' - ' +(wd[country][0] - wd[country][2] -wd[country][1]).toString(),  wd[country][0] - wd[country][2] -wd[country][1]],
  ]);

  var options = {
    pieHole: 0.4,
    legend:{position:'none'},
    tooltip:{trigger:'selection'},
    colors:['red','blue','green'],
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}