document.querySelectorAll('.picture-container').forEach((el, i) => {
    el.id = `pic${(i + 1).toString()}`;
});

document.querySelectorAll('.picture-info-container').forEach((el, i) => {
    el.id = `img${(i + 1).toString()}`;
});

document.querySelectorAll('.close-button').forEach((el, i) => {
    el.id = `close${(i + 1).toString()}`;
});

const blurElement = document.getElementById('blur');

const pic = {};

const img = {};

const clb = {};

for (let i = 1; i <= 33; i++) {
    pic[`${i}`] = document.getElementById(`pic${i}`);
    img[`${i}`] = document.getElementById(`img${i}`);
    clb[`${i}`] = document.getElementById(`close${i}`);
}

function expand(n) {
    img[n].style.opacity = '1';
    img[n].style.visibility = 'visible';
    blurElement.style.opacity = '1';
}

function close(n) {
    img[n].style.opacity = '0';
    img[n].style.visibility = 'hidden';
    blurElement.style.opacity = '0';
}

for (let i = 1; i <= 33; i++) {
    pic[i].addEventListener('click', () => expand(i));
    clb[i].addEventListener('click', () => close(i));
}