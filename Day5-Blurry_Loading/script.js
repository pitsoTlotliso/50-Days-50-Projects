const loadText =  document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    
    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    // Keep the percentage text sharp and visible
    loadText.style.opacity = 1;
    // Increase blur as the percentage increases (0 -> 30px)
    bg.style.filter = `blur(${scale(load, 0, 100, 0, 30)}px)`;

}    
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}