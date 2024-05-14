export default class FormContact {
    constructor() {
        console.log('SelectContact module');
        
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOM fully loaded and parsed');
            
            const form = document.querySelector('.content-form');
            if (form) {
                form.addEventListener('submit', function(event) {
                    event.preventDefault();
                    console.log('Form submitted');
                    this.style.display = 'none';
                    const successMessage = document.getElementById('success-message');
                    if (successMessage) {
                        successMessage.style.display = 'block';
                        console.log('Success message displayed');
                    } else {
                        console.error('Success message element not found');
                    }
                });
            } else {
                console.error('Form not found');
            }
        });
    }
}
