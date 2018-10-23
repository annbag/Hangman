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
  
  //create guesses

  //show lives
  
  //animate man
  
  //hangman

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
  //reset
}