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

const slideWidthPercentage = 33.33;
const additionalMarginPercentage = 0.5;

const updateButtons = () => {
    const currentSlide = track.querySelector('.current-slide');
    const currentIndex = slides.findIndex(slide => slide === currentSlide);

    prevButton.classList.toggle('disabled', currentIndex === 0);
    nextButton.classList.toggle('disabled', currentIndex >= slides.length - (window.innerWidth <= 768 ? 1 : 3));
};

const moveToSlide = (track, currentSlide, targetSlide) => {
    const slideIndex = parseInt(targetSlide.dataset.index, 10);
    let offset;

    if (window.innerWidth <= 768) {
        offset = slideIndex * 100;
    } else {
        offset = (slideIndex * slideWidthPercentage) + (slideIndex * additionalMarginPercentage);
    }

    track.style.transform = `translateX(-${offset}%)`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    updateButtons();
};

const initializeCarousel = () => {
    slides.forEach((slide, index) => {
        slide.dataset.index = index;
    });
    track.style.width = `${slides.length * 100}%`;
    updateButtons();
};

prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
    }
});

nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    }
});

window.addEventListener('load', initializeCarousel);
window.addEventListener('resize', initializeCarousel);


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
