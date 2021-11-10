# _Pizza Store website_

#### By _**Andrew Henderson**_

#### _A website to place orders of pizza_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_

## Description

_There is a field to input topping for the pizza and three sizes to choose from. Each topping will make the the cost raise, and the larger the pizza the more each topping will cost. Multiple toppings can be added and they can all be removed from the order._

## Setup/Installation Requirements

* _In the repository, click the green code button and select download ZIP_
* _Unzip the files into desired directory_
* _Open the index.html inside an internet browser_

## Known Bugs

* _There are currently no known bugs_

## License

_Copyright 2021 Andrew Henderson_

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) _2021_ _Andrew Henderson_
\
\
\
\
\
Tests:
\
\
\
Describe: Pizza()
\
\
\
Test: It should return a Pizza object with two properties for the toppings and size.

Code: const newPizza("Cheese", "large");

Expected Output: Pizza {topping: 'Cheese', size: 'large'}
\
\
\
Test: It should return an array of toppings when multiple toppings are passed in.

Code: const newPizza(['Cheese', 'Pepperoni'], "large");

Expected Output: Pizza {topping: ['Cheese', 'Pepperoni'], size: 'large'}
\
\
\
Describe: calcCost()
\
\
\
Test: It should return the cost based off of the toppings and size

Code: Pizza.prototype.calcCost

Expected Output: 6
\
\
\
Test: 

Code: 

Expected Output: 
\
\
\
Test: 

Code: 

Expected Output: 