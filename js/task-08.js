const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;

    if (email.value === '' || password.value === '') {
        alert("Всі поля повинні бути заповнені");
        return;
    }
   const formData = {
		email,
		password,
	};
    console.table(formData);
    event.currentTarget.reset();
}



