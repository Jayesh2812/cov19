window.onload = function(){
  let list = document.getElementById("list");
  list.addEventListener('change',state_details);
  google.charts.setOnLoadCallback(drawRegionsMap);
  google.charts.setOnLoadCallback(drawLine);
  
}
window.onresize = function(){
  google.charts.setOnLoadCallback(drawLine);
  google.charts.setOnLoadCallback(drawRegionsMap);
}
function state_details(){
    var option = list.options[list.selectedIndex].text;
    var c = document.getElementById("c");
    var a = document.getElementById("a");
    var r = document.getElementById("r");
    var d = document.getElementById("d");
    if (option == 'Select the state'){
      c.innerHTML = a.innerHTML =r.innerHTML = d.innerHTML= 'N/A';
    }
  else{
    c.innerHTML = main[option]['confirmed'];
    a.innerHTML = main[option]['active'];
    r.innerHTML = main[option]['recovered'];
    d.innerHTML = main[option]['deaths'];
    }
    // alert(main[option]['confirmed']);
}