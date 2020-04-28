var type = 'confirmed';
window.onload = function () {
    let x = document.getElementById("name");
    x.addEventListener("click", myfun);
    let main_option = document.getElementById("main_option");
    main_option.addEventListener('change',second);
    google.charts.setOnLoadCallback(drawLine('India','US','Italy',type));

    google.charts.setOnLoadCallback(drawPie('India'));


}
var x = 0;
var y = document.getElementById("body");
window.onscroll=function() {
    if (scrollY > 530){
        // console.log("jayesh");
        document.getElementById("name").classList.add("go");
    }
    else{
        document.getElementById("name").classList.remove("go");
    }
};

window.onresize = function(){
    let option1 = document.getElementById("option1");
    var country1 = option1.options[option1.selectedIndex].text;
    let option2 = document.getElementById("option2");
    var country2 = option2.options[option2.selectedIndex].text;
    let option3 = document.getElementById("option3");
    var country3 = option3.options[option3.selectedIndex].text;
    google.charts.setOnLoadCallback(drawLine(country1,country2,country3,type));
    
    var country = main_option.options[main_option.selectedIndex].text;
    google.charts.setOnLoadCallback(drawPie(country));
    console.log(country);
}
function myfun() {
    // let type = 'confirmed';
    let option1 = document.getElementById("option1");
    var country1 = option1.options[option1.selectedIndex].text;
    let option2 = document.getElementById("option2");
    var country2 = option2.options[option2.selectedIndex].text;
    let option3 = document.getElementById("option3");
    var country3 = option3.options[option3.selectedIndex].text;
    var rad = document.myForm.cov;
    for (var i = 0; i < rad.length; i++) {
        rad[i].addEventListener('change', function () {
             type = this.value;
        });
    }
    document.getElementById("demo").innerHTML = 'No. of COVID19 '+type +' Cases ';
    document.getElementById("dem").innerHTML = 'In '+ country1 + ' , ' + country2 + ' , ' + country3;
    google.charts.setOnLoadCallback(drawLine(country1,country2,country3,type));

}   


function second(){
    var country = main_option.options[main_option.selectedIndex].text;
    google.charts.setOnLoadCallback(drawPie(country));
    document.getElementById("nut-title").innerHTML = country + "'s" + ' Total Cases ' +wd[country][0];
}

