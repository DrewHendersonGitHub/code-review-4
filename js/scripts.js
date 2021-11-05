function Pizza(topping, size) {
  this.toppings = topping;
  this.size = size;
}

Pizza.prototype.calcCost = function() {
  return this.toppings.length * 3;
};

let newPizza = new Pizza(['Cheese', 'Pepperoni'], 'large');
console.log(newPizza.calcCost());
console.log(newPizza);


$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    newPizza.toppings.push($("input#topping").val())
    console.log(newPizza);
  });
});