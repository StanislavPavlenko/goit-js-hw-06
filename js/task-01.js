const categoryItemEl = document.querySelectorAll(".item");

logItem(categoryItemEl);

function logItem(e) {
    console.log(`Number of categories: ${e.length}`)

    e.forEach((el) => {
    console.log(`Category: ${el.children[0].textContent}`);
	console.log(`Elements: ${el.children[1].childElementCount}`);
})
};
