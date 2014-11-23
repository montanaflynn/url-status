var unirest = require('unirest')

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
  var ResponseTypes = {
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfied",
    417: "Expectation Failed",
    418: "Im A Teapot",
    423: "Locked",
    428: "Precondition Required",
    429: "Too Many Requests",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required"
  }

  return ResponseTypes[status]

}