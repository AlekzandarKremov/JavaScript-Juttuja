var nappi = document.getElementById("nappi")
nappi.addEventListener("click", () => {
    var inputArea = document.getElementById('list').value;
    var lista = document.getElementById("lista")
        renderProductList(inputArea)

        function renderProductList(element, index, arr) {
            var li = document.createElement('li');
            li.setAttribute('class','form-control');
            var button = document.createElement('button');
            button.setAttribute('class','btn btn-danger col m-2');
            button.innerHTML = "Poista"
            function removeParent(evt) {
            evt.target.parentNode.remove();
             }
  
             button.addEventListener('click', removeParent, false);

            li.innerHTML=li.innerHTML + element;
            li.appendChild(button)
            lista.appendChild(li);


        }
});

function myFunction() {
    const list = document.getElementById("lista");
    list.removeChild(list.lastElementChild);
  }



