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
bloodyMaria.ingredients.push("kosher salt", "Juice of 2 limes", "2 oz. tequila", "5 oz. tomato juice", "2 dashes Worcestershire sauce", "2 dashes Tabasco sauce", "2 tsp. horseradish", "Freshly ground black pepper", "1 celery stalk", "1 strip cooked bacon", "1 dill pickle spear", "Baby dill pickles", "Pickled jalapenos");
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

var gimlet = new Recipe ("Gimlet" , "instructions");
gimlet.ingredients.push("4 cubes ice", "1 tablespoon fresh lime juice", "2 fluid ounces gin", "1 lime wedge", "4 fluid ounces tonic water");
gimlet.instructions = "Place the ice cubes in a tall, narrow glass with the ice coming near the top. Pour gin, tonic water, and lime juice over the ice. Stir well with a long-necked spoon. Garnish with lime wedge, and serve immediately.";
gimlet.value = 16;
gimlet.img = "img/gin/gimlet.png";
gimlet.type = "Gin";

var ginMartini = new Recipe ("Gin Martini" , "instructions");
ginMartini.ingredients.push("Ice cubes", "2 (1.5 fluid ounce) jiggers dry gin", "1 drop anise flavored liqueur, such as Sambucca®", "1 pitted green olive", "1/4 (1.5 fluid ounce) jigger dry vermouth");
ginMartini.instructions = "Fill a martini pitcher with ice. Pour in the gin, vermouth and anise liqueur. Stir or shake until extremely cold. Strain into a chilled martini glass. Garnish with an olive.";
ginMartini.value = 17;
ginMartini.img = "img/gin/gin-martini.png";
ginMartini.type = "Gin";

var tomCollins = new Recipe ("Tom Collins" , "instructions");
tomCollins.ingredients.push("2 fluid ounces gin", "1 cup ice cubes", "1/4 cup cold club soda", "2 fluid ounces lemon juice", "1 slice lemon, for garnish", "1 fluid ounce simple syrup", "1 dash bitters", "1 maraschino cherry");
tomCollins.instructions = "Fill a cocktail shaker with ice. Pour in the gin, lemon juice, simple syrup and a dash of bitters. Cover and shake until the outside of the container is frosty, about 15 seconds. Strain into a highball glass full of ice. Top off with club soda and garnish with a lemon slice and maraschino cherry.";
tomCollins.value = 18;
tomCollins.img = "img/gin/tom-collins.png";
tomCollins.type = "Gin";

var ginTonic = new Recipe ("Gin Tonic" , "instructions");
ginTonic.ingredients.push("4 cubes ice", "1 tablespoon fresh lime juice", "1 lime wedge", "4 fluid ounces tonic water");
ginTonic.instructions = "Place the ice cubes in a tall, narrow glass with the ice coming near the top. Pour gin, tonic water, and lime juice over the ice. Stir well with a long-necked spoon. Garnish with lime wedge, and serve immediately.";
ginTonic.value = 19;
ginTonic.img = "img/gin/gin-tonic.png";
ginTonic.type = "Gin";

var negroni = new Recipe ("Negroni" , "instructions");
negroni.ingredients.push("3/4 fluid ounce campari", "2 fluid ounces carbonated water", "3/4 fluid ounce gin", "3/4 fluid ounce sweet vermouth", "1 wedge lemon, for garnish");
negroni.instructions = "In a rocks glass over ice, combine campari, gin, sweet vermouth. Fill with carbonated water and garnish with a wedge of lemon.";
negroni.value = 20;
negroni.img = "img/gin/negroni.png";
negroni.type = "Gin";

var daiquiri = new Recipe ("Daiquiri" , "instructions");
daiquiri.ingredients.push("1 (6 ounce) can frozen lemonade concentrate", "1/2 (10 ounce) package frozen sliced strawberries", "6 fluid ounces chilled lemon-lime soda", "2 cups ice cubes", "6 fluid ounces light rum");
daiquiri.instructions = "In the container of a blender, combine the lemonade concentrate, lemon-lime soda, rum and strawberries. Cover, and blend until smooth. Add ice and blend to desired thickness.";
daiquiri.value = 21;
daiquiri.img = "img/rum/daiquiri.png";
daiquiri.type = "Rum";

var hurricane = new Recipe ("Hurricane" , "instructions");
hurricane.ingredients.push("1 cup ice cube", "1 fluid ounce Chambord (raspberry liqueur)", "1 fluid ounce light rum", "1 fluid ounce triple sec liqueur", "1 fluid ounce dark rum", "3 fluid ounces orange juice", "1 fluid ounce coconut rum", "1 fluid ounce vodka", "1 fluid ounce gin", "orange slices for garnish (optional)", "maraschino cherry for garnish (optional)");
hurricane.instructions = "Fill a hurricane glass with ice. Add light rum, dark rum, coconut rum, vodka, gin, raspberry liqueur, triple sec and orange juice. Shake gently, and garnish with orange slices and a cherry, if desired. Beverage will be about the color of a pink grapefruit.";
hurricane.value = 22;
hurricane.img = "img/rum/hurricane.png";
hurricane.type = "Rum";

var maiTai = new Recipe ("Mai Tai" , "instructions");
maiTai.ingredients.push("1 (1.5 fluid ounce) jigger spiced rum", "3 fluid ounces pineapple juice", "1/2 (1.5 fluid ounce) jigger coconut-flavored rum", "2 fluid ounces orange juice", "1 teaspoon grenadine syrup", "1 cup ice cubes");
maiTai.instructions = "In a cocktail mixer full of ice, combine the spiced rum, coconut rum, grenadine, pineapple juice and orange juice. Shake vigorously and strain into glass full of ice.";
maiTai.value = 23;
maiTai.img = "img/rum/mai-tai.png";
maiTai.type = "Rum";

var mojito = new Recipe ("Mojito" , "instructions");
mojito.ingredients.push("1/2 teaspoon confectioners' sugar", "2 fluid ounces white rum", "1/2 lime, juiced", "4 fluid ounces carbonated water", "1 sprig fresh mint, crushed", "1/2 cup crushed ice", "1 sprig fresh mint, garnish");
mojito.instructions = "In a highball glass, stir together the confectioners' sugar and lime juice. Bruise the mint leaves and drop into glass. Fill glass with crushed ice and pour in rum. Pour in carbonated water to fill the glass. Garnish with a sprig of mint.";
mojito.value = 24;
mojito.img = "img/rum/mojito.png";
mojito.type = "Rum";

var pinaColada = new Recipe ("Pina Colada" , "instructions");
pinaColada.ingredients.push("1 fluid ounce light rum", "2 fluid ounces cream of coconut", "1 fluid ounce half-and-half cream", "1 fluid ounce amber rum", "ice cubes, as needed", "3 fluid ounces pineapple juice", "1/4 fluid ounce dark rum (optional)", "2 fluid ounces sweet and sour mix" );
pinaColada.instructions = "Pour the light rum, amber rum, pineapple juice, sweet and sour mix, cream of coconut, and half-and-half cream into the pitcher of a blender with ice; blend until the cocktail has a slushy texture. Pour the slushy mixture into a glass.";
pinaColada.value = 25;
pinaColada.img = "img/rum/pina-colada.png";
pinaColada.type = "Rum";

// var dummy = new Recipe("dummy")

var newRecipeBook = new RecipeBook ();
newRecipeBook.recipes.push(mule, bloodyMary, screwDriver, vodkaMartini, cosmo, hotToddy, oldFashioned, irishCoffee, whiskeyCoke, margarita, longIsland, paloma, bloodyMaria, tequilaSunrise, whiskeySour, gimlet, ginMartini, tomCollins, ginTonic, negroni, daiquiri, hurricane, maiTai, mojito, pinaColada );

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
  $(".alcoholBottle").addClass("angrytext")
//--------------- click function to confirm users age
  $("button[name=old-enough-button]").click(function(){
  $("#confirm-age-section").hide();
  $("#main-section").show();
  });


  //--------------------DRINK RANDOMIZER------------------
//---------------- click function that generates a random recipe and displays the recipe details
  $("#click-bartender").click(function(){
    $("#display-recipe-group").show();
    // $("#display-recipe-group").toggleClass("slide-out");
    $(".speech").text("I'll Never Get Tired Of Pouring These Bad Boys!");
    $(".display-clickable-recipe").empty();
    var randomNumber = Math.floor(Math.random() *25 + 1);
    newRecipeBook.recipes.forEach(function(recipe){
      var recipeValue = recipe.value;
      if (randomNumber === recipeValue) {
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
            $(".display-recipe-info").show();
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
