/**
 * Created by ryarborough on 9/20/16.
 */

// define diner array to cache list of diners
var diners = [];
// create list of Diners
var bobs_diner = new Diner("Bobs Diner", "Cheese Burgers", "", 0.5);
var lucys_diner = new Diner("Lucys Diner", "Hamburgers", "", 10);
var special_diner = new Diner("Special Diner", "Apple Pie", "", 8);

// create a diner object
function Diner(name, dishes, addDishes, calcTax) {
	this.name = name;
	this.dishes = dishes;
	this.addDishes = addDishes;
	this.calcTax = calcTax;
}


// create a bill object
function Bill(totalDinertab) {
	diners.push(bobs_diner, lucys_diner, special_diner);
	this.totalDinertab = totalDinertab;
	this.total = total;


}


// utility functions
function addDishes(add, dish) {
	if (){

	}
	this.add = function () {
		return dish;
	}
}

function calcTax(tax) {
	console.log(tax);
}

function totalDinertab() {
	console.log(tab)
}

function total() {
	console.log()
}


