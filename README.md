# object-array-merge

Merges two arrays of objects based on a provided key.

The default operation is to merge the two arrays with the left hand side (a) taking
precedence without mutating the original object.

```js
var a = [
  { id: 2, b: 2, c: 1 }
];

var b = [
  { id: 2, b: 7 },
];

merge(a, b, 'a');
// output = [ {id: 2, b: 2, c: 1} ];

merge.left(a, b, 'a');
// output = [ {id: 2, b: 2, c: 1} ];

merge.right(a, b, 'a');
// output = [ {id: 2, b: 7, c: 1} ];
```

## License ISC
