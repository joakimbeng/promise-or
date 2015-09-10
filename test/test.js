'use strict';
var test = require('ava');
var or = require('../src');
var LazyPromise = require('lazy-promise');

test('false || "hi"', function (assert) {
	assert.plan(1);
	return or(Promise.resolve(false), Promise.resolve('hi'))
		.then(function (actual) {
			var expected = 'hi';
			assert.is(actual, expected);
		});
});

test('"hi" || false', function (assert) {
	assert.plan(1);
	return or(Promise.resolve('hi'), Promise.resolve(false))
		.then(function (actual) {
			var expected = 'hi';
			assert.is(actual, expected);
		});
});

test('non-promise values', function (assert) {
	assert.plan(1);
	return or(false, 'hi')
		.then(function (actual) {
			var expected = 'hi';
			assert.is(actual, expected);
		});
});

test('it does not run then when not necessary', function (assert) {
	assert.plan(2);
	var called = 0;
	var lazy = new LazyPromise(function (resolve) {
		called++;
		resolve(true);
	});
	return or(1, lazy)
		.then(function (actual) {
			var expected = 1;
			assert.is(actual, expected);
			assert.is(0, called);
		});
});
