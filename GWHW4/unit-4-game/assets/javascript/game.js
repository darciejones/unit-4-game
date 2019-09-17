var randomNumber = 21;

var counter = 0;
var wins = 0;
var losses = 0;

var numberOptions = [];

var game = {
    crystalVal: function () {
        for (var i =0; i < 4; i++) {
            numberOptions.push(Math.floor(Math.random() * (12) +1))
        }
    },

    numWin: function () {
        randomNumber = Math.floor(Math.random() * (120-19)) + 19
    },

    reset: function () {
        numberOptions = []
        this.numWin();
        this.crystalVal()
        couter = 0;
        $("#number-to-guess").text(randomNumber);
        $('#player-score').text(counter)
        $('#crystals').empty()
        crystalGenerator()
        checker()
        console.log(numberOptions);
        console.log(randomNumber)
      }
    }

    game.crystalVal()
game.numWin()
$("#number-to-guess").text(randomNumber);
console.log(numberOptions);
console.log(randomNumber)

crystalGenerator()
checker()






function crystalGenerator () {
    for (var i = 0; i < numberOptions.length; i++) {
  
      // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");
  
      // First each crystal will be given the class ".crystal-image".
      // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");
  
     
      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  
      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $("#crystals").append(imageCrystal);
    }
  }
  
  function checker () {
    $(".crystal-image").on("click", function() {
    
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
    
      counter += crystalValue;
    
      // All of the same game win-lose logic applies. So the rest remains unchanged.
      $('#player-score').text(counter);
    
      if (counter === randomNumber) {
        wins++
        $('#wins').text(": " + wins)
        game.reset()
      }
    
      else if (counter >= randomNumber) {
        losses++
        $('#losses').text(": " + losses)
        game.reset()
      }
    
    });
    }


    
