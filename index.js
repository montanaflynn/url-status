var unirest = require('unirest')
var statusCodes = require('./status-codes.js')

module.exports = function getStatus(url, cb) {

  // Create our request object with timeout
  var request = unirest.get(url).timeout(10000)

  // Take response and get the http status
  request.end(function responseHandler(res) {
    var status = res.status
    var clientError = res.clientError
    var serverError = res.serverError

    if (!status || typeof status !== 'number') {
      buildResponse(false, "Offline")
    } else if (res.ok){
      buildResponse(status, "Online")
    } else if (clientError || serverError) {
      buildResponse(status, getResponseMessage(status))
    } else {
      buildResponse(status, "Status")
    }
  })

  function buildResponse(status, msg) {
    cb({
      status: status,
      message: msg
    })
  } 
}

function getResponseMessage(status) {
  return statusCodes[status] || "Status"
}
