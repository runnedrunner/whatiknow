// demo function
function logArgs(args) {
  var a = 1
  console.log(args)
}

var functionString = logArgs.toString();
console.log(functionString)
var consoleLogExample = "how do I get the element where I want to put the example?"

var formattedExample = $("<pre>");
formattedExample.html(funcionString);

consoleLogExample.html(formattedExample)