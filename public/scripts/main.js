import Modal from "./modal.js"

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Marcar pergunta como lida
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    //adiciona o listener
    button.addEventListener("click", handleClick)
})

//Excluir pergunta  
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
    //adiciona o listener
    button.addEventListener("click", (event) => handleClick(event, false))
})

//padrão para abrir Modal
function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    //abre o Modal
    modal.open()
}
