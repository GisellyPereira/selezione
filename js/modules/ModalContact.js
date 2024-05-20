export default class ModalContact {
    constructor() {
        console.log("ModalContact module");
        document.addEventListener("DOMContentLoaded", () => {
            const formModal = document.querySelector(".content-form-modal");
            if (formModal) {
                formModal.addEventListener("submit", function (event) {
                    event.preventDefault();
                    this.style.display = "none";
                    document.getElementById("success-message-modal").style.display = "flex";
                });
            }
        });
  
        function openModal() {
            document.getElementById("modal-overlay").classList.add("show");
            document.body.classList.add("no-scroll");
        }
  
        function closeModal() {
            document.getElementById("modal-overlay").classList.remove("show");
            document.body.classList.remove("no-scroll");
        }
  
        document.getElementById("modal-overlay").addEventListener("click", function (event) {
            if (event.target === this) {
                closeModal();
            }
        });
  
        document.getElementById("close-modal-button").addEventListener("click", closeModal);
  
        document.querySelectorAll(".open-modal-button").forEach(button => {
            button.addEventListener("click", openModal);
        });
    }
  }
  