### RPNSolver

Solves the given reverse polish notation

``` js
const RPNSolver = RPN => {
  const operators = {'*' : (a,b) => a * b, '+' : (a,b) => a + b, '-' : (a,b) => a - b, '/' : (a,b) => a / b, '**': (a,b) => a ** b}
  let [stack,solve] = [[],RPN.replace(/\^/g,'**').split(/\s+/g).filter(el => !/\s+/.test(el) && el !== '')]
  solve.forEach(symbol => {
    if(!isNaN(parseFloat(symbol)) && isFinite(symbol)) {stack.push(symbol)}
          else if (Object.keys(operators).includes(symbol)) {
          let [a,b] = [stack.pop(),stack.pop()]
          stack.push(operators[symbol](parseFloat(b),parseFloat(a)))
        } else { throw `${symbol} is not a recognized symbol` }
  }
)
 if(stack.length === 1)  return stack.pop()
  else  throw `${RPN} is not a proper RPN. Please check it and try again`
}
```

```js

```
