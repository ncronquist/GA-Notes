myApp.filter('reverse', function(){

  var reverseWord = function(word) {
    return word.split('').reverse().join('');
  }


  return function(input, preserveWords) {
    if(!input) return input;

    if(preserveWords) {
      return input.split(' ').map(function(word) {
        return reverseWord(word);
      }).join(' ');
    } else {
      return reverseWord(input);
    }
  }

})

myApp.filter('properCase', function() {

  var capitalize = function(word) {
    capitalizedWord = '';
    for(var i = 0; i < word.length; i++) {
      if (i == 0) {
        capitalizedWord += word[i].toUpperCase();
      } else {
        capitalizedWord += word[i].toLowerCase();
      }
    }
    return capitalizedWord;
  }

  return function(input) {

    if(!input) return input;

    return input.split(' ').map(function(word) {
      return capitalize(word);
    }).join(' ');
  }

})

myApp.filter('ordinal', function() {

  return function(input) {
    if(!input || parseInt(input) == 'NaN') return input;

    switch (input.substring(input.length - 2)) {
      case '11':
      case '12':
      case '13':
        return input + 'th'
        break;
    }

    // If the last two digits aren't 11, 12, or 13 check the normal single digits
    switch (input.substring(input.length - 1)) {
      case '0':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        return input + 'th'
        break;
      case '1':
        return input + 'st'
        break;
      case '2':
        return input + 'nd'
        break;
      case '3':
        return input + 'rd'
        break;
    }
  }
})
