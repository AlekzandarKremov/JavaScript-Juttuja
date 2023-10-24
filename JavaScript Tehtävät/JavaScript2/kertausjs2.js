const weekday = ["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"];

                const d = new Date();
                let day = weekday[d.getDay()];
                document.getElementById("text").innerHTML = "Tänään On " + day;