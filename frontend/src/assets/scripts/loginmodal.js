const btnAbrirModal = document.querySelector(".login-btn");
const btnCerrarModal = document.querySelector(".close-btn");
const btnCerrarModal2 = document.querySelector(".close-btn2");
const modal = document.querySelector("#login-modal");

btnAbrirModal.addEventListener("click", () => {
    modal.showModal();
})

btnCerrarModal.addEventListener("click", () => {
    modal.close();
})


btnCerrarModal2.addEventListener("click", () => {
    modal.close();
})