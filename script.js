const form = document.getElementById('classificationForm');
const classificationResult = document.getElementById('classificationResult');
const nameResult = document.getElementById('nameResult');
const xpResult = document.getElementById('xpResult');
const classification = document.getElementById('classification');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const xp = document.getElementById('xp').value;

    classificationResult.style.display = 'block';
    nameResult.innerHTML = name;
    xpResult.innerHTML = xp;

    if (xp <= 1000) {
        classification.innerHTML = 'Ferro';
    } else if (xp <= 2000) {
        classification.innerHTML = 'Bronze';
    } else if (xp <= 5000) {
        classification.innerHTML = 'Prata';
    } else if (xp <= 7000) {
        classification.innerHTML = 'Ouro';
    } else if (xp <= 8000) {
        classification.innerHTML = 'Platina';
    } else if (xp <= 9000) {
        classification.innerHTML = 'Ascendente';
    } else if (xp <= 10000) {
        classification.innerHTML = 'Imortal';
    } else {
        classification.innerHTML = 'Radiante';
    }
});
