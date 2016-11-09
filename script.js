// demo function
function logArgs(args) {
  console.log(args)
  // This will console log a console
}

function coolfunction(args) {
  return args;
}
var functionString = coolfunction.toString();
console.log(functionString)
var consoleLogExample = $("#cool-function-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString);

consoleLogExample.html(formattedExample);

var functionString = logArgs.toString();
console.log(functionString)
var consoleLogExample = $("#console-log-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString);

consoleLogExample.html(formattedExample);