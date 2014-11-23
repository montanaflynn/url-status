# url-status [![NPM Version](http://img.shields.io/npm/v/url-status.svg?style=flat-square)](https://www.npmjs.org/package/url-status) [![wercker continuous integration testing](http://img.shields.io/wercker/ci/546b83aba60c33c27c02add4.svg?style=flat-square)](https://app.wercker.com/project/bykey/2a16934d4add8e3fc3fb7ab83c7cc866) [![npm dependencies](http://img.shields.io/gemnasium/montanaflynn/url-status.svg?style=flat-square)](https://gemnasium.com/montanaflynn/human-date)

Returns the status of an HTTP get request.

### Install

```sh
npm install url-status --save
```

### Usage

```js
var urlStatus = require('url-status')

urlStatus('http://httpbin.org/get', function(status){
  console.log(status)
  // "up"
})

urlStatus('http://notarealdomain35252.org/', function(status){
  console.log(status)
  // "down"
})

urlStatus('http://httpbin.org/404', function(status){
  console.log(status)
  // "404 error"
})

### Todos

- Add error descriptions
- Complete testing

### Contributing

__Forks and pull requests are most welcomed.__

Please run `npm test` before sending a pull request. 

### MIT license

Copyright (c) 2014, Montana Flynn (http://anonfunction.com/)
