const mapel = document.querySelector('.mapel');
const lab = document.querySelector('.lab');

const mapelBtn = document.querySelector('.mapel-btn');
const labBtn = document.querySelector('.lab-btn');

mapelBtn.addEventListener('click', ev => {
    ev.target.classList.add('active');
    labBtn.classList.remove('active');
    mapel.classList.remove('hidden');
    lab.classList.add('hidden');
});

labBtn.addEventListener('click', ev => {
    ev.target.classList.add('active');
    mapelBtn.classList.remove('active');
    lab.classList.remove('hidden');
    mapel.classList.add('hidden');
});