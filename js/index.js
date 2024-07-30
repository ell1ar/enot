// Get the slider and display elements
const loanAmountSlider = document.getElementById('loanAmount');
const loanAmountDisplay = document.getElementById('loanAmountDisplay');
// Update the display when the slider value changes
loanAmountSlider.addEventListener('input', () => {
    const currentValue = parseInt(loanAmountSlider.value);
    loanAmountDisplay.textContent = `${currentValue} ₽`;
});
// carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('#nextBtn');
const prevButton = document.querySelector('#prevBtn');

let slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
const initializeCarousel = () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach(setSlidePosition);
    updateButtons();
};

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    updateButtons();
};
const updateButtons = () => {
    const currentSlide = track.querySelector('.current-slide');
    const currentIndex = slides.findIndex(slide => slide === currentSlide);
    
    if (currentIndex === 0) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    if (window.innerWidth <= 768) {
        if (currentIndex >= slides.length - 1) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    } else {
        if (currentIndex >= slides.length - 3) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }
};
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
    }
});
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    }
});
window.addEventListener('load', initializeCarousel);
window.addEventListener('resize', initializeCarousel);
updateButtons();

// Accordeon
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const button = item.querySelector('.accordion-button');
        const content = item.querySelector('.accordion-content');

        header.addEventListener('click', () => {
            const isOpen = button.getAttribute('aria-expanded') === 'true';

            if (isOpen) {
                content.style.maxHeight = null;
                button.setAttribute('aria-expanded', 'false');
                button.textContent = '+';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                button.setAttribute('aria-expanded', 'true');
                button.textContent = '-';
            }
        });
    });
});
