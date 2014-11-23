var urlStatus = require('./index.js')
var assert = require('assert')

describe('down', function () {
  it('should return message "down"', function(done){
    urlStatus('http://httpbindfsdf.org/get', function(status){
      assert.equal(status.message, "down")
      done()
    })
  })
  it('should return status "false"', function(done){
    urlStatus('http://httpbindfsdf.org/get', function(status){
      assert.equal(status.status, false)
      done()
    })
  })
})

describe('ok', function () {
  it('should return message "up"', function(done){
    urlStatus('http://httpbin.org/get', function(status){
      assert.equal(status.message, "up")
      done()
    })
  })
  it('should return status "200"', function(done){
    urlStatus('http://httpbin.org/get', function(status){
      assert.equal(status.status, 200)
      done()
    })
  })
})

describe('error', function () {
  it('should return message "not found"', function(done){
    urlStatus('http://httpbin.org/dsfsdfsd', function(status){
      assert.equal(status.message, "error")
      done()
    })
  })
  it('should return status "404"', function(done){
    urlStatus('http://httpbin.org/dsfsdfsd', function(status){
      assert.equal(status.status, "404")
      done()
    })
  })
})
