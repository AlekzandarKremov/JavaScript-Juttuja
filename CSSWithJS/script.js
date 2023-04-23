// Haetaan syötekentät
const bgInput = document.querySelector('#bg-color');
const textInput = document.querySelector('#text-color');
const submitBtn = document.querySelector('#submit-btn');

// Asetetaan tapahtumankuuntelijat painikkeelle
submitBtn.addEventListener('click', function() {
  // Haetaan syötteet
  const bgColor = bgInput.value;
  const textColor = textInput.value;

  // Asetetaan taustaväri ja tekstin väri
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
});
