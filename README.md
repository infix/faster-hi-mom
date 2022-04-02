# Hi, mom!

The 10x rockstar JavaScript library to say hi to your mom! forked from [hi-mom](https://github.com/tsivinsky/hi-mom)

## Install

#### yarn

```bash
yarn add faster-hi-mom
```

#### npm

```bash
npm i faster-hi-mom
```

#### unpkg.com (UMD)

```html

<script src="https://unpkg.com/hi-mom/lib/faster-hi-mom.umd.js"></script>
```

## Usage

#### CommonJS

```javascript
const { hiMom } = require("faster-hi-mom");

console.log(hiMom()); // Hi, mom!
```

#### ES Modules

```javascript
import { hiMom } from "faster-hi-mom";

console.log(hiMom()); // Hi, mom!
```

#### Browser (UMD)

```javascript
console.log(hiMom.hiMom());
```

#### custom mother name

```javascript
import { hiMom } from "faster-hi-mom";

console.log(hiMom("Mother")); // Hi, Mother!
```

## Languages supported

- ar - Arabic
- ar-IQ - Iraqi Arabic
- as - Assamese
- ca - Catalan
- cn - Chinese
- cs - Czech
- de - German
- en - English
- en-AU - Australian English
- es - Spanish
- fr - French
- he - Hebrew
- hi - Hindi
- hu - Hungarian
- id - Indonesian
- it - Italian
- ja - Japanese
- ko - Korean
- ms - Malay
- nl-BE - Flemish
- nl-NL - Dutch
- pl - Polish
- pt - Portuguese
- ro - Romanian
- ru - Russian
- si - Sinhala
- sr - Serbian
- ta - Tamil
- th - Thai
- tr - Turkish
- ua - Ukrainian
- vi - Vietnamese
- zh - Zhongwen

# Performance and benchmarking

```bash
yarn run bench
```

Now you can say hi to your mom! like a 10x engineer 😎

`faster-hi-mom` is around 25-65x faster than `hi-mom`

| benchmark vs ops/sec  | hi-mom    | faster-hi-mom | improvement |
|-----------------------|-----------|---------------|-------------|
| no args               | 3,289,873 | 211,331,050   | 6423%       |
| custom name           | 3,512,832 | 121,363,740   | 3454%       |
| random names          | 3,097,499 | 79,534,057    | 2567%       |
| random strings        | 3,132,304 | 80,496,426    | 2569%       |

### Benchmark result

```bash
hi-mom no args x 3,289,873 ops/sec ±0.89% (88 runs sampled)
faster-hi-mom no args x 211,331,050 ops/sec ±0.48% (93 runs sampled)
hi-mom with custom-name x 3,512,832 ops/sec ±0.44% (91 runs sampled)
faster-hi-mom with custom-name x 121,363,740 ops/sec ±0.51% (90 runs sampled)
hi-mom with 10000 names x 3,097,499 ops/sec ±1.05% (92 runs sampled)
faster-hi-mom with 10000 names x 79,534,057 ops/sec ±0.31% (91 runs sampled)
hi-mom with 10000 random strings x 3,132,304 ops/sec ±1.09% (93 runs sampled)
faster-hi-mom with 10000 random strings x 80,496,426 ops/sec ±0.18% (90 runs sampled)
```
