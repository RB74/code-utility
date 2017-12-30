### elo

Computes the new ratings between two opponents using the [Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system). It takes an array
of two pre-ratings and returns an array containing two post-ratings.
The winner's rating is be the first element of the array.

Use `Math.pow()` and math operators to compute the expected score (chance of winning) of each opponent
and compute the change in rating for each. Omit the second argument to use the default K-factor of
32, or supply a custom K-factor value.

```js
const elo = ([a, b], kFactor = 32) => {
  const expectedScore = (self, opponent) => 1 / (1 + Math.pow(10, (opponent - self) / 400));
  const [eA, eB] = [expectedScore(a, b), expectedScore(b, a)];
  const newRating = (rating, index) =>
    rating + kFactor * ((index === 0 ? 1 : 0) - (index === 0 ? eA : eB));
  return [newRating(a, 0), newRating(b, 1)];
};
```

```js
elo([1200, 1200]); // [1216, 1184]
elo([1000, 2000]); // [1031.8991261061358, 1968.1008738938642]
elo([1500, 1000]); // [1501.7036868864648, 998.2963131135352]
elo([1200, 1200], 64); // [1232, 1168]
```
