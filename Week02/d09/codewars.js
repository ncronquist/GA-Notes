function LetterChanges(str) {

  newStr = '';
  vowels = ['a','e','i','o','u'];

  for(var i = 0; i < str.length; i++) {
    var a = str[i];
    // Get the character code of each character in the string
    if (a.charCodeAt(0) > 64 && a.charCodeAt(0) < 123){
      a = String.fromCharCode(a.charCodeAt(0)+1);
    }
    if(vowels.indexOf(a) !== -1) {
      a = a.toUpperCase();
    }
    newStr+=a;
  }
  return newStr;

}
console.log(LetterChanges("hello*3"));
