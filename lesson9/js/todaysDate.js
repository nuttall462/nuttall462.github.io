try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }

var d = new Date();
var x = d.getDay();

if (x==5){
  document.getElementById("pancakes").style.display = "block";
}
else {
  document.getElementById("pancakes").style.display = "none";
}