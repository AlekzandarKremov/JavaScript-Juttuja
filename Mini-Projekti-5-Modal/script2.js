
class Modal {
    constructor(title, text) {
        this.modal = document.querySelector(".js-modal")
       if(title !== undefined) {
        this.modal.querySelector(".js-modal-title").innerText = title
        }
        if(text !== undefined) {
            this.modal.querySelector(".js-modal-text").innerText = text
        }
    }

    open() {
        this.modal.style.display = "initial"
    }
    
    close() {
        this.modal.style.display = "none"
    }
}

const openBtn = document.querySelector(".js-open-modal")
const closeBtn = document.querySelector(".js-close-modal")
const modal = new Modal("ElGato Is Very Cool", "Koktriilo Is Also Very Cool")

openBtn.addEventListener("click", function(event) {
    modal.open()
})

closeBtn.addEventListener("click", function(event) {
    modal.close()
});