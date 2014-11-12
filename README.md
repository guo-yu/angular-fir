## angular-fir ![NPM version](https://img.shields.io/npm/v/angular-fir.svg?style=flat) 

a fir.im SDK based on angular.js

### Installation
```bash
$ bower install angular-fir
```
Or use NPM instead:

```bash
$ npm install angular-fir
```

### Example
a realy simple checkUpdate example using `angular-fir`:
```js
angular
  .module('myApp', ['ionic', 'fir'])
  .config(['firProvider', function(firProvider) {
    firProvider.config({
      appId: 'xxx',
      token: 'xxx'
    })
  }])
  .controller('checkUpdate', ['$scope', 'fir', function($scope, fir){
    fir.version(function(err, result) {
      if (result.version > fir.version('0.1.0'))
        alert('有新版本可供下载!');
    });
  }])
```

### API
check this file: `src/fir.js`

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://raw.githubusercontent.com/turingou/docor/master/docor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.2.0