# Good Practices // Style Guide

document.write() --> method should only be used for testing.  
Using document.write() after an HTML document is loaded, will delete all existing HTML.

; --> Ending statements with semicolon is not required, but HIGHLY recommended.

Lower Camel Case --> firstName, lastName, masterCard, interCity.  
Hyphens are not allowed in JavaScript. They are reserved for subtractions. NO: first-name

spaces --> A good practice is to put spaces around operators ( = + - * / ):

It is considered good programming practice to always declare variables BEFORE use.

When to Use var, let, or const?  

    1. Always declare variables
    2. Always use const if the value should not be changed
    3. Always use const if the type should not be changed (Arrays and Objects)
    4. Only use let if you can't use const
    5. Only use var if you MUST support old browsers.

for in / for of --> Do not use for in over an Array if the index order is important.  
It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
