const refs = {
	input: document.querySelector("#validation-input")
};

function validInput() {
     refs.input.value.length === Number(refs.input.dataset.length)
    ? (refs.input.classList = "valid")
    : (refs.input.classList = "invalid");
}

refs.input.addEventListener("blur", validInput);
