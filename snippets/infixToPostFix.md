### infixToPostfix

Works perfectly!

```js
const infixToPostfix  = expr => {
  let rpn = ''
  let solve = expr.replace(/\^/g,'**').match(/([0-9]+|[\+\(\)\/\-]|\*+)/g).filter(el => !/\s+/.test(el) && el !== '')
  let stack = []
  let precedence = {'**':5,'/':4,'*':4,'+':3,'-':3}
  solve.forEach(symbol => {
    if(!isNaN(parseFloat(symbol)) && isFinite(symbol)){
      rpn += symbol + ' '
    }
    else if (Object.keys(precedence).includes(symbol)) {
      while(((precedence[symbol] < precedence[stack[stack.length-1]]) || ((precedence[symbol] == precedence[stack[stack.length-1]]) && symbol !== "**"))&&(stack[stack.length - 1] !== '(')) {
        rpn += stack.pop() +  ' '
      }
      stack.push(symbol)
    }
    else if(symbol === '('){stack.push(symbol)}
    else if(symbol === ')'){while (stack[stack.length - 1] !== '('){rpn += stack.pop() + ' '; if (stack.length === 0){throw `Mismatched parantheses`}} stack.pop()}
    else {throw `${symbol} is not a recognized symbol`}
  })
  while(stack.length !== 0){
    rpn += stack.pop() +  ' '
  }
  return rpn
}
```
```js

```
