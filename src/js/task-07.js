// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const refs = {
    sizeEl: document.querySelector('#font-size-control'),
    span: document.querySelector('#text')
}
console.log(refs.sizeEl)
refs.span.style.fontSize = `${refs.sizeEl.value}px`;

function sizeFontEl() {
    return (refs.span.style.fontSize = `${refs.sizeEl.value}px`);
}

refs.sizeEl.addEventListener('input', sizeFontEl);