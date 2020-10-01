var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "Apple":
      var apple = new Audio("Sounds/Apple.ogg");
      apple.play();
      break;

    case "Ball":
      var ball = new Audio("Sounds/ball.ogg");
      ball.play();
      break;

    case "Car":
      var car = new Audio('Sounds/car.ogg');
      car.play();
      break;

    case "Dog":
      var dog = new Audio('Sounds/dog.ogg');
      dog.play();
      break;

    case "Tree":
      var tree = new Audio('Sounds/tree.ogg');
      tree.play();
      break;

    case "Umbrella":
      var umbrella = new Audio('Sounds/umbrella.ogg');
      umbrella.play();
      break;


    default: console.log(key);

  }
}
