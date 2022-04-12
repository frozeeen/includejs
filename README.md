# IncludeJS
include JS files into another JS file.

### How to use

Use the `@include` to include the JS file.
```javascript
// somefile.js
const config = "JUSTACONFIG";

// base.js
@include("somefile.js");
console.log(config);
```

As of now just edit the `include.py` then run.

The result should be.
```javascript
// bundle.js
const config = "JUSTACONFIG";
console.log(config);
```
