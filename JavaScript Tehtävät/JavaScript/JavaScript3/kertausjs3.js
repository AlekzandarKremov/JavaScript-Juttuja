const weekday = ["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("painike").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("paiva").innerHTML = "Tänään on " + day;
}