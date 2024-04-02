# js.lib

## Features

- base64
  - encode
  - decode
- list
  - filterReduce
  - foldl
  - foldr
  - take
  - takeWhile
- heap
  - number
    - MinHeap
- node
  - fs
    - readFileSync
    - writeFileSync
- primitives
  - string
  - boolean


## Usage

```bash
npm install @f0c1s/js.lib
```

```javascript
const {readFileSync, writeFileSync} = require("@f0c1s/js.lib/node/fs");

```

## Coverage

```bash

# to cover and generate text output
npm run cover
# to cover and generate html output
npm run cover-html

```

Refer to [coverage.txt](./coverage.txt)

```bash
npm run cover


> @f0c1s/js.lib@0.0.7 test
> ./node_modules/.bin/jasmine

Randomized with seed 22906
Started
................................................................


64 specs, 0 failures
Finished in 0.013 seconds
Randomized with seed 22906 (jasmine --random=true --seed=22906)
-------------|---------|----------|---------|---------|-------------------
File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------|---------|----------|---------|---------|-------------------
All files    |   94.02 |    83.78 |   93.18 |   94.76 |                   
 array/fns   |    90.9 |    85.71 |     100 |    90.9 |                   
  list.js    |    90.9 |    85.71 |     100 |    90.9 | 43,57             
 heap        |   91.89 |       75 |     100 |   97.14 |                   
  min.js     |   91.89 |       75 |     100 |   97.14 | 151               
 node        |   96.77 |      100 |     100 |   96.77 |                   
  fs.js      |   96.77 |      100 |     100 |   96.77 | 58                
 primitives  |   91.17 |       80 |   84.61 |   91.04 |                   
  boolean.js |     100 |      100 |     100 |     100 |                   
  false.js   |     100 |      100 |     100 |     100 |                   
  string.js  |   88.67 |    78.26 |   79.31 |   88.46 | 47-55,87-91,117   
  true.js    |     100 |      100 |     100 |     100 |                   
 string/fns  |     100 |    81.81 |     100 |     100 |                   
  base64.js  |     100 |    81.81 |     100 |     100 | 35,75             
-------------|---------|----------|---------|---------|-------------------


```


## License

MIT 

copyright 2024 Anubhav Saini (iamanubhavsaini)
