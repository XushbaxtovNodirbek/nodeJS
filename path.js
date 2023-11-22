const path = require('path'); 

console.log(path.basename(__filename)) // path.js
console.log(path.dirname(__filename)) // modules
console.log(path.extname(__filename)) // .js  

console.log(path.parse(__filename)) // { root: '/', dir: '/Users/.../modules', base: 'path.js', ext: '.js', name: 'path' }
console.log(path.join(__dirname,'test','hello.html')) // /Users/.../modules/test/hello.html
console.log(path.resolve(__dirname,'test','hello.html')) // /Users/.../modules/test/hello.html