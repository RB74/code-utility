module.exports = invertKeyValues = obj =>
Object.keys(obj).reduce((acc, key) => {
acc[obj[key]] = key;
return acc;
}, {});