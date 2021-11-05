function Pizza() {
  this.toppings = [];
  this.size = '';
}

Pizza.prototype.calcCost = function() {
  let size = 0;
  if (this.size === 'Small') {
    size = 1;
  }
  if (this.size === 'Medium') {
    size = 2;
  }
  if (this.size === 'Large') {
    size = 3;
  }
  return (this.toppings.length * size * 0.25 + size + 5);
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
    newPizza.size = ($("#size").val());
    $("#showOrder").html("Purchase a " + newPizza.size + " pizza with ");
    if (newPizza.toppings.length === 0) {
      $("#showOrder").append("no toppings ");
    }
    else if (newPizza.toppings.length === 1) {
      $("#showOrder").append(newPizza.toppings[0] + " ");
    }
    else {
      for (let i = 0; i < newPizza.toppings.length; i++){
        if (newPizza.toppings.length === i + 1) {
          $("#showOrder").append("and " + newPizza.toppings[i] + " ");
        } else {
          $("#showOrder").append(newPizza.toppings[i] + ", ");
        }
      }
    }
    $("#showOrder").append("for " + newPizza.calcCost() + "$?");
    console.log(newPizza);
  });
});