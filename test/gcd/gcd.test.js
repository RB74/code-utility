const test = require('tape');
const gcd = require('./gcd.js');

test('Testing gcd', (t) => {
	//For more information on all the methods supported by tape
	//Please go to https://github.com/substack/tape
	t.true(typeof gcd === 'function', 'gcd is a Function');
	//t.deepEqual(gcd(args..), 'Expected');
	//t.equal(gcd(args..), 'Expected');
	//t.false(gcd(args..), 'Expected');
	//t.throws(gcd(args..), 'Expected');
	t.end();
});