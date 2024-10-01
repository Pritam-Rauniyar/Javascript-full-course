/*javascript execution context
   a) global execution context - it's refer to (this) variable as window obbject
   The global execution context is the top-level context in a JavaScript program. It represents the global scope, encompassing the entire program and all its components. This context sets the stage for the entire code execution process and plays a pivotal role in managing global variables and functions.
   Creating the Global Context
The global execution context is automatically created when a JavaScript program starts running. Here’s what happens during its creation:

Initialization: When your JavaScript code is loaded by a web browser or executed by a JavaScript runtime environment (like Node.js), the global execution context is initialized.
Global Object: A global object (also known as the window object in a browser environment or the global object in Node.js) is created. This object serves as the global scope, and all global variables and functions become properties and methods of this object.
This Binding: In the global context, the this keyword is bound to the global object. This means that when you refer to this at the top level of your code, it points to the global object.
Outer Environment: The outer (or parent) environment of the global context is set to null since there is no outer context beyond the global scope.
Creation of Global Variables and Functions: Any global variables and functions declared in your code are hoisted and initialized within the global context.
Example of the Global Execution Context
Consider this simple example:


Global Excecution Context Example
var globalVar ="i'm global";
function greet(){
console.log(globalVar)
}
greet()
In this case:

The global execution context is created when the script starts running.
The globalVar variable is declared and initialized in the global context.
The greet function is also defined in the global context.
When greet() is called, it accesses and logs the value of globalVar from the global context.
Understanding the global execution context is crucial because it forms the foundation upon which all other execution contexts are built. As we dive deeper into function execution contexts and scope, you’ll see how they interact with the global context to create a cohesive environment for your JavaScript code.

Function Execution Context
In the intricate dance of JavaScript execution, functions play a starring role. Understanding how function execution contexts are created and the concept of function scope is vital for unraveling the mysteries of JavaScript’s behavior.
   
   2. function execution context
   In the intricate dance of JavaScript execution, functions play a starring role. Understanding how function execution contexts are created and the concept of function scope is vital for unraveling the mysteries of JavaScript’s behavior.

Creating Function Execution Contexts
Function execution contexts come into play when a function is invoked. Each time a function is called, a new execution context is created to manage its execution. Here’s what happens during the creation of a function execution context:

Initialization: When a function is called, a new execution context is initialized specifically for that function. This context includes its own set of local variables, parameters, and a reference to the outer environment where the function was defined.
Scope Chain: The function’s execution context has access to its local variables and parameters, as well as variables in its outer environment. This forms the scope chain — a hierarchical chain of variable lookup that extends from the innermost context to the outermost global context.
This Binding: The this keyword within a function's execution context is determined by how the function was called. It may refer to the global object (in non-strict mode) or be explicitly set by the caller.
Arguments Object: A special arguments object is created in the function's execution context, which holds all the arguments passed to the function.
Function Scope
One of the critical concepts related to function execution contexts is function scope. Function scope dictates the visibility and accessibility of variables within a function.

In JavaScript, variables declared within a function using the var keyword are function-scoped. This means they are accessible only within the function where they are declared. Variables declared outside any function, in the global context, are considered global variables and can be accessed from anywhere in the code.

Here’s an example to illustrate function scope:
var globalVar = "I'm global";
function greet(){
var LocalVar = "i'm Local";
console.log(LocalVar)
}
greet()
console.log(globalVar)
output will be
i'm local
i'm global
localVar is a function-scoped variable and can only be accessed within the greet function.
globalVar, declared in the global context, is a global variable and can be accessed both inside and outside the function.
Function scope ensures that variables within a function do not clash with variables in other parts of your code, promoting encapsulation and preventing unintended variable interference.
for more study visit the site link which is mentioned in below
https://medium.com/@rabailzaheer/javascript-execution-context-behind-the-call-stack-19f253aad0a4#:~:text=The%20global%20execution%20context%20is,managing%20global%20variables%20and%20functions.

3. eval execution context
javascript run in two phase
A) memory creation phase
example of this phase
let val1 = 12
let val2 = 20
function addMyNumber(val1, val2){
let total = val1 + val2
return total
}
let result1 = addMyNumber(val1, val2)
let result2 = addMyNumber(10, 30)
vall1 = undefined
vall2 = undefined
addMyNumber = defination
result1 = undefined
result2 = undefined

B) execution phase
val1 = 12
val2 = 20
addMyNumber = new variable environment and execution thread
now 
memory phase
val1 = undefined
val2 = undefined
total = undefined
execution context 

at end of this chapter there is call stack which work on the lifo
if we store context on the last of the memory that will be come out at the first for more call stack i request you to visit the link which i have mentioned in this chapter there is very deep knowldege about this chapter 
 */
      


