// demo function
function logArgs(args) {
  console.log(args)
  // This will console 
}
function coolfunction(args) {
  return 0;
}
var functionString = logArgs.toString();
console.log(functionString)
var consoleLogExample = $("#console-log-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString);

consoleLogExample.html(formattedExample);

