'use strict';

var groupBy = require('lodash.groupby');
var assign = require('object-assign');

function merge(array, key) {

  var grouped = groupBy(array, function (obj) {
    return obj[key || 'id'];
  });

  var output = [];

  Object.keys(grouped).forEach(function (n) {
    output.push(assign.apply(assign, grouped[n]));
  });

  return output;
}

function right(array1, array2, key) {
  var input = [].concat(array1, array2);
  return merge(input, key);
}

function left(array1, array2, key) {
  var input = [].concat(array2, array1);
  return merge(input, key);
}

module.exports = left;

module.exports.right = right;

module.exports.left = left;
