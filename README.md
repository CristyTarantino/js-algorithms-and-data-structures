# Data Structures and Algorithms in JavaScript

This is a simple project that implements some of the Data Structures and Algorithms using
JavaScript ES7 with Flow for type definition and check at compile time and Babel to compile to ES5.

https://github.com/larkintuckerllc/hello-flow
https://www.saltycrane.com/flow-type-cheat-sheet/latest/#lib/node.js

I also included Istanbul to check my test coverage

There are several coverage criteria, the key points are:

Function coverage: has each function (or subroutine) in the program been called.
Statement coverage: has each statement in the program been executed.
Branch coverage: has each branch (also called DD-path) of each control structure (such as in if and case statements) been executed. For example, given an if statement, have both the true and false branches been executed. Another way of saying this is, has every edge in the program been executed.
Line coverage: has each executable line in the source file been executed.
For each case, the percentage represents executed code vs not-executed code, which equals each fraction in percent format (e.g: 50% branches, 1/2).
In the file report:

‘E’ stands for ‘else path not taken’, which means that for the marked if/else statement, the ‘if’ path has been tested but not the ‘else’.
‘I’ stands for ‘if path not taken’, which is the opposite case: the ‘if’ hasn’t been tested.
The xN in left column is the amount of times that line has been executed.
Not executed lines, or pieces of code, will be highlighted in red.

For more details about the test process visit:

https://github.com/dwyl/learn-istanbul
https://github.com/istanbuljs/nyc