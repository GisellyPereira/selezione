export default class Advisors {
    constructor() {
        this.advisors = [];
        this.generateAdvisorNames();
        document.addEventListener('DOMContentLoaded', () => {
            this.renderAdvisors();
        });
    }

    generateAdvisorNames() {
        for (let i = 1; i <= 48; i++) {
            this.advisors.push(`Nome do Assessor`);
        }
    }

    renderAdvisors() {
        const advisorSection = document.querySelector('.advisor-section');
        
        if (advisorSection) {
            this.advisors.map(advisor => {
                const advisorInfo = document.createElement('div');
                advisorInfo.classList.add('advisor-info');

                const advisorImage = document.createElement('img');
                advisorImage.src = "/images/perfil.png";
                advisorImage.classList.add('advisor-image');

                const advisorName = document.createElement('p');
                advisorName.classList.add('advisor-name');
                advisorName.textContent = advisor;

                advisorInfo.appendChild(advisorImage);
                advisorInfo.appendChild(advisorName);

                advisorSection.appendChild(advisorInfo);
            });
        } else {
            console.error('Advisor section not found');
        }
    }
}

function updateSelectedCity(select) {
    var selectedOption = select.options[select.selectedIndex];
    var selectedCity = document.getElementById('selected-city');
    selectedCity.textContent = "CIDADE: " + selectedOption.textContent;
}
