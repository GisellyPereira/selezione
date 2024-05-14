export default class OpenSolutions {
    constructor() {
        this.solutionCards = document.querySelectorAll('.solution-card');
        this.addEventListeners();
    }

    addEventListeners() {
        this.solutionCards.forEach(card => {
            card.addEventListener('click', this.openSolution.bind(this));
        });
    }

    openSolution(event) {
        const card = event.currentTarget;
        const solutionNumber = card.dataset.solution;
        window.location.href = `/openSolution.html?solution=${solutionNumber}`;
    }
}


