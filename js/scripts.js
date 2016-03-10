var wordSort = function(str) {
  var text = " ";
  var words = str.split(" ");
  var sortedWords = words.sort();
  var counter = 1;
  var single = 0;

    for (var i = 0 ; i < sortedWords.length ; i++) {
        if (sortedWords[i] === sortedWords [(i + 1)]) {
        text = sortedWords[i];
        counter += 1;
      }
    return text + " " + counter;
}


// function input(str) {
//   var text = 0;
//   for (var i = 0; i < input.length; i++)
//     if (str[i] === " ") { // if a space is found in str
//       text += +1; // add 1 to total so far
//   }
//   return text += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
// }


$(document).ready(function() {
  $("form#words").submit(function(event) {
    var str = $("input#str").val();
    var result = wordSort(str);

    $("#translated").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
