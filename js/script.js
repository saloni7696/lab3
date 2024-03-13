// Hamburger constructor function
function Hamburger(bun, cheese, sauce, toppings, patties, extras) {
    this.bun = bun;
    this.cheese = cheese;
    this.sauce = sauce;
    this.toppings = toppings;
    this.patties = patties;
    this.extras = extras;
    this.order = function () {
        let orderDetails = `Your order is ready! You've selected a ${this.bun} bun, with ${this.cheese} cheese, ${this.sauce} sauce, your toppings are ${this.toppings.join(", ")}, ${this.patties} patty, and extras : ${this.extras.join(", ")}.`;
        document.getElementById('ss1').textContent = orderDetails;
    };
}

// new Hamburger object
let hamburgerobj = new Hamburger("garlic", "cheddar", "siracha", ["olives", "bacon"], 2, ["pickles", "jalopenos"]);

// Displaying the order message
hamburgerobj.order();
