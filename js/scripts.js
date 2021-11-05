function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}


let newPizza = new Pizza("Cheese", "large");
console.log(newPizza);


$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    event.preventDefault();

  });
});