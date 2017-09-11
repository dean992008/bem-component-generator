# bem-component-generator

Module for generate bem component. Typically used together with gulp task runner.


<!-- # Install

```
npm install bem-generator --save-dev
```
or

```
yarn add bem-generator
``` -->

# Usage

```javascript

const gulp = require('gulp');
const bemGenerator = require('bem-generator');
gulp.task('bem', bemGenerator);

```

#Run in CLI 

```
gulp bem --name=test --sass --ts
```

Flag NAME - component name
The SASS and TS flag are the parts of the component that need to be generated.