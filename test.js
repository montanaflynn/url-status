var urlStatus = require('./index.js')
var assert = require('assert')

describe('Online', function () {
  it('should return message "Online"', function(done){
    urlStatus('http://httpbin.org/get', function(status){
      assert.equal(status.message, "Online")
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

describe('Offline', function () {
  it('should return message "Offline"', function(done){
    urlStatus('http://httpbindfsdf.org/get', function(status){
      assert.equal(status.message, "Offline")
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

describe('Errors', function () {
  it('should return message "Not Found"', function(done){
    urlStatus('http://httpbin.org/status/404', function(status){
      assert.equal(status.message, "Not Found")
      done()
    })
  })
  it('should return status "404"', function(done){
    urlStatus('http://httpbin.org/status/404', function(status){
      assert.equal(status.status, "404")
      done()
    })
  })
})
