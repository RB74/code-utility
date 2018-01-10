module.exports = randomHexColorCode = () => {
let n = ((Math.random() * 0xfffff) | 0).toString(16);
return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n);
};