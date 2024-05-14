export default class FormContact {
    constructor() {
        console.log('SelectContact module');
        document.querySelector('.content-form').addEventListener('submit', function(event) {
            event.preventDefault();
            this.style.display = 'none';
            document.getElementById('success-message').style.display = 'block';
        });

    }
}
