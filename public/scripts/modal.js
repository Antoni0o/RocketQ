export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    //Evento de quando clicar o botão cancelar fecha a modal
    cancelButton.addEventListener("click", close)

    function open() {
        //adicionar classe active no modal-wrapper
        modalWrapper.classList.add('active')
    }
    function close() {
        //remove a class active no modal-wrapper
        modalWrapper.classList.remove('active')
    }

    return {
        open,
        close
    }
}

