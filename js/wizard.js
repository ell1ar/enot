// Steps functions and conditions
document.addEventListener('DOMContentLoaded', function () {
    var currentStep = 0;
    var steps = document.querySelectorAll('.wizard-step');
    var stepContents = document.querySelectorAll('.wizard-step-content');
    var lines = document.querySelectorAll('.wizard-line');
    var nextBtn = document.getElementById('nextBtn');
    var bankSelected = false;

    function showStep(step) {
        steps.forEach((stepElement, index) => {
            if (index <= step) {
                stepElement.classList.add('completed');
                if (index < lines.length) {
                    lines[index].classList.add('completed');
                }
            } else {
                stepElement.classList.remove('completed');
                if (index < lines.length) {
                    lines[index].classList.remove('completed');
                }
            }
        });
        stepContents.forEach((content, index) => {
            if (index === step) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        if (step === steps.length - 1) {
            nextBtn.textContent = 'Проверить карту';
        } else if (step === 3) {  // Проверка на четвертый шаг (индекс 3)
            nextBtn.textContent = 'Подписать';
        } else {
            nextBtn.textContent = 'Далее';
        }
        // Проверка для пятого шага (индекс 4)
        if (step === 4) {
            nextBtn.disabled = !bankSelected;
        } else {
            nextBtn.disabled = false;
        }
    }
    nextBtn.addEventListener('click', function () {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });
    showStep(currentStep);

    // Bank selection logic
    var bankItems = document.querySelectorAll('.bank-item');

    bankItems.forEach(function (bankItem) {
        bankItem.addEventListener('click', function () {
            bankItems.forEach(function (item) {
                item.classList.remove('selected', 'error');
            });
            this.classList.add('selected');

            var bankName = this.querySelector('p').textContent.trim();

            if (bankName === 'Тинькофф') {
                this.classList.add('error');
                showTinkoffModal();
                nextBtn.disabled = true;
                bankSelected = false;
            } else {
                nextBtn.disabled = false;
                bankSelected = true;
            }
            // Обновляем кнопку "Далее" в зависимости от выбранного банка
            if (currentStep === 4) {
                nextBtn.disabled = !bankSelected;
            }
        });
    });

    function showTinkoffModal() {
        var modal = document.getElementById('tinkoffModal');
        var closeModal = document.querySelector('.close-modal');
        modal.style.display = 'block';

        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});

// Checkbox logic
document.addEventListener('DOMContentLoaded', function () {
    var mainCheckbox = document.getElementById('mainCheckbox');
    var controlledCheckboxes = document.querySelectorAll('.controlled-checkbox');

    mainCheckbox.addEventListener('change', function () {
        controlledCheckboxes.forEach(function (checkbox) {
            checkbox.checked = mainCheckbox.checked;
        });
    });

    controlledCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (!checkbox.checked) {
                mainCheckbox.checked = false;
            } else {
                var allChecked = Array.from(controlledCheckboxes).every(function (cb) {
                    return cb.checked;
                });
                mainCheckbox.checked = allChecked;
            }
        });
    });
});

// Send SMS logic
document.addEventListener('DOMContentLoaded', function () {
    var requestSmsBtn = document.getElementById('requestSmsBtn');
    var headerText = document.getElementById('headerText');
    var resendText = document.getElementById('resendText');
    var timerElement = document.getElementById('timer');

    requestSmsBtn.addEventListener('click', function () {
        headerText.textContent = 'Введите последние 4 цифры номера входящего звонка';
        resendText.style.display = 'block';
        startTimer(59, timerElement);
    });

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        var countdown = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(countdown);
                display.textContent = "0:00";
            }
        }, 1000);
    }
});

// Search banks
document.addEventListener('DOMContentLoaded', function () {
    var bankSearch = document.getElementById('bankSearch');
    var bankList = document.getElementById('bankList');
    var bankItems = bankList.getElementsByClassName('bank-item');

    bankSearch.addEventListener('input', function () {
        var filter = bankSearch.value.toLowerCase();
        for (var i = 0; i < bankItems.length; i++) {
            var bankName = bankItems[i].getElementsByTagName('p')[0].textContent.toLowerCase();
            if (bankName.includes(filter)) {
                console.log(`Совпадение найдено: ${bankName}`);
                bankItems[i].classList.remove('hidden-important');
            } else {
                bankItems[i].classList.add('hidden-important');
            }
        }
    });
});
