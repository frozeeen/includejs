# IncludeJS
include JS files into another JS file.

Use the `@include` to include the JS file.
```javascript
// somefile.js
const config = "JUSTACONFIG";

// base.js
@include("somefile.js");
console.log(config);
```

The result should be
```javascript
// build.js
const config = "JUSTACONFIG";
console.log(config);
```

### How to use

#### NodeJS
```properties
node include.js
```

or using nodemon to watch file changes inside src folder.
```properties
nodemon -w src -e js include.js
```

#### Python
Edit the `include.py` config.
```properties
python include.js
```

### But why frozeeen, why?
Why not?