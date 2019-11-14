var awsIot = require('aws-iot-device-sdk');
var config = require('../config');
//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//
var device = awsIot.device({
    keyPath: "./certs/e5d6f15864-private.pem.key",
    certPath: "./certs/e5d6f15864-certificate.pem.crt",
    caPath: "./certs/Amazon_Root_CA_1.pem",
    clientId: config.awsIOT.clientId,
    host: config.awsIOT.host
});

module.exports = {
    publish: function (_topic, _message, _callback) {
        device.publish(_topic, _message, function () {
            _callback();
        });
    }
}