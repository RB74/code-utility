### Custom variables

CSS variables that contain specific values to be reused throughout a document.

#### CSS

```css
:root {
    --some-color: #da7800;
    --some-keyword: italic;
    --some-size: 1.25em;
    --some-complex-value: 1px 1px 2px WhiteSmoke, 0 0 1em SlateGray , 0 0 0.2em SlateGray;
}
```

#### Demo

<!-- You must create a `snippet-demo` parent block and use it as a namespace with BEM syntax. -->

<div class="snippet-demo">
  <div class="snippet-demo__custom-variables">
    <p>CSS is awesome!</p>
  </div>
</div>

<!-- Add your style rules here. -->

<style>
:root {
    --some-color: #686868;
    --some-keyword: italic;
    --some-size: 1.25em;
    --some-complex-value: 1px 1px 2px WhiteSmoke, 0 0 1em SlateGray , 0 0 0.2em SlateGray;
}

.snippet-demo__custom-variables p{
    color: var(--some-color);
    font-size: var(--some-size);
    font-style: var(--some-keyword);
    text-shadow: var(--some-complex-value);
}

</style>

#### Explanation

Declare variable with `--variable-name:`.

Reuse declared variable throughout the document using the `var(--variable-name)` function.

#### Browser support

<span class="snippet__support-note">⚠️ This is an experimental technology.</span>

<!-- Whenever possible, link a `caniuse` feature which allows the browser support percentage to be displayed.
If no link is provided, it defaults to 99+%. -->

* https://caniuse.com/#feat=some-feature
