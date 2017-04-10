function Recipe(name,ingredients,instructions) {
  this.name = name;
  this.ingredients = [];
  this.instructions = instructions;
}

var bloodyMary = new Recipe ("Moscow Mule", "Lightly shake vodka, lime juice, and simple syrup. Add ginger beer and shake. Serve in a copper mug and garnish with lime wedge.");
bloodyMary.ingredients.push("1 1/2 oz. Vodka", "1/2 oz. fresh lime juice", "1/4oz simple syrup", "ginger beer", "lime wedges for garnish");





var display = function(){
  Recipe.ingredients.forEach(function(ingredient) {
  var display_ingredient = "";
   display_ingredient += ingredient;
   console.log(display_ingredient)
});
};
