//-------------- Constructor for recipe object
function Recipe(name,ingredients,instructions, value) {
  this.name = name;
  this.ingredients = [];
  this.instructions = instructions;
  this.value = value;
}
//-------------------- recipes created as objects
var mule = new Recipe ("Moscow Mule", "instructions");
mule.ingredients.push("1 1/2 oz. Vodka", "1/2 oz. fresh lime juice", "1/4oz simple syrup", "ginger beer", "lime wedges for garnish");
mule.instructions = "Lightly shake vodka, lime juice, and simple syrup. Add ginger beer and shake. Serve in a copper mug and garnish with lime wedge."

var bloodyMary = new Recipe ("Bloody Mary" , "instructions")
bloodyMary.ingredients.push("4 oz. Sacramento tomato juice" , "2 dashes Worcestershire sauce" , "pinch of celery salt", "Pinch of freshly ground black pepper", "3 dashes Tabasco sauce" , "1 squeeze lemon" , "1 tsp. fresh horseradish" , "2 oz. vodka, preferably Finlandia" , "Olives, for garnish" , "Lemon wedge, for garnish")
bloodyMary.instructions = "Make Spicy Bloody Mary Mix: Combine tomato juice, Worcestershire, celery salt, black pepper, Tabasco, lemon, and horseradish. Vigorously shake vodka and bloody mary mix. Garnish with olives and lemon wedge."

//---------method to list each ingredient within the recipe
Recipe.prototype.displayIngredients = function () {
  this.ingredients.forEach(function(ingredient) {
    var ingredientList = "";
    ingredientList += ingredient;
    console.log(ingredientList);
  });
};

function displayToPage() {

};
