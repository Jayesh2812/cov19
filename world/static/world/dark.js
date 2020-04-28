window.onload = function(){
var x = document.getElementById('mode');
x.addEventListener('click', fun);
}
function fun(){
    var b = document.getElementById('body');
    b.classList.toggle('body');

}