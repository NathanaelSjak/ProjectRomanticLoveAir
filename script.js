function updateTime() {
    const startDate = new Date('2024-07-20T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector('.time').textContent = `We have been dating for ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

function updateQuote() {
    const quotes = [
        "I love you not because of who you are, but because of who I am when I am with you.",
        "To the world you may be one person, but to one person you are the world.",
        "We are shaped and fashioned by what we love.",
        "When we are in love we seem to ourselves quite different from what we were before.",
        "Love in its essence is spiritual fire.",
        "The best thing to hold onto in life is each other.",
        "You come to love not by finding the perfect person, but by seeing an imperfect person perfectly.",
        "Love is when the other person's happiness is more important than your own.",
        "There is only one happiness in this life, to love and be loved.",
        "Love is composed of a single soul inhabiting two bodies."
    ];

    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const quoteIndex = dayOfYear % quotes.length;

    document.querySelector('.quote').textContent = quotes[quoteIndex];
}

function showModal() {
    document.getElementById('letterModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('letterModal').style.display = 'none';
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.querySelector('.hearts').appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

let slideIndex = 0;

function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Hardcoded Journal Entries
const journals = [
    { title: '20th of July 2024', content: 'Our first date!!! and the day become official' },
    { title: '6th of August 2024', content: 'I accompanied you buying things in CP and i had to carry your bags' }
];

function loadJournals() {
    const journalDiv = document.querySelector('.journal');
    journals.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        const title = document.createElement('h3');
        title.textContent = entry.title;
        const content = document.createElement('p');
        content.textContent = entry.content;
        entryDiv.appendChild(title);
        entryDiv.appendChild(content);
        journalDiv.appendChild(entryDiv);
    });
}

setInterval(createHeart, 300);
updateTime();
updateQuote();
loadJournals();
showSlides(slideIndex);
setInterval(updateTime, 1000);
