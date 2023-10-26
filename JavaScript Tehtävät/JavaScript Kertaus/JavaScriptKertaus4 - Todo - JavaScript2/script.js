var nappi = document.getElementById("nappi")
nappi.addEventListener("click", () => {
    var inputArea = document.getElementById('list').value;
    var lista = document.getElementById("lista")
        renderProductList(inputArea)

        function renderProductList(element, index, arr) {
            var li = document.createElement('li');
            li.setAttribute('class','form-control');

            lista.appendChild(li);
            li.innerHTML=li.innerHTML + element;
        }
});

function myFunction() {
    const list = document.getElementById("lista");
    list.removeChild(list.lastElementChild);
  }