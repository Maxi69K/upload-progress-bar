// Upload Progress bar
/*
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const elem = document.getElementById('myBar');
const bgImg = document.getElementById('bg-img');
let rootSpeed = getComputedStyle(document.documentElement); // Uzima celu vrednost iz CSS-a, a ovako uzimamo specificnu vrednost rootSpeed.getPropertyValue('--speed');

nextBtn.addEventListener('click', () => location.reload());
bgImg.classList.add('blur');
//document.documentElement.style.setProperty('--speed', '15s');  Ovako setujemo novu vrednost u css --speed

let speed = 2;
let i = 0;

document.documentElement.style.setProperty('--speed', `${speed}s`);

startBtn.addEventListener('click', () => {
    if (i === 0) {
        i = 1;
        let width = 0;
        setInterval(frame, Number(`${speed}0`));

        function frame() {
            if (width >= 100) {
                i = 0;
            } else {
                width++;
                elem.style.width = `${width}%`;
                elem.innerHTML = `${width}%`;
                bgImg.classList.remove('blur');
                bgImg.classList.add('clear');
            }
        }
    }
});
*/


// Upload Progress bar
(function () {
    let progressBar = {
        startBtn: document.getElementById('start-btn'),
        nextBtn: document.getElementById('next-btn'),
        elem: document.getElementById('myBar'),
        bgImg: document.getElementById('bg-img'),
        rootSpeed: getComputedStyle(document.documentElement),
        speed: 2,
        i: 0,
        init: () => {
            progressBar.bgImg.classList.add('blur');
            document.documentElement.style.setProperty('--speed', `${progressBar.speed}s`);
            progressBar.startBtn.addEventListener('click', progressBar.showImg);
            progressBar.nextBtn.addEventListener('click', () => location.reload());
        },
        showImg: () => {
            if (progressBar.i === 0) {
                progressBar.i = 1;
                let width = 0;
                setInterval(frame, Number(`${progressBar.speed}0`));

                function frame() {
                    if (width >= 100) {
                        progressBar.i = 0;
                    } else {
                        width++;
                        progressBar.elem.style.width = `${width}%`;
                        progressBar.elem.innerHTML = `${width}%`;
                        progressBar.bgImg.classList.remove('blur');
                        progressBar.bgImg.classList.add('clear');
                    }
                }
            }
        }
    };
    progressBar.init();
})()