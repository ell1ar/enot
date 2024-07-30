document.addEventListener('DOMContentLoaded', function () {
    var progress = document.getElementById('progress');
    var percentage = document.getElementById('percentage');
    var progressContent = document.getElementById('progressContent');
    var secondContent = document.getElementById('secondContent');
    var loadTime = 5000;
    var interval = 50;
    var progressStep = 100 * interval / loadTime;
    var currentProgress = 0;

    function updateProgress() {
        currentProgress += progressStep;
        if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(progressInterval);
            setTimeout(function () {
                progressContent.style.display = 'none';
                secondContent.style.display = 'block';
            }, 500);
        }
        progress.style.width = currentProgress + '%';
        percentage.textContent = Math.round(currentProgress) + '%';
    }
    
    var progressInterval = setInterval(updateProgress, interval);
});