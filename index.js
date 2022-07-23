class Formatter {
  //add static methods here

  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }

  static sanitize(word) {
    return word.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(word) {
    const ignore = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]

    let answer = [];

    const words = word.split(" ");
    for (let i = 0; i < words.length; i++){
      if (i == 0) {
        words[i] = Formatter.capitalize(words[i]);
      } else if (!ignore.includes(words[i])){
        words[i] = Formatter.capitalize(words[i]);
      }
    }
    return words.join(" ");
  }
}