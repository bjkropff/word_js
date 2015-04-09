var scrabbleScore = function(word) {
  var score_one =  ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
  var score_two = ['d', 'g'];
  var score_three = ['b', 'c', 'm', 'p'];
  var score_four = ['f', 'h', 'v', 'w', 'y'];
  var score_five = ['k'];
  var score_eight = ['j', 'x'];
  var score_ten = ['q', 'z'];

  var split_word = word.toLowerCase().split('');
  var final_score = 0;

  for ( var i = 0; i <= score_one.length; i++) {
    for ( var j = 0; j < split_word.length; j++) {

    if (score_one[i] === split_word[j])
      {
         final_score += 1;
      }
    }
  }

  for ( var i = 0; i <= score_two.length; i++){
    for (var j = 0; j < split_word.length; j++) {
      if (score_two[i] === split_word[j])
      {
        final_score += 2;
      }
    }
  }

  for ( var i = 0; i <= score_three.length; i++){
    for (var j = 0; j < split_word.length; j++) {
      if (score_three[i] === split_word[j])
      {
        final_score += 3;
      }
    }
  }

  for ( var i = 0; i <= score_four.length; i++){
    for (var j = 0; j < split_word.length; j++) {
      if (score_four[i] === split_word[j])
      {
        final_score += 4;
      }
    }
  }

  for ( var i = 0; i <= score_five.length; i++){
    for (var j = 0; j < split_word.length; j++) {
      if (score_five[i] === split_word[j])
      {
        final_score += 5;
      }
    }
  }

  for ( var i = 0; i <= score_eight.length; i++){
    for (var j = 0; j < split_word.length; j++) {
      if (score_eight[i] === split_word[j])
      {
        final_score += 8;
      }
    }
  }

  for ( var i = 0; i <= score_ten.length; i++){
    for (var j = 0; j < split_word.length; j++) {
      if (score_ten[i] === split_word[j])
      {
        final_score += 10;
      }
    }
  }

  return final_score;

}//close function



$(document).ready(function() {

  $('form#form').submit(function(event) {

    var word = $('input#word').val();

    var result = scrabbleScore(word);

    $('.score').text(result);

    $('#result').show();
    event.preventDefault();

  });

});
