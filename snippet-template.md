---
title: ComponentName
tags: visual,state,effect,intermediate
---

Explain briefly what the snippet does.

- Explain briefly how the snippet works.
- Use bullet points for your snippet's explanation.
- Try to explain everything briefly but clearly.

```jsx
function ComponentName(props) {
  const [state, setState] = React.useState(null);
  React.useEffect(() => {
    setState(0);
  });
  return <div>{props}</div>;
}
```

```jsx
ReactDOM.render(<ComponentName />, document.getElementById('root'));
```
