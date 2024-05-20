export default class FormContact {
    constructor() {
      console.log("SelectContact module");
      document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector(".content-form");
       
          form.addEventListener("submit", function (event) {
            event.preventDefault();
            this.style.display = "none";
            document.getElementById("success-message").style.display = "flex";
          });
      
  
        
    })};
  }
