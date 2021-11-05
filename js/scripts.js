function Pizza(topping) {
  this.topping = topping;
}


let newPizza = new Pizza("Cheese")
console.log(newPizza);


$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    event.preventDefault();

  });
});