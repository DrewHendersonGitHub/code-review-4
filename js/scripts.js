function Pizza() {
  this.toppings = [];
  this.size = 0;
}

Pizza.prototype.calcCost = function() {
  console.log(this.size);
  return (this.toppings.length * this.size * 0.25 + this.size + 5);
};

let newPizza = new Pizza();
console.log(newPizza);


$(document).ready(function() {
  $("#toppingForm").submit(function(event) {
    event.preventDefault();
    newPizza.toppings.push($("input#topping").val())
    console.log(newPizza);
  });
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    newPizza.size = parseInt($("#size").val());
    $("#showOrder").html("Your pizza is " + (newPizza.calcCost()) + "$");
    console.log(newPizza);
  });
});