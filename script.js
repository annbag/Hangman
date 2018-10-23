window.onload = function() {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let categories; // array of topics
  let chosenCategory; // selected catagory
  let word; // selected word
  let guess; //guess
  let guesses = []; // stored guesses
  let lives; // lives
  let counter; // count correct guesses
  let space; // number of spaces in word

  //get elements
  let showLives = document.getElementById('lives');
  let showCategory = document.getElementById('category');

  //create alphabet
  let buttons = function () {
    myButtons  = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (let i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

  //select category
  let selectCategory = function() {
    if (chosenCategory === categories[0]) {
      category.innerHTML = "The chosen category is a country";
    } else if (chosenCategory === categories[1]) {
      category.innerHTML = "The chosen category is capital";
    } else if (chosenCategory === categories[2]) {
      category.innerHTML = "The chosen category is animal";
    }
  };

  //create guesses
  result = function() {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  //show lives
  comments = function() {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  };

  //animate man
  let animate = function () {
    let drawMen = lives;
    drawArray[drawMen]();
  }

  //hangman
  canvas = function() {
    stickman = document.getElementById("stickman");
    context = stickman.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#BFFFC5";
    context.lineWidth = 3;
  };

  head = function() {
    stickman = document.getElementById("stickman");
    context = stickman.getContext("2d");
    context.beginPath();
    context.arc(120, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };
  frame1 = function() {
    draw(0, 150, 150, 150);
  };
  frame2 = function() {
    draw(75, 0, 75, 600);
  };
  frame3 = function() {
    draw(75, 0, 120, 0);
  };
  frame4 = function() { 
    draw(120, 0, 120, 20);
  };
  torso = function() {
    draw(120, 40, 120, 70);
  };
  leftArm = function() {
    draw(120, 40, 100, 50);
  };
  rightArm = function() {
    draw(120, 40, 140, 50);
  };
  leftLeg = function() {
    draw(120, 70, 140, 100);
  };
  rightLeg = function() {
    draw(120, 70, 100, 100);
  };  

  drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];


  //onclick function
  check = function() {
    list.onclick = function() {
      let guess = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
          console.log(1);
        }
      }
      let j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    };
  };

  //play
  play = function() {
    categories = [
      ["spain", "russia", "norway", "germany", "france", "slovenia", "lithuania", "united kindgdom"],
      ["madrid", "moscow", "oslo", "berlin",  "paris", "lublana", "vilnius", "london"],
      ["crocodile", "giraffe", "elephant", "monkey", "bison", "turtle", "duck"],
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    gueses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCategory();
    canvas();
  };

  play();

  //reset
  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    context.clearRect(0, 0, 400, 400);
    check();
    play();
  }

}