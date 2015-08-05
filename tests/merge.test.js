'use strict';

var test = require('tape');
var merge = require('../');

test('Default to merge Left', function (t) {
  t.plan(1);

  var a = [
    { a: 1, b2: 1 },
    { a: 2, b: 2, a1: 2 }
  ];

  var b = [
    { a: 2, b1: 1, b: 7 },
    { a: 1, a1: 3 }
  ];

  var output = merge(a, b, 'a');
  t.deepEqual(output, [ { a: 1, b2: 1, a1: 3 }, { a: 2, b: 2, a1: 2, b1: 1 } ]);

});

test('Merge Left', function (t) {
  t.plan(1);

  var a = [
    { a: 1, b2: 1 },
    { a: 2, b: 2, a1: 2 }
  ];

  var b = [
    { a: 2, b1: 1, b: 7 },
    { a: 1, a1: 3 }
  ];

  var output = merge.left(a, b, 'a');
  t.deepEqual(output, [ { a: 1, b2: 1, a1: 3 }, { a: 2, b: 2, a1: 2, b1: 1 } ]);

});

test('Merge Right', function (t) {
  t.plan(1);

  var a = [
    { a: 1, b2: 1 },
    { a: 2, b: 2, a1: 2 }
  ];

  var b = [
    { a: 2, b1: 1, b: 7 },
    { a: 1, a1: 3 }
  ];

  var output = merge.right(a, b, 'a');
  t.deepEqual(output, [ { a: 1, b2: 1, a1: 3 }, { a: 2, b: 7, a1: 2, b1: 1 } ]);

});
