// demo function
function logArgs(args) {
  var a = 1
  console.log(args)
}

var functionString = logArgs.toString();
console.log(functionString)

var formattedExample = $("<pre>");
formattedExample.text(funcionString);

consoleLogExample.html(formattedExample)