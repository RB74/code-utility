### RPNSolver

Solves the given reverse polish notation

``` js
const RPNSolver = RPN => {
  const OPERATORS = {'*' : (a,b) => a * b, '+' : (a,b) => a + b, '-' : (a,b) => a - b, '/' : (a,b) => a / b, '**': (a,b) => a ** b}
  const [stack,solve] = [[],RPN.replace(/\^/g,'**').split(/\s+/g).filter(el => !/\s+/.test(el) && el !== '')]
  solve.forEach(symbol => {
    if(!isNaN(parseFloat(symbol)) && isFinite(symbol)) {stack.push(symbol)}
          else if (Object.keys(OPERATORS).includes(symbol)) {
          const [a,b] = [stack.pop(),stack.pop()]
          stack.push(OPERATORS[symbol](parseFloat(b),parseFloat(a)))
        } else { throw `${symbol} is not a recognized symbol` }
  }
)
 if(stack.length === 1)  return stack.pop()
  else  throw `${RPN} is not a proper RPN. Please check it and try again`
}
```

```js
RPNSolver('15 7 1 1 + - / 3 * 2 1 1 + + -'); // 5
RPNSolver('3 5 6 + *'); //33
RPNSolver('2 4 / 5 6 - *'); //-0.5
```
