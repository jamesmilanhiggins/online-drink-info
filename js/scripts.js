//---------Back End Logic
//--------------- Constructor for recipe book object
function RecipeBook (recipes) {
  this.recipes = [];
};

//-------------- Constructor for recipe object
function Recipe(name,ingredients,instructions, value, img, type) {
  this.name = name;
  this.ingredients = [];
  this.instructions = instructions;
  this.type = type;
  this.value = value;
  this.img = img;
  this.type = type;
}


//-------------------- recipes created as objects
var mule = new Recipe ("Moscow Mule", "instructions");
mule.ingredients.push("1 1/2 oz. Vodka", "1/2 oz. fresh lime juice", "1/4oz simple syrup", "ginger beer", "lime wedges for garnish");
mule.instructions = "Lightly shake vodka, lime juice, and simple syrup. Add ginger beer and shake. Serve in a copper mug and garnish with lime wedge."
mule.value = 1;
mule.img = "img/vodka/moscow-mule.png";
mule.type = "Vodka"


var bloodyMary = new Recipe ("Bloody Mary" , "instructions");
bloodyMary.ingredients.push("4 oz. Sacramento tomato juice" , "2 dashes Worcestershire sauce" , "pinch of celery salt", "Pinch of freshly ground black pepper", "3 dashes Tabasco sauce" , "1 squeeze lemon" , "1 tsp. fresh horseradish" , "2 oz. vodka, preferably Finlandia" , "Olives, for garnish" , "Lemon wedge, for garnish");
bloodyMary.instructions = "Make Spicy Bloody Mary Mix: Combine tomato juice, Worcestershire, celery salt, black pepper, Tabasco, lemon, and horseradish. Vigorously shake vodka and bloody mary mix. Garnish with olives and lemon wedge."
bloodyMary.value = 2;
bloodyMary.img = "img/vodka/bloody-mary.png";
bloodyMary.type = "Vodka"


var screwDriver = new Recipe ("Screwdriver" , "instructions");
screwDriver.ingredients.push("1 1/2 oz. Smirnoff Orange Vodka" , "3 oz. orange juice");
screwDriver.instructions = "Fill glass with ice. Add Smirnoff Orange Flavored Vodka and orange juice. Stir well. Garnish with orange slice.";
screwDriver.value = 3;
screwDriver.img = "img/vodka/screw-driver.png";
screwDriver.type = "Vodka"


var vodkaMartini = new Recipe ("Vodka Martini" , "instructions");
vodkaMartini.ingredients.push("3 fluid ounces vodka", "1 cup ice cubes", "3 olives", "1 fluid ounce dry vermouth");
vodkaMartini.instructions = "Combine vodka and dry vermouth in a cocktail mixing glass. Fill with ice and stir until chilled. Strain into a chilled martini glass. Garnish with three olives on a toothpick.";
vodkaMartini.value = 4;
vodkaMartini.img = "img/vodka/vodka-martini.png";
vodkaMartini.type = "Vodka"


var cosmo = new Recipe ("Cosmopolitan" , "instructions");
cosmo.ingredients.push("1 3/4 oz. lemon vodka", "preferably Crop Meyer Lemon Vodka", "1/2 oz. Cointreau."," 1/2 oz. cranberry juice", "1/2 oz. lime juice", "1/4 oz. simple syrup", "Lime wedge, for garnish.");
cosmo.instructions = "Shake vodka, Cointreau, cranberry juice, lime juice, and simple syrup. Pour over a coupe. Garnish with lime wedge.";
cosmo.value = 5;
cosmo.img = "img/vodka/cosmo.png";
cosmo.type = "Vodka"


var hotToddy = new Recipe ("Hot Toddy" , "instructions");
hotToddy.ingredients.push("1 cinnamon stick", "1 slice lemon", "1 pinch ground nutmeg", "1 teaspoon honey", "2 fluid ounces boiling water", "1 1/2 fluid ounces whiskey.");
hotToddy.instructions = "Pour the honey, boiling water, and whiskey into a mug. Spice it with the cloves and cinnamon, and put in the slice of lemon. Let the mixture stand for 5 minutes so the flavors can mingle, then sprinkle with a pinch of nutmeg before serving.";
hotToddy.value = 6;
hotToddy.img = "img/whiskey/hot-toddy.png";
hotToddy.type = "Whiskey";

var oldFashioned = new Recipe ("Old Fashioned" , "instructions");
oldFashioned.ingredients.push("Sugar cube", "1 teaspoon water", "1 dash bitters", "2 fluid ounces whiskey (rye or bourbon)", "1 lemon twist", "Ice cubes", "1 orange slice", "for garnish", "1 maraschino cherry, for garnish.");
oldFashioned.instructions = "Muddle sugar cube, water, and bitters in an old fashioned glass for 1 minute. Pour in whiskey and stir for an additional minute. Squeeze the lemon twist over the glass and drop it in. Add ice cubes. Garnish with a slice of orange and a maraschino cherry; serve with a swizzle stick.";
oldFashioned.value = 7;
oldFashioned.img = "img/whiskey/old-fashioned.png";
oldFashioned.type = "Whiskey";

var irishCoffee = new Recipe ("Irish Coffee" , "instructions");
irishCoffee.ingredients.push("1 (1.5 fluid ounce) jigger Irish cream liqueur", "1 (1.5 fluid ounce) jigger Irish whiskey", "1 cup hot brewed coffee", "1 tablespoon whipped cream", "1 dash ground nutmeg.");
irishCoffee.instructions = "In a coffee mug, combine Irish cream and Irish whiskey. Fill mug with coffee. Top with a dab of whipped cream and a dash of nutmeg.";
irishCoffee.value = 8;
irishCoffee.img = "img/whiskey/irish-coffee.png";
irishCoffee.type = "Whiskey";

var whiskeyCoke = new Recipe ("Whiskey Coke" , "instructions");
whiskeyCoke.ingredients.push("1.5 fluid ounces Whiskey", "5 fluid ounces coke", "4 ice cubes");
whiskeyCoke.instructions = "Pour whiskey over ice. Add coke.";
whiskeyCoke.value = 9;
whiskeyCoke.img = "img/whiskey/whiskey-coke.png";
whiskeyCoke.type = "Whiskey";

var whiskeySour = new Recipe ("Whiskey Sour" , "instructions");
whiskeySour.ingredients.push("2 fluid ounces whiskey", "1 fluid ounce sweet and sour mix");
whiskeySour.instructions = "Pour whiskey and sweet and sour over ice cubes in a squat, old-fashioned glass.";
whiskeySour.value = 10;
whiskeySour.img = "img/whiskey/whiskey-sour.png";
whiskeySour.type = "Whiskey";

var margarita = new Recipe ("Margarita" , "instructions");
margarita.ingredients.push("1 (6 ounce) can frozen limeade concentrate", "2 fluid ounces triple sec. 6 fluid ounces tequila");
margarita.instructions = "Fill blender with crushed ice. Pour in limeade concentrate, tequila and triple sec. Blend until smooth. Pour into glasses and serve.";
margarita.value = 11;
margarita.img = "img/tequila/margarita.png";
margarita.type = "Tequila";

var longIsland = new Recipe ("Long Island Iced Tea" , "instructions");
longIsland.ingredients.push("1 (1.5 fluid ounce) jigger vodka", "1 (1.5 fluid ounce) jigger gin", "1 (1.5 fluid ounce) jigger rum", "1 (1.5 fluid ounce) jigger triple sec liqueur", "1 teaspoon tequila", "2 teaspoons orange juice", "2 fluid ounces cola-flavored carbonated beverage", "1 wedge lemon");
longIsland.instructions = "In a cocktail mixer full of ice, combine vodka, gin, rum, triple sec and tequila. Add orange juice and cola. Shake vigorously until frothy. Strain into a Collins glass filled with ice, and garnish with wedge of lemon.";
longIsland.value = 12;
longIsland.img = "img/tequila/long-island.png";
longIsland.type = "Tequila";

var paloma = new Recipe ("Paloma" , "instructions");
paloma.ingredients.push("2 fluid ounces tequila", "1 1/2 tablespoons lime juice", "1 pinch salt", "3 cubes ice, or as desired", "6 fluid ounces diet grapefruit soda");
paloma.instructions = "Combine the tequila, lime juice, and salt in a tall glass. Add ice, top off with diet grapefruit soda, and stir.";
paloma.value = 13;
paloma.img = "img/tequila/paloma.png";
paloma.type = "Tequila";

var bloodyMaria = new Recipe ("Bloody Maria" , "instructions");
bloodyMaria.ingredients.push("kosher salt", "Juice of 2 limes", "2 oz. tequila", "5 oz. tomato juice", "2 dashes Worcestershire sauce", "2 dashes Tabasco sauce", "2 tsp. horseradish", "Freshly ground black pepper", "1 celery stalk", "1 strip cooked bacon", "1 dill pickle spear", "Baby dill pickles", "Pickled jalapeños");
bloodyMaria.instructions = "Place salt in a small, shallow dish. In a separate small, shallow dish, add lime juice. Dip the rim of the glass into lime juice, then in salt. Set glass aside. Add tequila, tomato juice, lime juice, Worcestershire, Tabasco, and horseradish to glass, then stir to combine. Season with salt and pepper. Garnish with celery, bacon, pickles, and jalapenos.";
bloodyMaria.value = 14;
bloodyMaria.img = "img/tequila/bloody-maria.png";
bloodyMaria.type = "Tequila";

var tequilaSunrise = new Recipe ("Tequila Sunrise" , "instructions");
tequilaSunrise.ingredients.push("1 (1.5 fluid ounce) jigger tequila", "3/4 cup freshly squeezed orange juice", "Ice cubes", "1/2 (1.5 fluid ounce) jigger grenadine syrup", "1 slice orange, for garnish", "1 maraschino cherry for garnish");
tequilaSunrise.instructions = "Stir or shake together tequila and orange juice. Fill a chilled 12 ounce glass with ice cubes; pour in orange juice mixture. Slowly pour in the grenadine, and allow it to settle to the bottom of the glass (be patient). Garnish with a slice of orange, and a maraschino cherry.";
tequilaSunrise.value = 15;
tequilaSunrise.img = "img/tequila/tequila-sunrise.png";
tequilaSunrise.type = "Tequila";

// var dummy = new Recipe("dummy")

var newRecipeBook = new RecipeBook ();
newRecipeBook.recipes.push(mule, bloodyMary, screwDriver, vodkaMartini, cosmo, hotToddy, oldFashioned, irishCoffee, whiskeyCoke, margarita, longIsland, paloma, bloodyMaria, tequilaSunrise, whiskeySour);

//---------method to list each ingredient within the recipe
Recipe.prototype.displayIngredients = function () {
  this.ingredients.forEach(function(ingredient) {
    var ingredientList = "";
    ingredientList += ingredient;
    console.log(ingredientList);
  });
};

//---------------- Front End Logic
$(document).ready(function(){
//--------------------DRINK RANDOMIZER------------------
  $("button[name=old-enough-button]").click(function(){

  $("#confirm-age-section").hide();
  $("#main-section").show();
  });

//---------- click function for random drink that adds a clickable drink name
  $("#random-number-button").click(function(){
    $(".display-clickable-recipe").empty();
    var randomNumber = Math.floor(Math.random() *15 + 1)
    console.log(randomNumber);
    newRecipeBook.recipes.forEach(function(recipe){
    var recipeValue = recipe.value;
    if (randomNumber === recipeValue) {
      $(".display-clickable-recipe").append("<li class=clickable-recipe-name>" + recipe.name + "</li>");
//---------------- click funciton that shows recipe details based off clickable drink name for drink randomizer
      $(".clickable-recipe-name").last().click(function(){
        $(".display-image").empty().append("<img src=" + recipe.img + ">");
        $(".display-recipe-instructions").empty();
        $("#display-ingredients").empty();
        $(".display-recipe-info h2").empty();
        $(".display-clickable-recipe").text("");
        $(".display-recipe-info h2").append(recipe.name);
        recipe.ingredients.forEach(function(ingredient){
          $("#display-ingredients").append("<li>" + ingredient + "</li>")
          });
        $(".display-recipe-instructions").append(recipe.instructions);
        });
        };
    });
  });

//-------------LIQUOR TREE----------------------------
//-------------- Click function for liquor tree that sets a variable equal to the type of alcohol that the image represents and builds clickable drink names based off the type of alcohol that the user chooses.
      $(".alcoholBottle").click(function() {
        $(".display-clickable-recipe").text("");
        var alcoholName = $(this).attr("alt");
        newRecipeBook.recipes.forEach(function(recipe){
          var recipeType = recipe.type;
          if (recipeType === alcoholName) {
          $(".display-clickable-recipe").append("<p class=clickable-recipe-name>" + recipe.name + "</p>" );
        } else {return;}
//--------------Click function that displays drink recipe info for the liquor tree
          $(".clickable-recipe-name").last().click(function(){
                $(".display-image").empty().append("<img src=" + recipe.img + ">");
                $(".display-recipe-instructions").empty();
                $("#display-ingredients").empty();
                $(".display-recipe-info h2").empty();
                $(".display-recipe-info h2").append(recipe.name);
                recipe.ingredients.forEach(function(ingredient){
                  $("#display-ingredients").append("<li>" + ingredient + "</li>")
                  });
                $(".display-recipe-instructions").append(recipe.instructions);
              });

            });
          });
});
