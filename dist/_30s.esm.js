const JSONToDate = arr => {
  const dt = new Date(parseInt(arr.toString().substr(6)));
  return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
};

const fs = typeof require !== "undefined" && require('fs');
const JSONToFile = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));

const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );

const crypto$1 = typeof require !== "undefined" && require('crypto');
const UUIDGeneratorNode = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto$1.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  );

const anagrams = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
      []
    );
};

const arrayToHtmlList = (arr, listID) =>
  arr.map(item => (document.querySelector('#' + listID).innerHTML += `<li>${item}</li>`));

const average = (...arr) => {
  const nums = [].concat(...arr);
  return nums.reduce((acc, val) => acc + val, 0) / nums.length;
};

const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

const byteSize = str => new Blob([str]).size;

const call = (key, ...args) => context => context[key](...args);

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

const chainAsync = fns => {
  let curr = 0;
  const next = () => fns[curr++](next);
  next();
};

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

const cleanObj = (obj, keysToKeep = [], childIndicator) => {
  Object.keys(obj).forEach(key => {
    if (key === childIndicator) {
      cleanObj(obj[key], keysToKeep, childIndicator);
    } else if (!keysToKeep.includes(key)) {
      delete obj[key];
    }
  });
  return obj;
};

const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);

const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));

const coalesceFactory = valid => (...args) => args.find(valid);

const collatz = n => (n % 2 == 0 ? n / 2 : 3 * n + 1);

const collectInto = fn => (...args) => fn(args);

const compact = arr => arr.filter(Boolean);

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

const countOccurrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);

const countVowels = str => (str.match(/[aeiou]/gi) || []).length;

const currentURL = () => window.location.href;

const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

const differenceWith = (arr, val, comp) => arr.filter(a => !val.find(b => comp(a, b)));

const digitize = n => [...('' + n)].map(i => parseInt(i));

const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

const distinctValuesOfArray = arr => [...new Set(arr)];

const dropElements = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

const dropRight = (arr, n = 1) => arr.slice(0, -n);

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

const elo = ([a, b], kFactor = 32) => {
  const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));
  const newRating = (rating, i) => rating + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
  return [newRating(a, 1), newRating(b, 0)];
};

const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );

const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

const extendHex = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');

const factorial = n =>
  n < 0
    ? (() => {
        throw new TypeError('Negative numbers are not allowed!');
      })()
    : n <= 1 ? 1 : n * factorial(n - 1);

const factors = (num, primes = false) => {
  const isPrime = num => {
    const boundary = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
    return num >= 2;
  };
  const isNeg = num < 0;
  num = isNeg ? -num : num;
  let array = Array.from({ length: num - 1 })
    .map((val, i) => (num % (i + 2) === 0 ? i + 2 : false))
    .filter(val => val);
  if (isNeg)
    array = array.reduce((acc, val) => {
      acc.push(val);
      acc.push(-val);
      return acc;
    }, []);
  return primes ? array.filter(isPrime) : array;
};

const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

const fibonacciCountUntilNum = num =>
  Math.ceil(Math.log(num * Math.sqrt(5) + 1 / 2) / Math.log((Math.sqrt(5) + 1) / 2));

const fibonacciUntilNum = num => {
  let n = Math.ceil(Math.log(num * Math.sqrt(5) + 1 / 2) / Math.log((Math.sqrt(5) + 1) / 2));
  return Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
};

const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

const flatten = arr => [].concat(...arr);

const flattenDepth = (arr, depth = 1) =>
  depth != 1
    ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v), [])
    : arr.reduce((a, v) => a.concat(v), []);

const flip = fn => (...args) => fn(args.pop(), ...args);

const fromCamelCase = (str, separator = '_') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();

const functionName = fn => (console.debug(fn.name), fn);

const gcd = (...arr) => {
  let data = [].concat(...arr);
  const helperGcd = (x, y) => (!y ? x : gcd(y, x % y));
  return data.reduce((a, b) => helperGcd(a, b));
};

const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
    (v, i) => start * step ** i
  );

const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

const getURLParameters = url =>
  url
    .match(/([^?=&]+)(=([^&]*))/g)
    .reduce((a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {});

const groupBy = (arr, func) =>
  arr.map(typeof func === 'function' ? func : val => val[func]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});

const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;

const hasClass = (el, className) => el.classList.contains(className);

const hasFlags = (...flags) =>
  flags.every(flag => process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag));

const head = arr => arr[0];

const hexToRGB = hex => {
  let alpha = false,
    h = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (h.length === 3) h = [...h].map(x => x + x).join('');
  else if (h.length === 8) alpha = true;
  h = parseInt(h, 16);
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h & 0x000000ff}` : '') +
    ')'
  );
};

const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

const howManyTimes = (num, divisor) => {
  if (divisor === 1 || divisor === -1) return Infinity;
  if (divisor === 0) return 0;
  let i = 0;
  while (Number.isInteger(num / divisor)) {
    i++;
    num = num / divisor;
  }
  return i;
};

const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

const inRange = (n, start, end = null) => {
  if (end && start > end) end = [start, (start = end)][0];
  return end == null ? n >= 0 && n < start : n >= start && n < end;
};

const initial = arr => arr.slice(0, -1);

const initialize2DArray = (w, h, val = null) =>
  Array(h)
    .fill()
    .map(() => Array(w).fill(val));

const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map((v, i) => i * step + start);

const initializeArrayWithValues = (n, value = 0) => Array(n).fill(value);

const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

const invertKeyValues = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[obj[key]] = key;
    return acc;
  }, {});

const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

const isArmstrongNumber = digits =>
  (arr => arr.reduce((a, d) => a + parseInt(d) ** arr.length, 0) == digits)(
    (digits + '').split('')
  );

const isArray = val => !!val && Array.isArray(val);

const isArrayLike = val => {
  try {
    return [...val], true;
  } catch (e) {
    return false;
  }
};

const isBoolean = val => typeof val === 'boolean';

const isDivisible = (dividend, divisor) => dividend % divisor === 0;

const isEven = num => num % 2 === 0;

const isFunction = val => val && typeof val === 'function';

const isNull = val => val === null;

const isNumber = val => typeof val === 'number';

const isPrime = num => {
  const boundary = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= boundary; i++) if (num % i == 0) return false;
  return num >= 2;
};

const isPrimitive = val => !['object', 'function'].includes(typeof val) || val === null;

const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';

const isSorted = arr => {
  const direction = arr[0] > arr[1] ? -1 : 1;
  for (let [i, val] of arr.entries())
    if (i === arr.length - 1) return direction;
    else if ((val - arr[i + 1]) * direction > 0) return 0;
};

const isString = val => typeof val === 'string';

const isSymbol = val => typeof val === 'symbol';

const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;

const isValidJSON = obj => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};

const join = (arr, separator = ',', end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i == arr.length - 2
        ? acc + val + end
        : i == arr.length - 1 ? acc + val : acc + val + separator,
    ''
  );

const last = arr => arr[arr.length - 1];

const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => x * y / gcd(x, y);
  return [].concat(...arr).reduce((a, b) => _lcm(a, b));
};

const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});

const mapObject = (arr, fn) =>
  (a => (
    a = [arr, arr.map(fn)], a[0].reduce((acc, val, ind) => (acc[val] = a[1][ind], acc), {})))();

const mask = (cc, num = 4, mask = '*') =>
  ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);

const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

const memoize = fn => {
  const cache = new Map();
  const cached = function(val) {
    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};

const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

const negate = func => (...args) => !func(...args);

const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];

const objectFromPairs = arr => arr.reduce((a, v) => (a[v[0]] = v[1], a), {});

const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);

const onUserInputChange = callback => {
  let type = 'mouse',
    lastTime = 0;
  const mousemoveHandler = () => {
    const now = performance.now();
    if (now - lastTime < 20)
      type = 'mouse', callback(type), document.removeEventListener('mousemove', mousemoveHandler);
    lastTime = now;
  };
  document.addEventListener('touchstart', () => {
    if (type === 'touch') return;
    type = 'touch', callback(type), document.addEventListener('mousemove', mousemoveHandler);
  });
};

const once = fn => {
  let called = false;
  return function(...args) {
    if (called) return;
    called = true;
    return fn.apply(this, args);
  };
};

const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

const palindrome = str => {
  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return (
    s ===
    s
      .split('')
      .reverse()
      .join('')
  );
};

const percentile = (arr, val) =>
  100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0) / arr.length;

const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

const pluralize = (num, item, items = item + 's') =>
  num <= 0
    ? (() => {
        throw new Error(`'num' should be >= 1. Value povided was ${num}.`);
      })()
    : num === 1 ? item : items;

const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

const prettyBytes = (num, precision = 3, addSpace = true) => {
  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
  const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);
  const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));
  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};

const primes = num => {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
    sqroot = Math.floor(Math.sqrt(num)),
    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y == x)));
  return arr;
};

const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};

const pullAtIndex = (arr, pullArr) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};

const pullAtValue = (arr, pullArr) => {
  let removed = [],
    pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
    mutateTo = arr.filter((v, i) => !pullArr.includes(v));
  arr.length = 0;
  mutateTo.forEach(v => arr.push(v));
  return removed;
};

const quickSort = ([n, ...nums], desc) =>
  isNaN(n)
    ? []
    : [
        ...quickSort(nums.filter(v => (desc ? v > n : v <= n)), desc),
        n,
        ...quickSort(nums.filter(v => (!desc ? v > n : v <= n)), desc)
      ];

const randomHexColorCode = () => {
  let n = ((Math.random() * 0xfffff) | 0).toString(16);
  return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n);
};

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

const fs$1 = typeof require !== "undefined" && require('fs');
const readFileLines = filename =>
  fs$1
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);

const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );

const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];

const repeatString = (str = '', num = 2) => {
  return num >= 0 ? str.repeat(num) : str;
};

const reverseString = str =>
  str
    .split('')
    .reverse()
    .join('');

const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

const runAsync = fn => {
  const blob = `var fn = ${fn.toString()}; postMessage(fn());`;
  const worker = new Worker(
    URL.createObjectURL(new Blob([blob]), {
      type: 'application/javascript; charset=utf-8'
    })
  );
  return new Promise((res, rej) => {
    worker.onmessage = ({ data }) => {
      res(data), worker.terminate();
    };
    worker.onerror = err => {
      rej(err), worker.terminate();
    };
  });
};

const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

const sdbm = str => {
  let arr = str.split('');
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
  );
};

const select = (from, selector) =>
  selector.split('.').reduce((prev, cur) => prev && prev[cur], from);

const setStyle = (el, ruleName, value) => (el.style[ruleName] = value);

const shallowClone = obj => Object.assign({}, obj);

const show = (...el) => [...el].forEach(e => (e.style.display = ''));

const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const similarity = (arr, values) => arr.filter(v => values.includes(v));

const size = value =>
  Array.isArray(value)
    ? value.length
    : value && typeof value === 'object'
      ? value.size || value.length || Object.keys(value).length
      : typeof value === 'string' ? new Blob([value]).size : 0;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const solveRPN = rpn => {
  const OPERATORS = {
    '*': (a, b) => a * b,
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '**': (a, b) => a ** b
  };
  const [stack, solve] = [
    [],
    rpn
      .replace(/\^/g, '**')
      .split(/\s+/g)
      .filter(el => !/\s+/.test(el) && el !== '')
  ];
  solve.forEach(symbol => {
    if (!isNaN(parseFloat(symbol)) && isFinite(symbol)) {
      stack.push(symbol);
    } else if (Object.keys(OPERATORS).includes(symbol)) {
      const [a, b] = [stack.pop(), stack.pop()];
      stack.push(OPERATORS[symbol](parseFloat(b), parseFloat(a)));
    } else {
      throw `${symbol} is not a recognized symbol`;
    }
  });
  if (stack.length === 1) return stack.pop();
  else throw `${rpn} is not a proper RPN. Please check it and try again`;
};

const sortCharactersInString = str =>
  str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};

const speechSynthesis = message => {
  const msg = new SpeechSynthesisUtterance(message);
  msg.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(msg);
};

const splitLines = str => str.split(/\r?\n/);

const spreadOver = fn => argsArr => fn(...argsArr);

const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};

const sum = (...arr) => [].concat(...arr).reduce((acc, val) => acc + val, 0);

const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);

const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

const take = (arr, n = 1) => arr.slice(0, n);

const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

const toCamelCase = str => {
  let s =
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

const toDecimalMark = num => num.toLocaleString('en-US');

const toEnglishDate = time => {
  try {
    return new Date(time)
      .toISOString()
      .split('T')[0]
      .replace(/-/g, '/');
  } catch (e) {}
};

const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

const toOrdinalSuffix = num => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ['st', 'nd', 'rd', 'th'],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};

const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

const toggleClass = (el, className) => el.classList.toggle(className);

const tomorrow = () => new Date(new Date().getTime() + 86400000).toISOString().split('T')[0];

const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

const truthCheckCollection = (collection, pre) => collection.every(obj => obj[pre]);

const unescapeHTML = str =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    tag =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"'
      }[tag] || tag)
  );

const union = (a, b) => Array.from(new Set([...a, ...b]));

const untildify = str => str.replace(/^~($|\/|\\)/, `${typeof require !== "undefined" && require('os').homedir()}$1`);

const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

const without = (arr, ...args) => arr.filter(v => !args.includes(v));

const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

const yesNo = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;

const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};

const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => (obj[prop] = values[index], obj), {});

var imports = {JSONToDate,JSONToFile,RGBToHex,UUIDGeneratorBrowser,UUIDGeneratorNode,anagrams,arrayToHtmlList,average,bottomVisible,byteSize,call,capitalize,capitalizeEveryWord,chainAsync,chunk,clampNumber,cleanObj,cloneRegExp,coalesce,coalesceFactory,collatz,collectInto,compact,compose,copyToClipboard,countOccurrences,countVowels,currentURL,curry,deepFlatten,defer,detectDeviceType,difference,differenceWith,digitize,distance,distinctValuesOfArray,dropElements,dropRight,elementIsVisibleInViewport,elo,escapeHTML,escapeRegExp,everyNth,extendHex,factorial,factors,fibonacci,fibonacciCountUntilNum,fibonacciUntilNum,filterNonUnique,flatten,flattenDepth,flip,fromCamelCase,functionName,gcd,geometricProgression,getDaysDiffBetweenDates,getScrollPosition,getStyle,getType,getURLParameters,groupBy,hammingDistance,hasClass,hasFlags,head,hexToRGB,hide,howManyTimes,httpsRedirect,inRange,initial,initialize2DArray,initializeArrayWithRange,initializeArrayWithValues,intersection,invertKeyValues,isAbsoluteURL,isArmstrongNumber,isArray,isArrayLike,isBoolean,isDivisible,isEven,isFunction,isNull,isNumber,isPrime,isPrimitive,isPromiseLike,isSorted,isString,isSymbol,isTravisCI,isValidJSON,join,last,lcm,lowercaseKeys,mapObject,mask,maxN,median,memoize,minN,negate,nthElement,objectFromPairs,objectToPairs,onUserInputChange,once,orderBy,palindrome,percentile,pick,pipeFunctions,pluralize,powerset,prettyBytes,primes,promisify,pull,pullAtIndex,pullAtValue,quickSort,randomHexColorCode,randomIntegerInRange,randomNumberInRange,readFileLines,redirect,reducedFilter,remove,repeatString,reverseString,round,runAsync,runPromisesInSeries,sample,sampleSize,scrollToTop,sdbm,select,setStyle,shallowClone,show,shuffle,similarity,size,sleep,solveRPN,sortCharactersInString,sortedIndex,speechSynthesis,splitLines,spreadOver,standardDeviation,sum,sumPower,symmetricDifference,tail,take,takeRight,timeTaken,toCamelCase,toDecimalMark,toEnglishDate,toKebabCase,toOrdinalSuffix,toSnakeCase,toggleClass,tomorrow,truncateString,truthCheckCollection,unescapeHTML,union,untildify,validateNumber,without,words,yesNo,zip,zipObject,}

export default imports;
