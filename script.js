//your JS code here. If required.
let activeCircle = 1;

document.getElementById('next').addEventListener('click', function() {
    if(activeCircle < 5) {
        activeCircle++;
        updateProgressBar();
    }
    checkButtonStatus();
});

document.getElementById('prev').addEventListener('click', function() {
    if(activeCircle > 1) {
        activeCircle--;
        updateProgressBar();
    }
    checkButtonStatus();
});

function updateProgressBar() {
    for(let i=1; i<=5; i++) {
        let circle = document.getElementById('circle-' + i);
        if(i <= activeCircle) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    }
}

function checkButtonStatus() {
    if(activeCircle === 1) {
        document.getElementById('prev').disabled = true;
    } else if(activeCircle === 5) {
        document.getElementById('next').disabled = true;
    } else {
        document.getElementById('prev').disabled = false;
        document.getElementById('next').disabled = false;
    }
}

checkButtonStatus(); // Initial check
