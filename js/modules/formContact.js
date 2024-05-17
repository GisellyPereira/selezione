export default class FormContact {
    constructor() {
      console.log("SelectContact module");
      document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector(".content-form");
        if (form) {
          form.addEventListener("submit", function (event) {
            event.preventDefault();
            this.style.display = "none";
            document.getElementById("success-message").style.display = "block";
          });
        }
  
        const formModal = document.querySelector(".content-form-modal");
        if (formModal) {
          formModal.addEventListener("submit", function (event) {
            event.preventDefault();
            this.style.display = "none";
            document.getElementById("success-message-modal").style.display = "block";
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
  
      document
        .getElementById("modal-overlay")
        .addEventListener("click", function (event) {
          if (event.target === this) {
            closeModal();
          }
        });
  
      document
        .getElementById("close-modal-button")
        .addEventListener("click", closeModal);
  
      document.querySelectorAll(".open-modal-button").forEach(button => {
          button.addEventListener("click", openModal);
      });
    }
  }
