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