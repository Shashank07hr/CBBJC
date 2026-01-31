let count = 0;

function increase() {
    count++;
    document.getElementById('count').innerText = count;
}

function decrease() {
    count --;
    document.querySelector('#count').innerText = count;
}

function changebg () {
    let r =Math.trunc( Math.random() * 256);
    let g = Math.trunc(Math.random() * 256);
    let b = Math.trunc(Math.random() * 256);

    const bodybg = document.querySelector('body');
    bodybg.style.cssText = `background-color: rgb(${r} ${g} ${b})`;

    const h2_bg = document.querySelector('#rgb');
    h2_bg.innerHTML = `RGB: (${r} ${g} ${b})`;
}