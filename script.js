// demo function
function logArgs(args) {
  console.log(args)
}

var functionString = logArgs.toString();
console.log(functionString)
var consoleLogExample = $("#console-log-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString);

consoleLogExample.html(formattedExample);

