var unirest = require('unirest')

module.exports = function getStatus(url, cb) {

	// Create our request object with timeout
	var request = unirest.get(url).timeout(10000)

	// Take response and get the http status
	request.end(function responseHandler(res) {
		var statusCode = res.status
		var clientError = res.clientError
		var serverError = res.serverError

		if (!statusCode || typeof statusCode !== 'number') {
			buildResponse(false, "down")
		} else if (res.ok){
			buildResponse(statusCode, "up")
		} else if (clientError || serverError) {
			buildResponse(statusCode, "error")
		} else {
			buildResponse(statusCode, "code")
		}
	})

	function buildResponse(status, msg) {
		cb({
			status: status,
			message: msg
		})
	} 
}
