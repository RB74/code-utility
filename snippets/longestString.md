### longestString

Takes an array of strings and returns the longestString one.

Uses the [rest operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
to handle arrays as well as an indefinite amount of single arguments.

```js
const longestString = (...strings) => [...strings].reduce((a, b) => a.length > b.length ? a : b);
```

```js
longestString('this', 'is', 'a', 'testcase') // 'testcase'
longestString(['a', 'ab', 'abc']) // 'abc'
```
