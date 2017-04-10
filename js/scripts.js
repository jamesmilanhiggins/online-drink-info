var randomNumberGenerator = function() {
  return Math.floor(Math.random() *3 + 1)
};
function RecipeBook (recipes) {
  this.recipes = [];
};

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
mule.value = 1;

var bloodyMary = new Recipe ("Bloody Mary" , "instructions")
bloodyMary.ingredients.push("4 oz. Sacramento tomato juice" , "2 dashes Worcestershire sauce" , "pinch of celery salt", "Pinch of freshly ground black pepper", "3 dashes Tabasco sauce" , "1 squeeze lemon" , "1 tsp. fresh horseradish" , "2 oz. vodka, preferably Finlandia" , "Olives, for garnish" , "Lemon wedge, for garnish")
bloodyMary.instructions = "Make Spicy Bloody Mary Mix: Combine tomato juice, Worcestershire, celery salt, black pepper, Tabasco, lemon, and horseradish. Vigorously shake vodka and bloody mary mix. Garnish with olives and lemon wedge."
bloodyMary.value = 2;

var newRecipeBook = new RecipeBook ();
newRecipeBook.recipes.push(mule, bloodyMary);

//---------method to list each ingredient within the recipe
Recipe.prototype.displayIngredients = function () {
  this.ingredients.forEach(function(ingredient) {
    var ingredientList = "";
    ingredientList += ingredient;
    console.log(ingredientList);
  });
};

$(document).ready(function(){

  $("#random-number-button").click(function(){
    var randomNumber = randomNumberGenerator();



    newRecipeBook.recipes.forEach(function(recipe){
      var recipeValue = recipe.value;
    if (randomNumber === recipeValue) {
      $(".display").text(recipe.name);
    } else {
         alert("3");
       };
    });
  });
});
