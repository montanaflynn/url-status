var urlStatus = require('./index.js')
var assert = require('assert')
var nock = require('nock');

nock('http://localhost:9876').get('/ok').reply(200,"").persist();
nock('http://localhost:9876').get('/404').reply(404,"").persist();

describe('Online', function () {
  it('should return message "Online"', function(done){
    urlStatus('http://localhost:9876/ok', function(status){
      assert.equal(status.message, "Online")
      done()
    })
  })
  it('should return status "200"', function(done){
    urlStatus('http://localhost:9876/ok', function(status){
      assert.equal(status.status, 200)
      done()
    })
  })
})

describe('Offline', function () {
  it('should return message "Offline"', function(done){
    urlStatus('http://nodomain:9876/', function(status){
      assert.equal(status.message, "Offline")
      done()
    })
  })
  it('should return status "false"', function(done){
    urlStatus('http://nodomain:9876/', function(status){
      assert.equal(status.status, false)
      done()
    })
  })
})

describe('Codes', function () {
  it('should return message "Not Found"', function(done){
    urlStatus('http://localhost:9876/404', function(status){
      assert.equal(status.message, "Not Found")
      done()
    })
  })
  it('should return status "404"', function(done){
    urlStatus('http://localhost:9876/404', function(status){
      assert.equal(status.status, "404")
      done()
    })
  })
  it('should return message "Status"', function(done){
    urlStatus('http://www.mocky.io/v2/54717a25db32047d00fed9fe', function(status){
      assert.equal(status.message, "Status")
      done()
    })
  })
})
