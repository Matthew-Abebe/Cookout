const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

const foods = [hamburger, zucchini, chickenBreast, corn, steak];

const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (let i = 0; i < foods.length; i ++) {
    console.log(foods[i]);
    grill(foods[i]);
}
console.log(grill(foods));
function grill (currentObject) {
	currentObject.cooked = true;
    cookedFood.push(currentObject)
    console.log(currentObject)
}
grill("taco");
console.log(cookedFood)
